import React from "react";
import { useState,useEffect} from "react";

const UseEffect = ()=>{
    var [text, setText] = useState("AJ");
    useEffect(()=>{
        setText("Stealth")
    },[text])
return(
    <div>
    <h1>hooks</h1>
    <input type="text" placeholder="Enter Text" value={text} onChange={(event)=>{
        setText(event.target.value);
    }

    }/>
    <h5>the text typed is {text}</h5>
    </div>
)    
}

export default UseEffect