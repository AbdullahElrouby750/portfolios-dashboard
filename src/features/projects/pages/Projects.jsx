import Card from '../../../shared/components/cards/Card'
import PageInfo from '../../../shared/components/PageInfo'
import CardsDisplayLayout from '../../../shared/components/cards/CardsDisplayLayout'
import { Outlet, useLocation, useNavigate } from 'react-router'
import PreventClickLayer from '../../../shared/components/PreventClickLayer'
import ProjectsToolBar from '../component/ProjectsToolBar'
import { useApiPost, useApiPut } from '../../../shared/hooks/APIs hooks/useApi'
import LoadingScrean from '../../../shared/components/state-screens/LoadingScreen'


function Projects() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryKey = ["projects", "list"];
    const { mutate: addProject, isPending: adding, error: errorAdding, isSuccess: added } = useApiPost(queryKey);
    const { mutate: editProject, isPending: editing, error: errorEditing, isSuccess: edited } = useApiPut(queryKey);

    if (adding, editing) return <LoadingScrean loadingText={adding ? 'Adding one Project' : editing ? 'Editing project(s)' : 'Loading'} />

    return (
        <div className=' w-full h-lvh flex flex-col justify-between items-center p-4.5 relative'>
            {location.pathname.includes('projects/add') && <PreventClickLayer className={' bg-secondary-dark-default'} />}
            {addProject && <ProjectsToolBar navigate={navigate} location={location} addFn={addProject} />}
            <PageInfo title='Projects' />
            <CardsDisplayLayout >
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsDisplayLayout>
            <Outlet />
        </div>
    )
}

export default Projects