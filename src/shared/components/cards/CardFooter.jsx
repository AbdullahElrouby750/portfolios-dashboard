import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import BrandColorIcons from '../Icons/BrandColorIcon'
import { useLocation, useNavigate } from 'react-router';
import useStore from '../../hooks/conetext-hooks/useStore';
import navigateToModal from '../../utils/navigateToModal';


const dateOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
};
function CardFooter({ by, since, portfolio, userRole, editFn, deleteFn, elementData }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { setRequest } = useStore();
    return (
        <div className={` w-full ${userRole !== 'user' ? 'h-2/6' : '1/6'} bg-neutral-dark-borders p-1.5 rounded-b-2xl`}>
            <p className=' w-full text-nowrap text-start me-1'>By : <span className=' text-brand-dark-default'> {by}</span></p>
            <p className=' w-full text-nowrap text-start me-1'>since : <span className=' text-brand-dark-default'> {new Date(since).toLocaleString('en-GB', dateOptions)}</span></p>
            <p className=' w-full text-nowrap text-start me-1'>portfolio : <span className=' text-brand-dark-default'> {portfolio.toString()}</span></p>
            {(userRole !== 'user') &&
                <div className=' w-full h-1/2 flex justify-around items-center'>
                    <BrandColorIcons onClick={() => deleteFn({ path: '/projects/delete', data: { idsArr: [elementData._id] } })} Icon={FaTrash} className={' text-2xl text-danger-default hover:text-danger-dark-default active:text-danger-active cursor-pointer'} />
                    <BrandColorIcons
                        onClick={() => navigateToModal(location, navigate, 'update', { showState: true }, setRequest, editFn, elementData, 'Update', '/projects/update', 'projects')}
                        Icon={FaEdit}
                        className={' text-2xl text-yellow-500 hover:text-yellow-400 active:text-yellow-600 cursor-pointer'} />
                </div>
            }
        </div>
    )
}

export default CardFooter