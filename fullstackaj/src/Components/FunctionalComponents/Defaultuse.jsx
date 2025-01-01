import '../../assets/CSS/Defaultuse.css';
import Useeffects from './Useeffect';
import { Link } from 'react-router-dom';
var Defaultuse = () => {
  return (
    <div className="defaultuse">
       
<h1><Link to={'/useeffect'}className='link'>Useeffect</Link></h1>
      <h1>
        Default exports are used when you want to export a single primary
        object, function, or variable from a module. This type of export allows
        you to import the value using any name, /providing flexibility and
        simplifying the import process for the module’s main content.
      </h1>
      
    </div>
  );
};
export default Defaultuse;
