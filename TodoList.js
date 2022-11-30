import React from "react";

export default class TodoList extends React.Component {
    state = { item: [], inputField: "" };

    handleInput = (e) => {
        this.setState({ inputField: e.target.value });
    };

    addItem = (e) => {
        const inputField = this.state.inputField;
        if (inputField !== "") {
            const arr = this.state.item;
            arr.push(inputField);
            this.setState({ item: arr, inputField: "" });
        }
    };
    removeItem = () => {
        this.setState({ item: [] });
    };

    handleRemove = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        const items = this.state.item;

        return (
            <div>
                <input name="inputField" value={this.state.inputField} onChange={this.handleInput}></input>
                <button onClick={this.addItem}>Aggiungi</button>
                <button onClick={this.removeItem}>Reset</button>
                <ul>{this.props.render(items,this.handleRemove)}</ul>
            </div>
        );
    }
}
