import React from "react";

export function Welcome(props) {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
            <p>Your age is {props.age}</p>
        </div>
    )
}

// Welcome.defaultProps={
//     name : "stranger",
// }
