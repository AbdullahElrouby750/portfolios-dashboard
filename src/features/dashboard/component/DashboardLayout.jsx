import React from 'react'
import { Outlet } from 'react-router'
import SideBar from './SideBar'

function DashboardLayout() {
    return (
        <div className=' w-full h-lvh flex bg-neutral-background dark:bg-neutral-dark-background'>
            <SideBar />
            <Outlet/>
        </div>
    )
}

export default DashboardLayout