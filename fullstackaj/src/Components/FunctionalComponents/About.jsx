const About = (props) =>{

    return( 
    <div>
        <h1>This is about us page.</h1>
        <h2>i am studing in {props.College}</h2>
        <h3>I am studing {props.Course}</h3>        
        
    </div>
    )
}
export default About;