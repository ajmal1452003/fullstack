import '../../assets/CSS/Home.css'
import Footers from '../FunctionalComponents/Footers'
import Defaultuse from '../FunctionalComponents/Defaultuse'
var Home = () =>{
    var styling = {
        color:"red",
        fontSize:"20px",
        textDecoration:"underline"
    }
    return(
        <div className='content'>
         <Defaultuse/>   
        <Footers/>
        </div>
    )
}
export default Home
