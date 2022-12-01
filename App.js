import { Welcome } from './Welcome';
import { Routes, Route } from 'react-router-dom'
import { Counter } from './Counter';

export default function App() {
  return (
    <div title="MyApp">
      <Routes>
        <Route path="/" element={<h2>My App</h2>} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  )
}


