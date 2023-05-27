import { useEffect, useState } from "react";
import Movielist from "./Movielist";
const Relavent = ({genre}) => {

    let[value,setvalue]=useState(null);
    let [err,seterr]=useState(null);
    
  useEffect(()=>{ setTimeout(()=>{
    fetch(" http://localhost:4000/movies")
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data);
    setvalue(data);})
      .catch((error)=>{seterr("404 error")})
   },300)
 },[])
 

    return ( <div>
        <h1>Relavent movies</h1>
   {/* {value &&  <Movielist value={value.filter((v)=>{ return v.genre.includes(genre)})} title="relavant "/>}  */}
{value && <Movielist value={value.filter((v)=>{return genre.split(" ").some((g)=>{return v.genre.includes(g)})})}/>}
    </div> );
}
 
export default Relavent;