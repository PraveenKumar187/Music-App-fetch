import { useEffect, useState } from "react";
import Movielist from "./Movielist";

const Home1 = () => {

if(localStorage.getItem("fav")==null)
{
  localStorage.setItem("fav","[]")
}
  let[value,setvalue]=useState(null);
   let [err,seterr]=useState(null);
   
 useEffect(()=>{ setTimeout(()=>{
   fetch(" http://localhost:4000/movies")
   .then((res)=>{return res.json()})
   .then((data)=>{console.log(data);
   setvalue(data);})
     .catch((error)=>{seterr("404 error")})
  },3000)
},[])

    return (
        <div>
         {err!= null && <h1>{err}</h1>}
         {value==null ?<><h1 className="spin"></h1></>  :<Movielist value={value} title="all movies"/> }
         
         {value &&  <Movielist value={value.filter((v)=>{ return v.genre.includes("divine")})} title="action"/>} 

         {value &&  <Movielist value={value.filter((h)=>{ return h.genre.includes("Comedy")})} title="comedy"/> }
         {value &&  <Movielist value={value.filter((h)=>{ return h.genre.includes("drama")})} title="drama"/> }
     
        </div>
      );
}

 
export default Home1;