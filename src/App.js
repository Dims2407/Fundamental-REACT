import React, {useState} from "react";
import Counter from "./Components/Counter";

function App() {


    const [value, setValue] = useState('TEXT INPUT')



    return (
        <div>
<Counter/>
            <Counter/>
            <Counter/>
            <h1>{value}</h1>
            <input type='text'
                   value={value}
            onChange={event => setValue(event.target.value)}
            />


        </div>
    );
}

export default App;
