import '../../assets/CSS/Home.css'
import Navbar from '../../Components/FunctionalComponents/Navbar'
import Footers from '../FunctionalComponents/Footers'
var Home = () =>{
    var styling = {
        color:"red",
        fontSize:"20px",
        textDecoration:"underline"
    }
    return(
        <div className='content'>
        <Navbar/>
        <h1 className='box-model'>This is styling</h1>
        <p className='idSeg'>Hello</p>
        <Footers/>

        </div>
    )
}
export default Home
