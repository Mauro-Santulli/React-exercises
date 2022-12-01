import { useState } from "react";

export default function UseGitHubUser(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGitHugUser(username) {
        console.log(`https://api.github.com/users/${username}`)
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json();
            console.log(json)

            setData(json)
        } catch (err) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }

    }

    return {
        data,
        error,
        loading,
        onFetchUser: fetchGitHugUser
    }
}