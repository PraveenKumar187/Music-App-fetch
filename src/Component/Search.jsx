import { useParams } from "react-router-dom";
import Movielist from "./Movielist";
import { useEffect, useState } from "react";

const Search = ({value}) => {
    let {searchkey}=useParams()
let [search, setsearch]=useState();

useEffect(()=>{
    setsearch(null);
    setTimeout(()=>{fetch("http://localhost:4000/movies")
.then((res)=>{return res.json()})
.then((data)=>{
    let d=data.filter((f)=>{
       return (
        ( f.moviename.toLowerCase().startsWith(searchkey.toLowerCase()))||
         (f.genre.toLowerCase()==searchkey.toLowerCase())||
         (f.languages.includes(searchkey) )
             ) })
             setsearch(d);
})},3000)
},[searchkey])


    return ( 
        <div>
 {search && <Movielist value={value}/>}
        </div>
     );
}
 
export default Search;