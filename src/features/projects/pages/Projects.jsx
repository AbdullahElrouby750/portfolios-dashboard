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


// [
//     {
//         "_id": "0",
//         "count": 6,
//         "list": [
//             {
//                 "_id": "68bb3197d48d024f934e61db",
//                 "projectTitle": "Rouby",
//                 "projectType": "0",
//                 "projectDescription": "from postman",
//                 "projectGitHubLink": "https://github.com/AbdullahElrouby750/Rouby-portfolio",
//                 "projectDemoLink": "https://rouby-portfolio.vercel.app/",
//                 "projectScreenshot": "uploads\\39213c89-be90-48a8-95d2-4797dd17ab6c-Screenshot 2025-07-15 033452.png",
//                 "projectAvailability": true,
//                 "projectCreationDate": "2024-09-24T00:00:00.000Z",
//                 "projectUploadedDate": "2025-09-05T18:42:09.968Z",
//                 "projectUploadedBy": {
//                     "_id": "68b466a00dae9f887e22e550",
//                     "name": "rouby testing",
//                     "email": "avengersassemble750@gmail.com",
//                     "role": "user",
//                     "profileImg": "http://localhost:3000/uploads/7825d9f6-13f9-471c-81e8-11da725d5ae3-IMG_20231221_160056.jpg",
//                     "__v": 0
//                 },
//                 "__v": 0
//             },
//             {
//                 "_id": "68bb4b7ea41856666ded1cec",
//                 "projectTitle": "Rouby",
//                 "projectType": "0",
//                 "projectDescription": "from postman",
//                 "projectGitHubLink": "https://github.com/AbdullahElrouby750/Rouby-portfolio",
//                 "projectDemoLink": "https://rouby-portfolio.vercel.app/",
//                 "projectScreenshot": "uploads\\e17ce764-fe5a-4ffe-a1d1-694c5bb8da19-Screenshot 2025-07-15 033452.png",
//                 "projectAvailability": true,
//                 "projectCreationDate": "2024-09-24T00:00:00.000Z",
//                 "projectUploadedDate": "2025-09-05T20:41:50.256Z",
//                 "projectUploadedBy": {
//                     "_id": "68b466a00dae9f887e22e550",
//                     "name": "rouby testing",
//                     "email": "avengersassemble750@gmail.com",
//                     "role": "user",
//                     "profileImg": "http://localhost:3000/uploads/7825d9f6-13f9-471c-81e8-11da725d5ae3-IMG_20231221_160056.jpg",
//                     "__v": 0
//                 },
//                 "__v": 0
//             },
//             {
//                 "_id": "68bb52c2eca512da77988b0e",
//                 "projectTitle": "Rouby",
//                 "projectType": "0",
//                 "projectDescription": "from postman",
//                 "projectGitHubLink": "https://github.com/AbdullahElrouby750/Rouby-portfolio",
//                 "projectDemoLink": "https://rouby-portfolio.vercel.app/",
//                 "projectScreenshot": "uploads\\b5b72553-f74e-4c02-a430-a0dbd77df5e3-Screenshot 2025-07-15 033452.png",
//                 "projectAvailability": true,
//                 "projectCreationDate": "2024-09-24T00:00:00.000Z",
//                 "projectUploadedDate": "2025-09-05T21:14:36.136Z",
//                 "projectUploadedBy": {
//                     "_id": "68b466a00dae9f887e22e550",
//                     "name": "rouby testing",
//                     "email": "avengersassemble750@gmail.com",
//                     "role": "user",
//                     "profileImg": "http://localhost:3000/uploads/7825d9f6-13f9-471c-81e8-11da725d5ae3-IMG_20231221_160056.jpg",
//                     "__v": 0
//                 },
//                 "__v": 0
//             },
//             {
//                 "_id": "68bc691bd2bf14bd385375e3",
//                 "projectTitle": "Rouby",
//                 "projectType": "0",
//                 "projectDescription": "from thhe test button just for testing",
//                 "projectGitHubLink": "https://github.com/AbdullahElrouby750/Rouby-portfolio",
//                 "projectDemoLink": "https://rouby-portfolio.vercel.app/",
//                 "projectScreenshot": "uploads\\c460a6b2-c11c-4374-93c3-3e73545a995d-Screenshot 2025-07-15 033452.png",
//                 "projectAvailability": true,
//                 "projectCreationDate": "2024-09-24T00:00:00.000Z",
//                 "projectUploadedDate": "2025-09-06T16:53:57.516Z",
//                 "projectUploadedBy": {
//                     "_id": "68799e8bf1caf5ac338222fd",
//                     "name": "Abdullah Elrouby",
//                     "email": "roubyofficial@gmail.com",
//                     "role": "rouby",
//                     "profileImg": "D:\\codez\\resume\\backend mangement\\uploads\\d7a32aac-e5e5-4dfc-a68b-1a54f3ca5882-IMG_20231221_160056.jpg",
//                     "__v": 0
//                 },
//                 "__v": 0
//             },
//             {
//                 "_id": "68bc6d41d2bf14bd385375e8",
//                 "projectTitle": "Rouby",
//                 "projectType": "0",
//                 "projectDescription": "context in projectsForm",
//                 "projectGitHubLink": "https://github.com/AbdullahElrouby750/Rouby-portfolio",
//                 "projectDemoLink": "https://rouby-portfolio.vercel.app/",
//                 "projectScreenshot": "uploads\\6ea89494-f4b3-45b3-a37f-bda7846ea206-Screenshot 2025-07-15 033452.png",
//                 "projectAvailability": true,
//                 "projectCreationDate": "2024-09-24T00:00:00.000Z",
//                 "projectUploadedDate": "2025-09-06T16:53:57.516Z",
//                 "projectUploadedBy": {
//                     "_id": "68799e8bf1caf5ac338222fd",
//                     "name": "Abdullah Elrouby",
//                     "email": "roubyofficial@gmail.com",
//                     "role": "rouby",
//                     "profileImg": "D:\\codez\\resume\\backend mangement\\uploads\\d7a32aac-e5e5-4dfc-a68b-1a54f3ca5882-IMG_20231221_160056.jpg",
//                     "__v": 0
//                 },
//                 "__v": 0
//             },
//             {
//                 "_id": "68bc7682d2bf14bd385375f6",
//                 "projectTitle": "Rouby",
//                 "projectType": "0",
//                 "projectDescription": "it was the missing fkn parntethies after the preventDefault",
//                 "projectGitHubLink": "https://github.com/AbdullahElrouby750/Rouby-portfolio",
//                 "projectDemoLink": "https://rouby-portfolio.vercel.app/",
//                 "projectScreenshot": "uploads\\45e34063-0059-47e1-8f95-889c04f552c9-Screenshot 2025-07-15 033452.png",
//                 "projectAvailability": true,
//                 "projectCreationDate": "2024-09-24T00:00:00.000Z",
//                 "projectUploadedDate": "2025-09-06T16:53:57.516Z",
//                 "projectUploadedBy": {
//                     "_id": "68799e8bf1caf5ac338222fd",
//                     "name": "Abdullah Elrouby",
//                     "email": "roubyofficial@gmail.com",
//                     "role": "rouby",
//                     "profileImg": "D:\\codez\\resume\\backend mangement\\uploads\\d7a32aac-e5e5-4dfc-a68b-1a54f3ca5882-IMG_20231221_160056.jpg",
//                     "__v": 0
//                 },
//                 "__v": 0
//             }
//         ]
//     }
// ]

