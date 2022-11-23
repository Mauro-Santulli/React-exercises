import React from "react"



export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue ?? 0,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + (this.props.incrementValue ?? 1),
                }
            })
        }, this.props.intervalValue ?? 1000)
    };
    render() {
        return (
            <h3>Counter: {this.state.counter}</h3>
        )
    }
}