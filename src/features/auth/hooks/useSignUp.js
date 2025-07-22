import { useState } from "react";
import { useAuthPost } from "../../../shared/hooks/APIs hooks/useAuthApi";
function useSignUp() {
    const [values, setValues] = useState({ name: '', email: '', role: 'user', password: '', profileImg: '', phoneNumber: '', joinDate: '', accessAllowed: false });
    const [errors, setErrors] = useState({ name: false, email: false, role: false, password: false, profileImg: false, phoneNumber: false, joinDate: false, accessAllowed: false });
    const [errorMsgs, setErrorMsgs] = useState({ name: '', email: '', role: 'user', password: '', profileImg: '', phoneNumber: '', joinDate: '', accessAllowed: "" });

    const { mutate: signup, isPending, error: signupErr } = useAuthPost(['normal', 'signup']);

    const handleChange = (e, regex) => {
        setValues(v => ({ ...v, [e.target.name]: e.target.value }));
        if (!e.target.value) {
            setErrors(e => ({ ...e, [e.target.name]: true }));
            setErrorMsgs(`${e.target.name}is required!`);
        } else if (regex && !regex.test(e.target.value)) {
            setErrors(e => ({ ...e, [e.target.name]: true }));
            setErrorMsgs(`${e.target.name}is required!`);
        } else {
            setErrors(e => ({ ...e, [e.target.name]: false }));
        }
    }

    const handleBlur = (e, regex) => {
        if (!e.target.value) {
            setErrors(e => ({ ...e, [e.target.name]: true }));
            setErrorMsgs(`${e.target.name}is required!`);
        } else if (regex && !regex.test(e.target.value)) {
            setErrors(e => ({ ...e, [e.target.name]: true }));
            setErrorMsgs(`${e.target.name}is required!`);
        } else {
            setErrors(e => ({ ...e, [e.target.name]: false }));
        }
    }

    const handleSupmit = (path, data) => {
        let errorSpotted = false;
        Object.entries(values).map(([key, value]) => {
            if (!value || value === '') {
                errorSpotted = true
                setErrors({ ...errors, key: errors[key] });
                setErrorMsgs({ ...errorMsgs, key: errorMsgs[key] });
            }
        })
        if (errorSpotted) return
        signup({ path, data })
    }
    return { values, setValues, errors, setErrors, errorMsgs, handleChange, handleBlur, setErrorMsgs, handleSupmit, isPending, signupErr }
}

export default useSignUp;