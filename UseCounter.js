import { useCallback, useState } from "react";

export default function UseCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
        setCounter((x) => x + 1)
    }, [])

    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
        setCounter((x) => x <= 0 ? x = 0 : x - 1)
    }, [])
    
    const handleCounterReset = useCallback(function handleCounterReset() {
        setCounter(initialValue)
    }, [initialValue])
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset,
    }
}