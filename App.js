import { Routes, Route, Link } from 'react-router-dom'
import { GithubUser } from './GithubUser';

export default function App() {
  return (
    <div title="MyApp">
      <Link to='/'>Home</Link> | <Link to='user'>User</Link>
      <Routes>
        <Route path="/" element={<h2>My App</h2>} />
        <Route path="user" element={<GithubUser username={null} />}/>
      </Routes>
    </div>
  )
}


