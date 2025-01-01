import React from "react";
import { useRef,useEffect,useState } from "react";
const UseRefnum = ()=>{
    var [num,setNum] = useState();
    var prevNum =useRef();
      function increment() {
        setNum(num + 1);
      }
      function decrement() {
        setNum(num - 1);
      }
      function reset() {
        setNum(num =0);
      }
    useEffect(()=>{
        prevNum.current=num
    },[num])
    return (
        <div>
            <h1>This is an example of UseRefNum</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
            
            <h1>My Current Render is {num}</h1>
            <h1>My Previous Render is {prevNum.current}</h1>

        </div>
    )

}
export default UseRefnum;