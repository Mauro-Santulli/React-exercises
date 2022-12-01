import { useState } from "react";

export function UseForms() {

    const [forms, setForms] = useState({
        username: '',
        password: '',
    });

    const { username, password } = forms;

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setForms(() => { return { ...forms, [e.target.name]: e.target.value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(forms)

    }
    return {
        onInputChange: handleInputChange,
        onSubmit: handleSubmit
    }
}