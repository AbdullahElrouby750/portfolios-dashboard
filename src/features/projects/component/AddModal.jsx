import { useState } from 'react'
import ModalWrapper from '../../../shared/components/modal/ModalWrapper'
import FormLayout from '../../auth/component/signup/FormLayout'
import { useNavigate } from 'react-router';
import ProjectsForm from './ProjectsForm';
import useStore from '../../../shared/hooks/conetext-hooks/useStore';

function AddModal() {
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
        <ModalWrapper show={show}>
            <div className=' w-full'>
                <p className=' text-brand-default text-2xl text-center w-full font-bold'>{request.type} Project</p>
            </div>
            <FormLayout>
                <ProjectsForm onHide={onHide} />
            </FormLayout>
        </ModalWrapper>
    )
}

export default AddModal