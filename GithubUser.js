import React, { useEffect, useState } from "react";


export function GithubUser({username}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchGithubUser(username) {
        setLoading(true)
        setError(null)

        try {
            const resp = await fetch(`https://api.github.com/users/${username}`);
            const json = await resp.json()

            setData(json)
        } catch (err) {
            setError(err)
            setData(false)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchGithubUser(username)
    }, [username]);



    return (

        <div>
            {data && <h1>{data.name}</h1>}
        </div>

    )
}

