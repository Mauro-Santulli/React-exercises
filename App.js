import { Counter } from "./Counter";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import TodoList from "./TodoList";

export default function App() {


    return (
        <div>
            <InteractiveWelcome/>
            <Login/>
            <Counter/>
            <TodoList render={item=>{
                return <ul>{item}</ul>
            }}/>
        </div>
    )
}

