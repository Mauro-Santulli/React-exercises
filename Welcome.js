import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
            {props.age>17 ? <Age age={props.age}/> : <p>You are very young!</p>}
        </div>
    )
}

