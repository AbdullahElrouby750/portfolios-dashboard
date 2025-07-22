import React from 'react'
import DashboardLayout from '../component/DashboardLayout'
import useAuth from '../../../shared/hooks/conetext-hooks/useAuth'

function Dashboard() {
    const { user } = useAuth()
    return (
        <DashboardLayout >
            <p className=' text-4xl'>succssfully logged in, Hi {user.name ?? 'user'}</p>
        </DashboardLayout>
    )
}

export default Dashboard