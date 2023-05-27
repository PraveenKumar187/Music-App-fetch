import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Movielist from "./Movielist";
import Relavent from "./Relavent";
 import { Navigate } from "react-router-dom";
const Moviedetail = () => {
    let[values,setvalue]=useState(null);
    let [err,seterr]=useState(null);
    let[pending,setpending]=useState(true);
    let navigate=useNavigate();
    let{id} =useParams()
  useEffect(()=>{ setTimeout(()=>{
    fetch("http://localhost:4000/movies/"+id)
    .then((res)=>{return res.json() })
    .then((data)=>{console.log(data);
        setpending(false);
    setvalue(data);})
      .catch((err)=>{seterr("404 error")})
   },3000)
 },[id])
 
 let deletemovies=()=>{
  fetch("http://localhost:4000/movies/"+id,{method :"DELETE"})
  .then(()=>{navigate("/")})
 }
    return ( <div>
{pending==true && <h1>loading.......</h1>}

       {values && 
        <div  id="det">
            <h1>Movie details</h1>
            
          <img src={values.poster} alt="" />
          <button onClick={deletemovies}>delete</button>
            <h1>{values.hero}</h1>
            <h1>{values.release}</h1>
           <h1>{values.rating}</h1>
           <p>The Details is a 2011 American independent black comedy film written and directed by Jacob Aaron Estes.[2] It stars Tobey Maguire, Elizabeth Banks, Kerry Washington, Laura Linney, Ray Liotta and Jonah Hill as the narrator. The film premiered at the 2011 Sundance Film Festival and went into limited release on November 2, 2012.</p>
           <div>
           <Relavent genre={values.genre}/>
            </div>
        </div>
        
    }
   </div>  );
}
 
export default Moviedetail;