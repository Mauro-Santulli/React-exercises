import React from "react"



export class Counter extends React.Component {
    state = {
        counter: 0
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + 1,
                }
            })
        }, 1000)
    };
    render() {
        return (
            <h3>Counter: {this.state.counter}</h3>
        )
    }
}