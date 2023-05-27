import { Ref, useRef } from "react";

const AddMovie = () => {
  let moviename=useRef();
  let hero=useRef();
  let heroine=useRef();
  let director=useRef();
  let genre=useRef();
  let poster=useRef();
  let trailer=useRef();
  let release=useRef();
  let rating=useRef();
  let synopsis=useRef();
let handleaddmovie =(e)=>{
//create new movies object
e.preventDefault()
let newMovies={
  moviename:moviename.current.value,
        hero:hero.current.value,
        heroine:heroine.current.value,
        director:director.current.value,
        languages:[],
        genre:genre.current.value,
        poster:poster.current.value,
        trailer:trailer.current.value,
        release:release.current.value,
        rating:rating.current.value,
        synopsis:synopsis.current.value

}
let options=document.getElementsByName("lang");
for (let i = 0; i< options.length; i++) {
   if(options[i].checked)
   {
    newMovies.languages.push(options[i].value)
   }
  
}
fetch("http://localhost:4000/movies",{
method:"POST",
headers:{"Content-Type":"application/json"},
body : JSON.stringify(newMovies)
})
.then(()=>{
  alert("New movies added");
})
}
    return (  
        <div id="add">

            <h1>add movies</h1>
           <form onSubmit={ handleaddmovie}>

           <div id="actt">
            <div  id="Name">
            <input type="text" placeholder="enter movie name" ref={moviename} />
            <input type="text" placeholder="enter hero name" ref={hero}/>
            <input type="text" placeholder="enter heroine"ref={heroine}/>
            <input type="text" placeholder="enter your direction" ref={director} />
            </div>
            </div>
            <br />
            <br />
            <h3>LANGUAGE</h3>
           <div id="act">
          <form action="">
            {/* <label htmlFor="">LANGUAGE</label> */}
          <input type="checkbox" value={"Tamil"} name="lang" id="l1" />
          <label htmlFor="l1">Tamil</label>
          <input type="checkbox" value={"kannada"} name="lang" id="l2" />
          <label htmlFor="l2">kannada</label>
          <input type="checkbox" value={"English"} name="lang" id="l3" />
          <label htmlFor="l3">English</label>
          <input type="checkbox" value={"hindi"} name="lang" id="l4" />
          <label htmlFor="l4">hindi</label>
          </form>
          </div>
          <br />
          <h3>GENRE</h3>
            
          <div id="url">
          <input type="text" placeholder="Genre" ref={genre} />
            <input type="url" name="" id="" placeholder="enter poster url" ref={poster} />
            <input type="url" name="" id="" placeholder="enter triler url" ref={trailer}/>
            <input type="number" step="0.1" max={10} name="" id="" placeholder="rating" ref={rating} />
            
            <label htmlFor=""><h3>year of release</h3></label>
            <input type="date" name="" id="" ref={release}/>
            <textarea name="" id="" cols="30" rows="6" ref={synopsis}></textarea>
            </div>
            <button type="submit">add movies </button>
           </form>
         <br />
               
           
        </div>
    );
}
 
export default AddMovie;