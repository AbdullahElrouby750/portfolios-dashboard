import { Outlet, useLocation, useNavigate } from 'react-router'
import { useMemo, useState } from 'react'
import { useApiDelete, useApiGet, useApiPost, useApiPut } from '../../../shared/hooks/APIs hooks/useApi'
import ProjectsToolBar from '../component/ProjectsToolBar'
import Card from '../../../shared/components/cards/Card'
import CardsDisplayLayout from '../../../shared/components/cards/CardsDisplayLayout'
import PageInfo from '../../../shared/components/PageInfo'
import PreventClickLayer from '../../../shared/components/PreventClickLayer'
import LoadingScrean from '../../../shared/components/state-screens/LoadingScreen'
import useAuth from '../../../shared/hooks/conetext-hooks/useAuth'
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN'
import useStore from '../../../shared/hooks/conetext-hooks/useStore'
import navigateToModal from '../../../shared/utils/navigateToModal'

const cardKeys = {
    title: 'projectTitle',
    type: 'projectType',
    bodyCover: 'projectScreenshot',
    by: 'name',
    since: 'projectUploadedDate',
    portfolio: 'projectAvailability',
}

const typeValues = {
    "1": "Front-End",
    "2": "Back-End",
    "3": "Flutter",
}



function Projects() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user: loggedinUser } = useAuth()
    const { setRequest } = useStore()
    const [totlalProjectsCount, setTotlalProjectsCount] = useState(null);
    const [search, setSearch] = useState(null);
    const [updateLists, setUpdateLlists] = useState({ idsArr: [], projectAvailabilityArr: [] })
    const [updatingGroups, setUpdatingGroups] = useState(false)

    const queryKey = ["projects", "list"];
    const { data: groupedProjects, isLoading: gettingProjects, error: errorGetting, isFetching } = useApiGet('/projects/getAll', { groupBy: 'projectType', sort: 1, search: search, doPopulation: true }, queryKey);
    const { mutate: addProject, isPending: adding, error: errorAdding, isSuccess: added } = useApiPost(queryKey);
    const { mutate: editProject, isPending: editing, error: errorEditing, isSuccess: edited } = useApiPut(queryKey, () => {setUpdateLlists({ idsArr: [], projectAvailabilityArr: [] }); setUpdatingGroups(false)});
    const { mutate: deleteProject, isPending: deleteing, error: deleteingErr } = useApiDelete(queryKey);

    const projects = useMemo(() => {
        if (!groupedProjects) return [];
        setTotlalProjectsCount(groupedProjects.reduce((acc, current) => acc + current.count, 0));
        return groupedProjects.flatMap(group => group.list)
    }, [groupedProjects])

    const typessCount = groupedProjects && groupedProjects?.map(group => {
        return {
            Type: group._id === '1' ? 'Front-End' : group._id === '2' ? 'Back-end' : group._id === '3' ? 'Flutter' : 'Unknown Type',
            count: group.count,
        }
    });

    if (adding || editing || gettingProjects || deleteing) return <LoadingScrean loadingText={adding ? 'Adding one Project' : editing ? 'Editing project(s)' : gettingProjects ? 'Fetching Project(s)' : deleteing ? 'Deleteing Project(s)' : 'Loading'} />

    return (
        <div className=' w-full h-lvh flex flex-col justify-between items-center p-4.5 relative'>
            {location.pathname.includes('projects/add') && <PreventClickLayer className={' bg-secondary-dark-default'} />}
            {addProject && <ProjectsToolBar navigate={navigate} location={location} addFn={addProject} userRole={loggedinUser.role} setUpdatingGroups={setUpdatingGroups} updatingGroups={updatingGroups}/>}
            {!updatingGroups && <PageInfo title='Projects' info={typessCount} infoKeyName={['Type', 'count']} totalCount={totlalProjectsCount} />}
            <CardsDisplayLayout searchVal={search} setSearchVal={setSearch} queryKey={queryKey} isLoading={isFetching} updatingGroups={updatingGroups}>
                {projects.map(project => <Card
                    key={project._id}
                    cardData={project}
                    cardKeys={cardKeys}
                    typeValues={typeValues}
                    loggedInUserData={loggedinUser}
                    userUploadedByData={project.projectUploadedBy}
                    editFn={editProject}
                    deleteFn={deleteProject}
                    setUpdateLlists={setUpdateLlists}
                    updatingGroups={updatingGroups}
                />)}
            </CardsDisplayLayout>
            {updateLists.idsArr.length > 0 &&
                <BrandColorBTN className=' mt-5 w-1/4'
                onClick={() => navigateToModal(location, navigate, 'confirmDenyModal', { showState: true }, setRequest, editProject, updateLists, 'Update', 'projects/update','projects', "Confirm project's updates")}>
                    Update Projects
                </BrandColorBTN>
            }
            <Outlet />
        </div>
    )
}

export default Projects