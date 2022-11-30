import React from "react";
import { Counter } from "./Counter";
import InteractiveWelcome from "./InteractiveWelcome";
import { LanguageContext, DisplayLanguage } from "./LanguageContext";
import Login from "./Login";
import Sum from "./Sum";
import TodoList from "./TodoList";

export default class App extends React.Component {

    state = {
        language: 'en'
    }

    number=[2,3,1,2,5]

    handleChangeLanguage = (e) => {
        this.setState({
            language: e.target.value
        })
    }
    render() {

        return (
            <div>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
                <InteractiveWelcome />
                <Login />
                <Counter />
                <TodoList render={item => {
                    return <ul>{item}</ul>
                }} />
                <Sum />
            </div>
        )
    }
}

