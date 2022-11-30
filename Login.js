import React, { useState } from "react";

export default function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        checked: false
    })

    function onLogin(e) {
        console.log(data.password.length);
    };

    function handleChange(e) {
        const { name, value, type, checked } = e.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })

    }

    const passwordColor = {
        backgroundColor: data.password.length < 8 ? 'red' : 'green'
    }

    return (
        <div>
            <div>
                <input name="username" onChange={handleChange} />
                <input type="password" style={passwordColor} name="password" onChange={handleChange} />
                <input type="checkbox" name="checked" onChange={handleChange} />
            </div>
            <button
                disabled={(data.username !== '' && data.password !== '') ? false : true}
                onClick={onLogin}
            >Login</button>
        </div>
    )

}