const cardKeys = {
    title: 'projectTitle',
    type: 'projectType',
    bodyCover: 'projectScreenshot',
    by: 'name',
    since: 'projectUploadedDate',
    portfolio: 'projectAvailability',
}

const typeValues = {
    "1":"Front-End",
    "2":"Back-End",
    "3":"Flutter",
}


function Projects() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user: loggedinUser } = useAuth()
    const [totlalProjectsCount, setTotlalProjectsCount] = useState(null);
    const [search, setSearch] = useState(null);

    const queryKey = ["projects", "list"];
    const { data: groupedProjects, isLoading: gettingProjects, error: errorGetting, isFetching } = useApiGet('/projects/getAll', { groupBy: 'projectType', sort: 1, search: search, doPopulation: true }, queryKey);
    const { mutate: addProject, isPending: adding, error: errorAdding, isSuccess: added } = useApiPost(queryKey);
    const { mutate: editProject, isPending: editing, error: errorEditing, isSuccess: edited } = useApiPut(queryKey);
    const { mutate: deleteProject, isPending: deleteing, error: deleteingErr} = useApiDelete(queryKey);

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

    if (adding, editing, gettingProjects, deleteing) return <LoadingScrean loadingText={adding ? 'Adding one Project' : editing ? 'Editing project(s)' : gettingProjects ? 'Fetching Project(s)' : deleteing ? 'Deleteing Project(s)' : 'Loading'} />

    return (
        <div className=' w-full h-lvh flex flex-col justify-between items-center p-4.5 relative'>
            {location.pathname.includes('projects/add') && <PreventClickLayer className={' bg-secondary-dark-default'} />}
            {addProject && <ProjectsToolBar navigate={navigate} location={location} addFn={addProject} userRole={loggedinUser.role}/>}
            <PageInfo title='Projects' info={typessCount} infoKeyName={['Type', 'count']} totalCount={totlalProjectsCount} />
            <CardsDisplayLayout searchVal={search} setSearchVal={setSearch} queryKey={queryKey} isLoading={isFetching}>
                {projects.map(project => <Card 
                        key={project._id} 
                        cardData={project} 
                        cardKeys={cardKeys} 
                        typeValues={typeValues} 
                        loggedInUserData={loggedinUser} 
                        userUploadedByData={project.projectUploadedBy}
                        editFn={editProject}
                        deleteFn={deleteProject}
                        />)}
            </CardsDisplayLayout>
            <Outlet />
        </div>
    )
}

export default Projects