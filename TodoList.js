import React from "react";

export default class TodoList extends React.Component {
    state = { item: [], inputField: "" };

    handleInput = (e) => {
        this.setState({ inputField: e.target.value });
        console.log(this.state.inputField)
    };

    addItem = (e) => {
        const inputField = this.state.inputField;
        if (inputField !== "") {
            const arr = this.state.item;
            arr.push(inputField);
            this.setState({ item: arr, inputField: "" });
        }
    };
    removeItem = (e) => {
        this.setState({ item: []});
    };

    render() {
        const items = this.state.item;
        const list = items.map((element) => (
            <li key={element.toString()}>{element}</li>
        ));

        return (
            <div>
                <input name="inputField" value={this.state.inputField} onChange={this.handleInput}></input>
                <button onClick={this.addItem}>Aggiungi</button>
                <button onClick={this.removeItem}>Reset</button>
                <ul>{list}</ul>
            </div>
        );
    }
}