import { Link } from 'react-router-dom';
var PageFiller  =() =>{
    return(
        <section>
            
            
                    <h2><Link to={'/useeffecteg'}className='link'>UseEffect</Link></h2>
                    <h2><Link to={'/useref'}className='link'>UseRef</Link></h2>
                    <h2><Link to={'/userefnum'}className='link'>UseRefNum</Link></h2>
                    <h2><Link to={'/usecontext'}className='link'>UseContext</Link></h2>
                    <h2><Link to={'/usememo'}className='link'>UseMemo</Link></h2>

                
            
        </section>
)
}

export default PageFiller;