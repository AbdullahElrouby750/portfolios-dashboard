import React, { useState } from 'react'
import ModalWrapper from '../../../shared/components/modal/ModalWrapper'
import FormLayout from '../../auth/component/signup/FormLayout'
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN'
import { useNavigate } from 'react-router';
import ProjectsForm from './ProjectsForm';

function AddModal() {
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
                <p className=' text-brand-default text-2xl text-center w-full font-bold'>Add New Project</p>
            </div>
            <FormLayout>
                <ProjectsForm onHide={onHide}/>
            </FormLayout>
        </ModalWrapper>
    )
}

export default AddModal