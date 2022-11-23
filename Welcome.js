import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
            {props.age && <Age age={props.age}/>}
        </div>
    )
}

// Welcome.defaultProps={
//     name : "stranger",
// }
