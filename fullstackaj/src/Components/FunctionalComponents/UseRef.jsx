import React from "react";
import { useRef,useEffect,useState } from "react";
const UseRef = ()=>{
    var [text,setText] = useState("");
    var prevText =useRef("");
    useEffect(()=>{
        prevText.current=text
    },[text])
    return (
        <div>
            <h1>This is an example of UseRef</h1>
            <input type="text" placeholder="type here" value={text} onChange={(e) => setText(e.target.value)}></input>
            <h1>My Current Render is {text}</h1>
            <h1>My Previous Render is {prevText.current}</h1>

        </div>
    )

}
export default UseRef;