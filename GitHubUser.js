import React, { useEffect, useState } from "react";
import UseGitHubUser from "./UseGitHubUser";

export function GitHubUser({username}) {
    const { data, loading, error, onFetchUser } = UseGitHubUser(username);
    
    function handleUserData() {
        onFetchUser(username)
    }
    
    return (

        <div>
            <button onClick={handleUserData}>Load user data</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been error</h1>}
            {data && <h1>{data.name}</h1>}
        </div>

    )
}