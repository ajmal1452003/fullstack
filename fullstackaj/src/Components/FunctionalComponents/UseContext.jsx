import React from "react";
import { createContext, useContext } from "react";
import Component2 from "../ContextComponents/Component2";
export var ThemeProvider = React.createContext();
var UseContext = ()=>{
    var Context = createContext();
    return(
        <div>
            <ThemeProvider.Provider value={{sgpa: "9.99",cgpa:"10.00"}}>
            <h1>Use context</h1>
            <Component2/>
            </ThemeProvider.Provider>
            
        </div>
    )
}

export default UseContext;