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
            <TodoList render={(items, remove)=>{
                return (
                <ul>
                {items.map((item, index)=>
                <li key={item+index}>{item}<button onClick={remove}></button></li>)}
                </ul>
                )
            }}/>
        </div>
    )
}

