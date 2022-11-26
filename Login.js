import React from "react";

export default class Login extends React.Component{

    render(){
        return(
            <div>
                <input name="username" />
                <input type="password" name="password"/>
                <input type="checkbox" name="checkbox"/>
            </div>
        )
    }
}