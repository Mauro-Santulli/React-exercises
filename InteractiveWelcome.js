import React from "react";
import { Welcome } from "./Welcome";

export default class InteractiveWelcome extends React.Component {

    capitalizaFirst = str=>{
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    state = {
        username:''
    }

    handleChange=(e)=>{
        const value=e.target.value

        this.setState({
            username:value
        })
    }

    render(){
        return(
            <div>
                <input name="username" onChange={this.handleChange}/>
                <Welcome name={this.capitalizaFirst(this.state.username)} age ={18}/>
            </div>
        )
    }
}