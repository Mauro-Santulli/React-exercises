import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
            {(props.name ==="John" && (props.age>18 && props.age<65)) && <Age age={props.age}/>}
        </div>
    )
}

