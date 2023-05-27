import { useRef,Ref, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let [menu,setmenu]=useState(false);
    let sref=useRef()
    return (
       <nav id="nav">
<div id="logo">
    <Link to="/"><h1>Movies 🕸  </h1></Link>
</div>
<div id="seachbar">
   <input type="search" ref={sref} placeholder="search the movies" />
   {/* <Link to={`/Search/${sref.current.v}}`}> </Link> */}
   <button >search</button>
</div> 
<div id="favmovies">
<Link to="/fav">favorite</Link>
</div>

<div id="addmovies">
    <Link to="/AddMovie">add movies</Link>
<div>

<div id="hamberger">
   {menu ==false ? 
   
    <span onClick={()=>{setmenu(!menu)}}><i class='bx bx-menu'></i></span>:
    <span  onClick={()=>{setmenu(!menu)}}> <i class='bx bx-menu-alt-right'></i></span>
    }

{menu && <div id="menu">
<div id="favmovies"><Link to="/fav">favorite</Link></div>
<div id="addmovies"><Link to="/AddMovie">add movies</Link></div>
</div>}

</div>
</div>

</div>

       </nav>
      );
}
 
export default Navbar;