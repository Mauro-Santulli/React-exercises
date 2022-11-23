import {Welcome} from "./Welcome";

const nameElement=<strong>Mauro</strong>

export function App() {
    return (
        <div>
            <Welcome name={nameElement} age ={17}/>
        </div>
    )
}

