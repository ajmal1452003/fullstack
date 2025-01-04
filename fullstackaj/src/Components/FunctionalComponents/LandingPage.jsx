var LandingPage = () =>{
    let user=localStorage.getItem('user')

    return( 
    <div>
        <h1>Welcome Baaka {user}</h1>        
        
    </div>
    )
}
export default LandingPage;