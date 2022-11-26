import React from "react";

export default class Login extends React.Component {
 
    handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.password.value
        const remember = e.target.remember.checked

        console.log({
            username,
            password,
            remember
        });
    }

    render() {
        return (
            <div>
                <h3>Form with uncontrolled component</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input name="username" />
                        <input name="password" type="password" />
                        <input name="remember" type="checkbox" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                        <button type="reset">Reset</button>

                    </div>
                </form>
            </div>
        )
    }
}