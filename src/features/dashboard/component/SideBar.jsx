import React from 'react'
import { Navigate } from 'react-router'
import { FaFile, FaUser, FaUsers, FaPhone, FaPalette, FaFileCode  } from 'react-icons/fa'
import profilePalceHolder from '../../../assets/profileIgmPlaceholder.png'
import useAuth from '../../../shared/hooks/conetext-hooks/useAuth'
import SideBarList from './SideBarList'
import DangerBtn from '../../../shared/components/BTNs//DangerBTN';
import { useApiPost } from '../../../shared/hooks/APIs hooks/useApi'
import LoadingScrean from '../../../shared/components/state-screens/LoadingScreen'
import DarkModeToggler from './DarkModeToggler'


function SideBar() {
    const { user, logout, setLoggedOut } = useAuth();

    const onSucessFn = () => {
        logout();
        setLoggedOut(true);
    }

    const queryKey = ['currentUser', 'auth'];

    const { mutate: logoutFn, isPending, error, isSuccess } = useApiPost(queryKey, onSucessFn)

    if (isPending) return <LoadingScrean loadingText={'Logging out'} />

    if (isSuccess) return <Navigate to={'/login'} />

    return (
        <aside className=' w-1/4 h-full px-2 pt-3 flex flex-col justify-around
        border-r-2 border-r-neutral-borders dark:border-r-neutral-borders
        bg-neutral-background dark:bg-neutral-dark-background relative'>

            <DarkModeToggler />

            <ul className='w-full h-1/3 flex flex-col justify-around ps-1.5 border-b-4 border-neutral-borders'>
                <p className=' text-brand-default dark:text-brand-dark-default text-2xl'>Dashboard</p>
                <SideBarList profileImg={user.profileImg} profileImgPlaceholder={profilePalceHolder} title={'Profile'} navigateTo={'/profile'} />
                <SideBarList icon={FaUsers} title={'Users'} navigateTo={'/users'} />
            </ul>
            <ul className='w-full h-2/3 flex flex-col justify-around ps-1.5'>
                <p className=' text-brand-default dark:text-brand-dark-default text-2xl'>Portfolio</p>
                <SideBarList icon={FaUser} title={"Portfolio's user"} navigateTo={'/portfolio-user'} />
                <SideBarList icon={FaFileCode} title={'Projects'} navigateTo={'/projects'} />
                <SideBarList icon={FaFile} title={'Resumes'} navigateTo={'/resumes'} />
                <SideBarList icon={FaPhone} title={'Contact'} navigateTo={'/contact'} />
                <SideBarList icon={FaPalette} title={'Themes'} navigateTo={'/themes'} />
                <DangerBtn className=' w-1/2' onClick={() => logoutFn({ path: '/logout', data: {} })}>Log out</DangerBtn>
            </ul>
        </aside>
    )
}

export default SideBar