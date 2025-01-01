import { useEffect,useState } from "react";
import axios from "axios";


var UseEffects =() =>{
    var [post, setPost] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=> {
            console.log(res)
        setPost(res.data)
        })
        .catch((err)=> console.log(err))
    },[])

return(
    <section>
        <h1>fetching data from Json Placeholder API</h1>
        <h2>Posts are </h2>
        <ol>
            {post.map((ele)=>{
                return <li key = {ele.id}>{ele.title}</li>
            })}
        </ol>

    </section>
)
};
export default UseEffects