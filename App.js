import { Counter } from "./Counter";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import {Welcome} from "./Welcome";

// const nameElement="john"

export function App() {


    return (
        <div>
            <InteractiveWelcome/>
            <Login/>
            <Counter/>
        </div>
    )
}

