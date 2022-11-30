import React, { useEffect, useState } from "react"


export default function Counter(props) {

    // const [count, setCount] = useState({
    //     counter: props.count,
    //     amountt:props.amount,
    //     interval:props.interval
    // });

    useEffect(() => {
        console.log("mounted")

        return () => {
            console.log("unmounted");
        }
    }, []);

    const [count, setCount] = useState(props.count);

    useEffect(() => {
      const interval = setInterval(() => setCount(count + 1), props.interval);
      return () => clearInterval(interval);
    });

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )

}
