import { useState } from "react";

export default function UseCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((x) => x + 1)
    }

    function handleCounterDecrement() {
        setCounter((x) => x<=0?x=0:x-1)
    }
    function handleCounterReset() {
        setCounter(initialValue)
    }
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset,
    }
}