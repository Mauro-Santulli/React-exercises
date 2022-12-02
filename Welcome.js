import React from "react";
import { useParams }from 'react-router-dom'

export function Welcome() {

    const {name} = useParams()
    return (
        <div>
            <h1>Welcome {name} </h1>
        </div>
    )
}