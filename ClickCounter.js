import React, { useEffect, useState } from "react"
import CounterDisplay from "./CounterDisplay"

export default function ClickCounter(props,{initialValue = 0}) {

    const [count, setCount] = useState(initialValue)

    function ClickButtonEvent(){
        setCount(c=>c+1)
    }
    
    useEffect(() => {
        props.effect(count)
      });


    return (
        <div>
            <CounterDisplay counter={count} />
            <button onClick={ClickButtonEvent}>Increment Counter</button>
        </div>
    )
}
