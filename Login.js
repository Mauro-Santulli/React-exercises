


import React from "react";

export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
        checked: false,
        disabled: true
    }
    onLogin = (e) => {
        console.log(this.state);
    };



    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })

        this.setState({ [e.target.name]: e.target.value }, () => {
            if (this.state.username !== "" && this.state.password !== "") {
                this.setState({ disabled: false });
            }
        })
    }
    render() {
        const passwordColor = {
            backgroundColor: this.state.password.length < 8 ? 'red' : 'green'
        }
        return (
            <div>
                <div>
                    <input name="username" onChange={this.handleChange} />
                    <input style={passwordColor} type="password" name="password" onChange={this.handleChange} />
                    <input type="checkbox" name="checkbox" onChange={this.handleChange} />
                </div>
                <button
                    disabled={this.state.disabled}
                    onClick={this.onLogin}
                >Login</button>
            </div>
        )
    }
}