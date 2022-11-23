import React from "react"
import CounterDisplay from "./CounterDisplay"



export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue,
    }


    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + this.props.incrementValue,
                }
            })
        }, this.props.intervalValue)
    }
    render() {
        return (
            <CounterDisplay counter={this.state.counter} />
        )
    }
}

Counter.defaultProps={
    initialValue : 0,
    incrementValue: 1,
    intervalValue: 1000,
}