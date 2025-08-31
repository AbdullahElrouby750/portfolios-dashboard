import Card from '../../../shared/components/cards/Card'
import PageInfo from '../../../shared/components/PageInfo'
import CardsDisplayLayout from '../../../shared/components/cards/CardsDisplayLayout'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { AnimatePresence } from 'motion/react'
import PreventClickLayer from '../../../shared/components/PreventClickLayer'
import ProjectsToolBar from '../component/ProjectsToolBar'

function Projects() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className=' w-full h-lvh flex flex-col justify-between items-center p-4.5 relative'>
            {location.pathname.includes('projects/add') && <PreventClickLayer className={' bg-secondary-dark-default'} />}
            <ProjectsToolBar navigate={navigate} location={location} />
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