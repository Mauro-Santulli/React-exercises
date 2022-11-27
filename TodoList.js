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

    removeListElement = (index) => {
        const arrItem=this.state.item;
        const newArrItem=arrItem.splice(index,1)
        this.setState({
            item: arrItem
        })
    }

    render() {
        const items = this.state.item;
        const list = items.map((element,index) => (
            <li key={element.toString()}>{element}
                <button onClick={()=> this.removeListElement(index)}>{index}</button>
            </li>

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