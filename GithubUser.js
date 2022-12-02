// import UseGithubUser from "./UseGithubUser";

// export function GithubUser({username}) {
//     const { data, error, isLoading, onRefreshUser } = UseGithubUser(username);
    
//     function handleUserData() {
//         onRefreshUser()
//     }
    
//     return (
//         <div>
//             <button onClick={handleUserData}>Load user data</button>
//             {isLoading && <h1>Loading...</h1>}
//             {error && <h1>There has been error</h1>}
//             {data && <h1>{data.name}</h1>}
//         </div>

//     )
// }

import React, { useEffect, useState } from "react";
import UseGithubUser from "./UseGithubUser";

export function GithubUser({username}) {
    const { data, loading, error, onRefreshUser } = UseGithubUser(username);
    
    function handleUserData() {
        onRefreshUser(username)
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