import React, { useState } from "react"
import CounterDisplay from "./CounterDisplay"

export default function ClickCounter({initialValue = 0}) {

    const [count, setCount] = useState(initialValue)

    function ClickButtonEvent(){
        setCount(c=>c+1)
    }


    return (
        <div>
            <CounterDisplay counter={count} />
            <button onClick={ClickButtonEvent}>Increment Counter</button>
        </div>
    )
}