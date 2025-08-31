import React from 'react'
import Inputs from '../../../shared/components/inputs/Inputs'
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN'
import DangerBTN from '../../../shared/components/BTNs/DangerBTN'
import TextArea from '../../../shared/components/inputs/TextArea'

function ProjectsForm({ apiFn, onHide, projectData = {} }) {
    return (
        <form className=' w-full flex flex-col justify-around items-center'>
            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectTitle'}
                    lable={'Project Title'}
                    type={'text'}
                    placeholder={"Enter your project's title here..."}
                    lightBg={true}
                    className={' w-1/2'}
                />

                <Inputs
                    fieldName={'projectType'}
                    lable={'Project Type'}
                    type={'text'}
                    placeholder={"Enter your project's title here..."}
                    lightBg={true}
                    className={' w-1/2'}
                />
            </div>


            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectGitHubLink'}
                    lable={'GitHub'}
                    type={'text'}
                    placeholder={"(e.g., https://github.com/username or https://github.com/username/repo)"}
                    lightBg={true}
                    className={' w-1/2'}
                />

                <Inputs
                    fieldName={'projectDemoLink'}
                    lable={'Demo'}
                    type={'text'}
                    placeholder={"(e.g., https://example.com or www.domain.org/path)"}
                    lightBg={true}
                    className={' w-1/2'}
                />
            </div>


            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectAvailability'}
                    lable={'Show on protfolio'}
                    type={'text'}
                    placeholder={"Enter your project's title here..."}
                    lightBg={true}
                    className={' w-1/2'}
                />

                <Inputs
                    fieldName={'projectCreationDate'}
                    lable={'Created at'}
                    type={'date'}
                    placeholder={"Choose when was this project done..."}
                    lightBg={true}
                    className={' w-1/2'}
                />

            </div>


            <div className=' w-full flex'>

                <Inputs
                    fieldName={'projectScreenshot'}
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
                    lable={'Project Description'}
                    type={'text'}
                    placeholder={"Write a short desccription about this project..."}
                    lightBg={true}
                    className={' w-full h-30 max-h-40 min-h-10'}
                />
            </div>

            <div className='w-full'>
                <div className=' w-1/3 flex justify-around'>
                    <BrandColorBTN
                        className=' w-1/3'
                        type={'submit'}
                    >Add</BrandColorBTN>
                    <DangerBTN className=' w-1/3' onClick={onHide} >cancel</DangerBTN>
                </div>
            </div>


        </form>
    )
}

export default ProjectsForm