import React from "react";

export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false,
        disabled: true
    }
    onLogin = (e) => {
        console.log(this.state);
    };



    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const type = e.target.type
        const checked = e.target.checked
        this.setState({
            [name]: type === "checkbox" ? checked : value
        }, () => {
            if (this.state.username !== "" && this.state.password !== "") {
                this.setState({ disabled: false });
            }

        })

    }


    handleReset = () => {
        this.setState({
            username: '',
            password: '',
            remember: false,
            disabled: true
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input name="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                    <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleChange} />
                </div>
                <button
                    disabled={this.state.disabled}
                    onClick={this.onLogin}>Login
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
