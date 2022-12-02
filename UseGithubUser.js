import useSWR from 'swr';

const fetcher = url=> fetch(url).then(resp=>resp.json())

export default function UseGithubUser(username) {

    const { data, error, mutate} = useSWR(username !== null ?`https://api.github.com/users/${username}`:<h1>Non trovato</h1>,fetcher)

    function refreshGitHugUser(){
        mutate() 
    }

    return {
        data,
        error,
        isLoading: !data && !error,
        onRefreshUser: refreshGitHugUser
    }
}

