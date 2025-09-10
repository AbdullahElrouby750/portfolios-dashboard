import React, { useState } from 'react'
import Inputs from '../../../shared/components/inputs/Inputs'
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN'
import DangerBTN from '../../../shared/components/BTNs/DangerBTN'
import TextArea from '../../../shared/components/inputs/TextArea'
import DropDownRatio from '../../../shared/components/inputs/DropDownRatio'
import useFormValidate from '../../auth/hooks/useFormValidate'
import useStore from '../../../shared/hooks/conetext-hooks/useStore'

function ProjectsForm({ onHide }) {
    const { request } = useStore()
    const [fieldsValues, setFieldsValues] = useState(request?.data ?? { projectTitle: '', projectType: 1, projectGitHubLink: '', projectDemoLink: '', projectAvailability: true, projectCreationDate: '', projectScreenshot: '', projectDescription: '' })
    const [fieldsErrors, setFieldsErrors] = useState({ projectTitle: false, projectType: false, projectGitHubLink: false, projectDemoLink: false, projectAvailability: false, projectCreationDate: false, projectScreenshot: false, projectDescription: false })
    const [fieldsErrorMsgs, setFieldsErrorMsgs] = useState({ projectTitle: '', projectType: '', projectGitHubLink: '', projectDemoLink: '', projectAvailability: '', projectCreationDate: '', projectScreenshot: '', projectDescription: '' })

    const { values, errors, errorMsgs, handleChange, handleBlur, handleSubmit } = useFormValidate({
        values: fieldsValues, setValues: setFieldsValues,
        errors: fieldsErrors, setErrors: setFieldsErrors,
        errorMsgs: fieldsErrorMsgs, setErrorMsgs: setFieldsErrorMsgs
    })
    return (
        <form className=' w-full flex flex-col justify-around items-center' onSubmit={e => {
            e.preventDefault();
            handleSubmit(
                request.path,
                request.apiFn,
                true,
                ['projectGitHubLink', 'projectDemoLink', 'projectScreenshot', 'projectType', 'projectAvailability'],
                onHide)
        }}>
            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectTitle'}
                    value={values.projectTitle}
                    error={errors.projectTitle}
                    errMsg={errorMsgs.projectTitle}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Project Title'}
                    type={'text'}
                    placeholder={"Enter your project's title here..."}
                    lightBg={true}
                    className={' w-1/2'}
                    required
                />

                <DropDownRatio
                    fieldName={'projectType'}
                    value={values.projectType}
                    error={errors.projectType}
                    errMsg={errorMsgs.projectType}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Project Type'}
                    placeholder={"Choose your project's Type"}
                    lightBg={true}
                    className={' w-1/2'}
                    required
                    options={[[1, 'Front-end'], [2, 'Back-end'], [3, 'Flutter']]}
                />
            </div>


            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectGitHubLink'}
                    value={values.projectGitHubLink}
                    error={errors.projectGitHubLink}
                    errMsg={errorMsgs.projectGitHubLink}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'GitHub'}
                    type={'text'}
                    placeholder={"(e.g., https://github.com/username or https://github.com/username/repo)"}
                    lightBg={true}
                    className={' w-1/2'}
                />

                <Inputs
                    fieldName={'projectDemoLink'}
                    value={values.projectDemoLink}
                    error={errors.projectDemoLink}
                    errMsg={errorMsgs.projectDemoLink}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Demo'}
                    type={'text'}
                    placeholder={"(e.g., https://example.com or www.domain.org/path)"}
                    lightBg={true}
                    className={' w-1/2'}
                />
            </div>


            <div className=' w-full flex'>

                <DropDownRatio
                    fieldName={'projectAvailability'}
                    value={values.projectAvailability}
                    error={errors.projectAvailability}
                    errMsg={errorMsgs.projectAvailability}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Protfolio'}
                    placeholder={"Show this on the Portfolio"}
                    lightBg={true}
                    className={' w-1/2'}
                    required
                    options={[[true, 'Yes'], [false, 'No']]}
                />

                <Inputs
                    fieldName={'projectCreationDate'}
                    value={values.projectCreationDate}
                    error={errors.projectCreationDate}
                    errMsg={errorMsgs.projectCreationDate}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Created at'}
                    type={'date'}
                    placeholder={"Choose when was this project done..."}
                    lightBg={true}
                    required
                    className={' w-1/2'}
                />

            </div>


            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectScreenshot'}
                    // value={values.projectScreenshot}
                    error={errors.projectScreenshot}
                    errMsg={errorMsgs.projectScreenshot}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Cover photo'}
                    type={'file'}
                    placeholder={"Upload a cover photo that represent this project (eg., The project's Home page)"}
                    lightBg={true}
                    className={' w-full'}
                />

            </div>


            <div className=' w-full flex'>

                <TextArea
                    fieldName={'projectDescription'}
                    value={values.projectDescription}
                    error={errors.projectDescription}
                    errMsg={errorMsgs.projectDescription}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Project Description'}
                    type={'text'}
                    placeholder={"Write a short desccription about this project..."}
                    lightBg={true}
                    required
                    className={' w-full h-30 max-h-40 min-h-10'}
                />
            </div>

            <div className='w-full'>
                <div className=' w-1/3 flex justify-around'>
                    <BrandColorBTN
                        lightBg
                        className=' w-1/3'
                        type={'submit'}
                        disabled={(Object.values(errors).some(e => e)) || !(values.projectTitle && values.projectCreationDate && values.projectDescription)}
                    >Add</BrandColorBTN>
                    <DangerBTN lightBg className=' w-1/3' onClick={onHide} >cancel</DangerBTN>
                </div>
            </div>


        </form>
    )
}

export default ProjectsForm