import { useContext } from "react";
import { ThemeProvider } from "../FunctionalComponents/UseContext";
var StudentResult =()=>{

var result =useContext(ThemeProvider);    
return(
      <section>
    
          <h1>The result is { result.sgpa} and the cgpa result id{ result.cgpa }</h1>
      </section>
    )
    }
    
export default StudentResult;
