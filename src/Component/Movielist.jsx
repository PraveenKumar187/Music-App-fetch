import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movielist = ({ value, title }) => {
let[favid,setfavid]=useState([])
let[change,setchange]=useState(0)
      useEffect(()=>{
         let fav=JSON.parse(localStorage.getItem("fav"));
         setfavid(fav.map((m)=>{ return m.id}))
      },[change])
            
let add=(movie)=>{

   let fav=JSON.parse(localStorage.getItem("fav"));
   fav.push(movie);
   localStorage.setItem("fav",JSON.stringify(fav));
 setchange(change+1)
}
let remove=(id)=>{

   let fav=JSON.parse(localStorage.getItem("fav"));
    fav=fav.filter((m)=>{ return m.id!=id})
   localStorage.setItem("fav",JSON.stringify(fav));
   setchange(change+1)
}



   return (
      <div >
         <h3>{title}</h3>
         <div className="home">
            {
               value.map((v) => {

                  return (
                       <div>

                       {favid.includes(v.id) ?
                        <button className="add-btn" onClick={()=>{remove(v.id)}}> 💙 </button>:
                       <button onClick={()=>{add(v)}}> 🖤  </button>}
                     <Link to={`/Moviedetail/${v.id}`}>
                        <div className="movies">
                           <h4>{v.moviename + "/ rating-- " + v.rating +
                              "/ release date--" + v.release}</h4>
                               <img src={v.poster} height={"250px"} width={"250px"} alt="" />
                              {/* {<a href="">download here</a> } */}
                         </div>
                     </Link>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
}

export default Movielist;