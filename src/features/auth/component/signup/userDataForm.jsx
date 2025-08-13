import React from 'react'
import useFormValidate from '../../hooks/useFormValidate'
import Inputs from '../../../../shared/components/inputs/Inputs';
import BrandColorBTN from '../../../../shared/components/BTNs/BrandColorBTN';
import useAuth from '../../../../shared/hooks/conetext-hooks/useAuth';

const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$');
const phoneRegex = new RegExp(/^(\+\d{1,3})?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/);

function UserDataForm({ signupFn }) {
    const { values, errors, errorMsgs, handleChange, handleBlur, handleSubmit } = useFormValidate();
    const {setLoggedOut} = useAuth()
    return (
        <form onSubmit={e => { e.preventDefault(); handleSubmit('/signup', signupFn, true, ["profileImg","phoneNumber", "accessAllowed"]) }} className=' flex flex-col justify-around items-center'>
            <div className=' w-full flex'>
                <Inputs
                    fieldName={"email"}
                    value={values.email}
                    error={errors.email}
                    errMsg={errorMsgs.email}
                    lable={"Email"}
                    type={"text"}
                    placeholder={"Ex: john@doe.com"}
                    required
                    regex={emailRegex}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lightBg
                    className={'w-1/2'} />
                <Inputs
                    fieldName={"name"}
                    value={values.name}
                    error={errors.name}
                    errMsg={errorMsgs.name}
                    lable={"Full Name"}
                    type={"text"}
                    placeholder={"Ex: john doe"}
                    required
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lightBg
                    className={'w-1/2'} />
            </div>

            <div className=' w-full flex'>
                <Inputs
                    fieldName={"phoneNumber"}
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                    errMsg={errorMsgs.phoneNumber}
                    lable={"Phoone number"}
                    type={"tel"}
                    placeholder={"Ex: +012345678901"}
                    regex={phoneRegex}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lightBg
                    className={'w-1/2'} />

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
                    className={'w-1/2'}/>
            </div>

            <div className=' w-full flex'>
                <Inputs
                    fieldName={"profileImg"}
                    // value={''}
                    error={errors.profileImg}
                    errMsg={errorMsgs.profileImg}
                    lable={"Profile picture"}
                    type={"file"}
                    placeholder={"Upload Your profile picture from here"}
                    customOnChange={handleChange}
                    customOnBlur={handleBlur}
                    lightBg 
                    className={'w-full'}/>
            </div>

            <div className=' w-full flex justify-center'>
                <BrandColorBTN lightBg={true} onClick={() => setLoggedOut(false)} disabled={((errors.name || errors.email || errors.role || errors.password || errors.phoneNumber) || !(values.name && values.email && values.role && values.password)) } type={'submit'} className=' w-1/4'>submit</BrandColorBTN>
            </div>
        </form>
    )
}

export default UserDataForm