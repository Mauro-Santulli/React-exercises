import { Welcome } from './Welcome';
import { Routes, Route, Link } from 'react-router-dom'
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';

export default function App() {
  return (
    <div title="MyApp">
      <Link to='/'>Home</Link> | <Link to='counter'>Counter</Link> | <Link to='users/Mauro-Santulli'>User</Link>
      <Routes>
        <Route path="/" element={<h2>My App</h2>} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  )
}


