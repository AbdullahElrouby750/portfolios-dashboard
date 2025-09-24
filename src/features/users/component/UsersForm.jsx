import React, { useState } from 'react'
import useStore from '../../../shared/hooks/conetext-hooks/useStore';
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN';
import DangerBTN from '../../../shared/components/BTNs/DangerBTN';
import useFormValidate from '../../../shared/hooks/validation-hooks/useFormValidate';
import Inputs from '../../../shared/components/inputs/Inputs';
import DropDownRatio from '../../../shared/components/inputs/DropDownRatio';
import useAuth from '../../../shared/hooks/conetext-hooks/useAuth';


const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$');

function UsersForm({ onHide }) {
    const { request } = useStore();
    const userData = request && request.data ? {
        name: request.data.name,
        email: request.data.email,
        role: request.data.role,
        profileImg: '',
        phoneNumber: request.data.phoneNumber,
        accessAllowed: request.data.accessAllowed,
    } : null;
    const { user: loggedinUser } = useAuth()
    const [fieldsValues, setFieldsValues] = useState(userData ?? { name: '', email: '', role: 'user', profileImg: '', phoneNumber: '', accessAllowed: false, password:'' });
    const [fieldsErrors, setFieldsErrors] = useState({ name: false, email: false, role: false, profileImg: false, phoneNumber: false, accessAllowed: false, password: false });
    const [fieldsErrorMsgs, setFieldsErrorMsgs] = useState({ name: '', email: '', role: '', profileImg: '', phoneNumber: '', accessAllowed: '', password: '' });
    const { values, errors, errorMsgs, handleChange, handleBlur, handleSubmit } = useFormValidate({
        values: fieldsValues, setValues: setFieldsValues,
        errors: fieldsErrors, setErrors: setFieldsErrors,
        errorMsgs: fieldsErrorMsgs, setErrorMsgs: setFieldsErrorMsgs
    })

    const skipValArr = ['accessAllowed', 'phoneNumber', 'profileImg']
    if(request.type !== 'Add'){
        skipValArr.push('password');
    }

    //todo: when update check if the values have changed or not before sending unwanted request
    return <form className=' w-full flex flex-col justify-around items-center' onSubmit={e => {
        e.preventDefault();
        handleSubmit(
            request.path,
            request.apiFn,
            true,
            skipValArr,
            onHide,
            { id: request?.data?._id ?? null },
        )
    }}>

        <div className=' w-full flex'>
            <Inputs
                fieldName={'name'}
                value={values.name}
                error={errors.name}
                errMsg={errorMsgs.name}
                customOnChange={handleChange}
                customOnBlur={handleBlur}
                lable={'Name'}
                type={'text'}
                placeholder={"Enter the user's Name..."}
                lightBg={true}
                className={' w-1/2'}
                required={request.type === 'Add'}
            />


            <DropDownRatio
                fieldName={'role'}
                value={values.role}
                error={errors.role}
                errMsg={errorMsgs.role}
                customOnChange={handleChange}
                customOnBlur={handleBlur}
                lable={'Role'}
                placeholder={"Choose the user's Role..."}
                lightBg={true}
                className={' w-1/2'}
                required={request.type === 'Add'}
                options={[['rouby', 'rouby'], ['admin', 'admin'], ['user', 'user']]}
            />

        </div>


        <div className=' w-full flex'>
            {((request.type === 'Update' && loggedinUser.role === 'rouby') || request.type === 'Add') &&
                <Inputs
                    fieldName={'email'}
                    value={values.email}
                    error={errors.email}
                    errMsg={errorMsgs.email}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Email'}
                    type={'email'}
                    placeholder={"Enter the user's Email..."}
                    lightBg={true}
                    className={(request.type === 'Add' && loggedinUser.role !== 'rouby') ? ' w-full' : ' w-1/2'}
                    required={request.type === 'Add'}
                />
            }

            {loggedinUser.role === 'rouby' &&
                <DropDownRatio
                    fieldName={'accessAllowed'}
                    value={values.accessAllowed}
                    error={errors.accessAllowed}
                    errMsg={errorMsgs.accessAllowed}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lable={'Access Allowed'}
                    placeholder={"Choose the user's Permissions..."}
                    lightBg={true}
                    className={' w-1/2'}
                    required={request.type === 'Add'}
                    options={[[true, 'Yes'], [false, 'No']]}
                />
            }

        </div>


        <div className=' w-full flex'>
            <Inputs
                fieldName={'phoneNumber'}
                value={values.phoneNumber}
                error={errors.phoneNumber}
                errMsg={errorMsgs.phoneNumber}
                customOnChange={handleChange}
                customOnBlur={handleBlur}
                lable={'PhoneNumber'}
                type={"tel"}
                placeholder={"Enter the user's PhoneNumber..."}
                lightBg={true}
                className={' w-1/2'}
            />


            <Inputs
                fieldName={'profileImg'}
                // value={values.profileImg}
                error={errors.profileImg}
                errMsg={errorMsgs.profileImg}
                customOnChange={handleChange}
                customOnBlur={handleBlur}
                lable={'ProfileImg'}
                type={'file'}
                placeholder={"Enter the user's ProfileImg..."}
                lightBg={true}
                className={' w-1/2'}
            />

        </div>

        {(request.type === 'Add') &&
            <div className=' w-full flex'>
                <Inputs
                    fieldName={"password"}
                    value={values.password}
                    error={errors.password}
                    errMsg={errorMsgs.password}
                    lable={"Password"}
                    type={"password"}
                    placeholder={"Enter your password here..."}
                    required
                    regex={passwordRegex}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lightBg
                    className={'w-full'} />
            </div>}


        <div className='w-full'>
            <div className=' w-1/3 flex justify-around'>
                <BrandColorBTN
                    lightBg
                    className=' w-1/3'
                    type={'submit'}
                    disabled={(Object.values(errors).some(e => e)) || !(values.role && values.name && values.email)}
                >
                    {request.type}
                </BrandColorBTN>
                <DangerBTN lightBg className=' w-1/3' onClick={onHide} >cancel</DangerBTN>
            </div>
        </div>

    </form>
}

export default UsersForm