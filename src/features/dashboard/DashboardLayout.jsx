import React from 'react'
import useAuth from '../../shared/hooks/conetext-hooks/useAuth'

function DashboardLayout() {
    const { user } = useAuth()
    return (
        <div>
            <p className=' text-4xl'>succssfully logged in, Hi {user.name ?? 'user'}</p>
        </div>
    )
}

export default DashboardLayout