import { Counter } from "./Counter";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

export default function App() {


    return (
        <div>
            <InteractiveWelcome/>
            {/* <Login/> */}
            <UncontrolledLogin />
            <Counter/>
        </div>
    )
}
