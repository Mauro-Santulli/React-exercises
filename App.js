import React, { useState } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import InteractiveWelcome from "./InteractiveWelcome";
import { LanguageContext, DisplayLanguage } from "./LanguageContext";
import Login from "./Login";
import Sum from "./Sum";
import TodoList from "./TodoList";

export default function App() {

    const [counter,setCounter]= useState(true)

    function showCounter (){
        setCounter(x=>!x)
    }
    return (
        <div>
            <button onClick={showCounter}>{counter ? 'Hide':'Show'}</button>
            {counter && <Counter count={0} interval={1000}/>}

        </div>
    )

}

