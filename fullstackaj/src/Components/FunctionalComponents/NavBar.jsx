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
                    <li><Link to={'/signup'}className='link'>SignUp</Link></li>
                    <li><Link to={'/login'}className='link'>Login</Link></li>

                </ul>
            </nav>
        </header>
)
}

export default Navbar;

