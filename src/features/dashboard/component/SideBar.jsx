import React from 'react'
import SideBarList from './SideBarList'
import { FaFile } from 'react-icons/fa'

function SideBar() {
    return (
        <aside className=' w-1/5 h-full px-2 pt-3 flex flex-col justify-around
        border-r-2 border-r-neutral-borders dark:border-r-neutral-borders
        bg-neutral-background dark:bg-neutral-dark-background'>
            <ul className='w-full h-1/3 flex flex-col justify-around ps-1.5 border-b-4 border-neutral-borders'>
                <p className=' text-brand-default dark:text-brand-dark-default text-2xl'>Dashboard</p>
                <SideBarList icon={FaFile} title={'Profile'} navigateTo={'/profiles'} />
                <SideBarList icon={FaFile} title={'Users'} navigateTo={'/users'} />
            </ul>

            <ul className='w-full h-2/3 flex flex-col justify-around ps-1.5'>
                <p className=' text-brand-default dark:text-brand-dark-default text-2xl'>Portfolio</p>
                <SideBarList icon={FaFile} title={'Projects'} navigateTo={'/projects'} />
                <SideBarList icon={FaFile} title={'Resumes'} navigateTo={'/resumes'} />
                <SideBarList icon={FaFile} title={'Contact'} navigateTo={'/contact'} />
                <SideBarList icon={FaFile} title={'Themes'} navigateTo={'/theme'} />
            </ul>
        </aside>
    )
}

export default SideBar