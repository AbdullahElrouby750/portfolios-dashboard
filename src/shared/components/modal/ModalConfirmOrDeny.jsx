import { useState } from 'react'
import { data, useNavigate } from 'react-router';
import ModalWrapper from './ModalWrapper'
import useStore from '../../hooks/conetext-hooks/useStore';
import DangerBTN from '../BTNs/DangerBTN';
import SuccessBTN from '../BTNs/SuccessBTN';

function ModalConfirmOrDeny() {
    const { request } = useStore()
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const onHide = () => {
        setShow(false);
        setTimeout(() => {
            navigate(-1);
        }, 150)
    }
    return (
        <ModalWrapper show={show} className={' h-1/2 top-1/4'}>
            <div className=' w-full'>
                <p className=' text-brand-default text-2xl text-center w-full font-bold'>{request.modalText ? request.modalText : 'Confirm Action'}</p>
            </div>

            <div className=' w-full flex justify-around items-center'>
                <DangerBTN className=' w-1/3' onClick={onHide}>Cancel</DangerBTN>
                <SuccessBTN className=' w-1/3' onClick={() => {
                    request.apiFn({path: request.path, data: request.data});
                    onHide();
                }}>Confierm</SuccessBTN>
            </div>

        </ModalWrapper>
    )
}

export default ModalConfirmOrDeny