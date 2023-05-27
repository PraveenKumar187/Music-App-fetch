import { useEffect, useState } from "react";
import Movielist from "./Movielist";

const Fav = () => {
    let [fav,setfav]=useState(null)
    useEffect(()=>{
        setfav(JSON.parse(localStorage.getItem("fav")))
    },[])
    return (  
        <div>
          {fav && <Movielist value={fav}  title="favorite movies"/>}
        </div>
    );
}
 
export default Fav;