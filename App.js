import { Welcome } from './Welcome';
import { Routes, Route, Link } from 'react-router-dom'
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
import { GithubUserList } from './GithubUserList';

export default function App() {
  return (
    <div title="MyApp">
      <Link to='/'>Home</Link> | <Link to='users'>User</Link> | <Link to='welcome'>Welcome</Link>
      <Routes>
        <Route path="/" element={<h2>My App</h2>} />
        <Route path="*" element={<div><h1>Page Not Found</h1><Link to='/'>Go Back</Link></div>} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="welcome/:name" element={<Welcome />} />
        <Route path="counter" element={<Counter />} />
        <Route path="users" element={<GithubUserList />}>
          <Route index element={<h1>Search an User</h1>}/>
          <Route path="users/:username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  )
}


