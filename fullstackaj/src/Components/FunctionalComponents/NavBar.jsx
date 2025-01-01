import '../../assets/CSS/Navbar.css'
import { Link } from 'react-router-dom';
var Navbar  =() =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}className='link'>Home</Link></li>
                    <li><Link to={'/about'}className='link'>About</Link></li>
                    <li><Link to={'/contact'}className='link'>Contact</Link></li>
                    <li><Link to={'/gallery'}className='link'>Gallery</Link></li>
                    <li><Link to={'/useeffecteg'}className='link'>UseEffect</Link></li>
                    <li><Link to={'/useref'}className='link'>UseRef</Link></li>
                    <li><Link to={'/userefnum'}className='link'>UseRefNum</Link></li>
                    <li><Link to={'/usecontext'}className='link'>UseContext</Link></li>
                </ul>
            </nav>
        </header>
)
}

export default Navbar;

