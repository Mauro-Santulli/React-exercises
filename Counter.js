import React from "react"
import ClickCounter from "./ClickCounter"
import ClickTracker from "./ClickTracker"
import CounterDisplay from "./CounterDisplay"



export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue ?? 0,
    }


    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + (this.props.incrementValue ?? 1),
                }
            })
        }, this.props.intervalValue ?? 1000)
    }
    render() {
        return (
            <div>
                <ClickCounter/>
                <ClickTracker/>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementValue: 1,
    intervalValue: 1000,
}