import React, {useState, useEffect, useCallback, useMemo} from 'react'
import { mystyle } from './style';
import Box from "./Box"

const App = () => {
    const [counter, setCounter] = useState (0);
  
    const [isBoxVisible, setBoxVisible] = useState(false);

    useEffect(() =>{
        console.log("component did update" ,"and", "component did Mount");
    }, [counter]);



    return (
        <div style={mystyle}>
            {isBoxVisible && <Box />}
            <button onClick={() => setBoxVisible(!isBoxVisible)}>Toggle</button>
        <div>Number is: {counter}</div>
        <button onClick={() => setCounter(counter+1)}>Increment</button>
        
            
        </div>
    )
}

export default App


    // const memoHooks = () => {
    //     console.log(counter, "memo called");
    //   };
{/* <button onClick={() => callbackFunction()}>Increment for call Back Counter</button> */}
    // useMemo(memoHooks, [counter]);

    // const [callBackCounter, setCallBackCounter] = useState (0);

    // const callbackFunction = useCallback(() => {
    //     console.log(callBackCounter, "callback called");
    //     setCallBackCounter(callBackCounter +1);
    //     return callBackCounter;
    //   }, [callBackCounter]);
    

