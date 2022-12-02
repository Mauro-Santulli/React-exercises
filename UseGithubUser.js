import useSWR from 'swr';

const fetcher = url=> fetch(url).then(resp=>resp.json())

export default function UseGithubUser(username) {

    const { data, error, mutate} = useSWR((`https://api.github.com/users/${username}`),fetcher)

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