import React from 'react'
import ProfileImg from '../../../shared/components/ImgFrames/ProfileImg'
import { FaTrash, FaEdit } from 'react-icons/fa';
import BrandColorIcons from '../../../shared/components/Icons/BrandColorIcon';
import useStore from '../../../shared/hooks/conetext-hooks/useStore';

const handleEdit = (location, navigate, to, state, setRequest, editFn, userData) => {
    setRequest({
        apiFn: editFn,
        type: 'Update',
        data: userData,
        path: '/account/update'
    });
    if (!location.pathname.includes(`users/${to}`)) navigate(`${to}`, { state: state })
}


function UserBar({ userData, loggedInUserId, loggedInUseRole, haveAccess, deleteFn, editFn, location, navigate }) {
    const joinDate = new Date(userData?.joinDate);
    const strDate = joinDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }) ?? 'dd/mm/yyyy';

    const { setRequest } = useStore();

    return (
        <div className=' w-full h-1/8 min-h-1/9 flex justify-around items-center text-lg
        shadow-neutral-borders dark:shadow-neutral-dark-borders shadow-lg
        hover:shadow-xl
        text-neutral-text-dark dark:text-neutral-dark-text-light
        rounded-2xl my-4.5 px-3.5 py-1
        transition-all duration-300'
        >
            <div className=' w-1/12 h-full flex justify-center items-center cursor-pointer hover:shadow-brand-dark shadow-xl rounded-4xl transition-shadow duration-300'>
                <ProfileImg profileImg={userData.profileImg} profileImgStyle={'w-1/2'} />
            </div>


            <div className=' w-1/4 h-full flex justify-center items-center'>{userData.name ?? 'Name'}</div>


            <div className=' w-1/4 h-full flex justify-center items-center overflow-x-clip'>{userData.email ?? 'Email'}</div>


            <div className=' w-1/12 h-full flex justify-center items-center'>{userData.role ?? 'Role'}</div>


            <div className=' w-1/6 h-full flex justify-center items-center'>{strDate}</div>


            <div className=' w-1/6 h-full flex justify-around items-center px-3.5'>
                <BrandColorIcons className={` text-danger-default hover:text-danger-dark active:text-danger-active
                                            dark:text-danger-dark-default dark:hover:text-danger-dark-dark dark:active:text-danger-dark-active
                                            transition-all drop-shadow-blue-300 cursor-pointer ${(loggedInUseRole !== 'rouby' || userData._id === loggedInUserId) ? 'text-danger-disabled hover:text-danger-disabled active:text-danger-disabled dark:text-danger-disabled dark:hover:text-danger-disabled dark:active:text-danger-disabled cursor-default' : ''}
                                            `}
                    Icon={FaTrash}
                    onClick={() => { ((loggedInUseRole === 'rouby' || haveAccess) && userData.role !== 'rouby') ? deleteFn({ path: `/account/deleteUser`, params: { id: userData._id } }) : () => { } }}
                />
                |
                <BrandColorIcons
                    onClick={() => handleEdit(location, navigate, 'update', { showState: true }, setRequest, editFn, userData)}
                    className={' text-yellow-600 hover:text-yellow-400 active:text-yellow-800 transition-all drop-shadow-blue-300 cursor-pointer'}
                    Icon={FaEdit} />
            </div>


        </div>
    )
}

export default UserBar