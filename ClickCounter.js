import React from "react"
import CounterDisplay from "./CounterDisplay"

export default class ClickCounter extends React.Component {
    state={
        count:0
    }
    ClickButtonEvent = () => {
        this.setState(state=>{
            return{ 
                count: state.count + 1 
            }
        })
    }

    render() {
        return (
            <div>
                <CounterDisplay counter={this.state.count} />
                <button onClick={this.ClickButtonEvent}>Increment Counter</button>
            </div>
        )
    }
}