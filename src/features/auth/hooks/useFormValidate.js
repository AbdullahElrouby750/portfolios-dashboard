import { useState } from "react";
import convertToFormData from "../../../shared/utils/convertToFormData";
function useFormValidate(states = {
                    values: null, setValues: () =>{},
                    errors: null, setErrors: () =>{},
                    errorMsgs: null, setErrorMsgs: () =>{},}) {
    const {values, setValues, errors, setErrors, errorMsgs, setErrorMsgs} = states
    // //todo: send them to the hook and make it dynamic
    // const [values, setValues] = useState({ name: '', email: '', role: 'user', password: '', profileImg: '', phoneNumber: '', accessAllowed: false });
    // const [errors, setErrors] = useState({ name: false, email: false, role: false, password: false, profileImg: false, phoneNumber: false, accessAllowed: false });
    // const [errorMsgs, setErrorMsgs] = useState({ name: '', email: '', role: '', password: '', profileImg: '', phoneNumber: '', accessAllowed: "" });
    // //todo: send them to the hook and make it dynamic

    const handleChange = (e, regex, fieldName, fileRequired) => {
        e.target.type === 'file' ? setValues(v => ({ ...v, [fieldName]: e.target.files[0] })) : setValues(v => ({ ...v, [fieldName]: e.target.value }));
        if (((e.target.type !== 'file' && !e.target.value)) || (fileRequired && e.target.type === 'file' && !e.target.files)) {
            setErrors(e => ({ ...e, [fieldName]: true }));
            setErrorMsgs(em => ({ ...em, [fieldName]: `${fieldName} is required!` }));
        } else if (regex && !regex.test(e.target.value)) {
            setErrors(e => ({ ...e, [fieldName]: true }));
            setErrorMsgs(em => ({ ...em, [fieldName]: `${fieldName} is not valid, please enter a valid value!` }));
        } else {
            setErrors(e => ({ ...e, [fieldName]: false }));
        }
    }

    const handleBlur = (e, regex, fieldName, fileRequired) => {
        if ((e.target.type !== 'file' && !e.target.value) || (fileRequired && e.target.type === 'file' && !e.target.files)) {
            setErrors(e => ({ ...e, [fieldName]: true }));
            setErrorMsgs(em => ({ ...em, [fieldName]: `${fieldName} is required!` }));
        } else if (regex && !regex.test(e.target.value)) {
            setErrors(e => ({ ...e, [fieldName]: true }));
            setErrorMsgs(em => ({ ...em, [fieldName]: `${fieldName} is not valid, please enter a valid value!` }));
        } else {
            setErrors(e => ({ ...e, [fieldName]: false }));
        }
    }

    const handleSubmit = (path, apiCallFn, convertDataToFileType, skipKeys = []) => {
        console.log("from handleSubmit", path, apiCallFn, convertDataToFileType, skipKeys);
        let errorSpotted = false;
        Object.entries(values).map(([key, value]) => {
            if ((!value || value === '') && !skipKeys.includes(key)) {
                errorSpotted = true
                setErrors({ ...errors, key: errors[key] });
                setErrorMsgs({ ...errorMsgs, key: errorMsgs[key] });
            }
        })
        if (errorSpotted) return
        let data = values;
        if (convertDataToFileType) {
            data = convertToFormData(values);
        }
        apiCallFn({ path, data });
    }
    return { values, setValues, errors, setErrors, errorMsgs, setErrorMsgs, handleChange, handleBlur, handleSubmit }
}

export default useFormValidate;