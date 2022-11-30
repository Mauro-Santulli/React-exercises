import React, { useEffect, useState } from "react"


export default function Counter(props) {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("mounted")
        
        return ()=>{
            console.log("unmounted");
        }
      },[]);

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )

}

Counter.defaultProps = {
    initialValue: 0,
    incrementValue: 1,
    intervalValue: 1000,
}