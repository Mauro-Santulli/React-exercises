import React from "react";
import { UseForms } from "./UseForm";

export default function Login() {
    const { onInputChange, onSubmit } = UseForms();
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input name="username" onChange={onInputChange} />
                    <input type="password" name="password" onChange={onInputChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

