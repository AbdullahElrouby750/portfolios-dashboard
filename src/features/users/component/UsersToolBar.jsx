import React from 'react'
import ToolBarWrapper from '../../../shared/components/toolBar/ToolBarWrapper'
import useStore from '../../../shared/hooks/conetext-hooks/useStore';
import navigateToModal from '../../../shared/utils/navigateToModal';


function UsersToolBar({ navigate, location, addFn, userRole, userAccess }) {
    const { setRequest } = useStore()
    return <ToolBarWrapper>

        <div className=' cursor-pointer hover:text-yellow-400 active:text-yellow-600 transition-all '>
            <p>Filter</p>
        </div>

        {
            (userAccess) &&
            <div className={` cursor-pointer hover:text-success-default active:text-success-active transition-all duration-300 
                            ${location.pathname.includes('users/add') ? 'text-success-default' : ''}`}
                onClick={() => navigateToModal(location, navigate, 'add', { showState: true }, setRequest, addFn, 'Add', '/account/create', 'usres')}>
                <p>Add</p>
            </div>
        }

        {
            (!userAccess) &&
            <div className=' cursor-pointer hover:text-brand-default active:text-brand-active transition-all '>
                <p>Request Access</p>
            </div>
        }
    </ToolBarWrapper>
}

export default UsersToolBar