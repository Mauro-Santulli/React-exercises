import { Counter } from "./Counter";
import {Welcome} from "./Welcome";

const nameElement="john"

export function App() {

    const capitalizaFirst = str=>{
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return (
        <div>
            <Welcome name={capitalizaFirst(nameElement)} age ={18}/>
            <Counter initialValue={1} incrementValue={2} intervalValue={500}/>
        </div>
    )
}

