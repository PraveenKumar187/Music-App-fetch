import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home1 from './Component/Home1';
import AddMovie from './Component/AddMovie';
import Moviedetail from './Component/Moviedetail';
import Fav from './Component/Fav';
import Search from './Component/Search';

function App() {
    return (
   <BrowserRouter>
  
    <div className="App">
      <Navbar/>
   <Routes>
   <Route path="/AddMovie" element={<AddMovie/>}></Route>
   <Route path="/" element={<Home1/>}></Route>
   <Route path="/Moviedetail/:id" element={<Moviedetail/>}></Route>
   <Route path="/fav" element={<Fav/>}></Route>
   {/* <Route path="/Search/:searchkey" element={<Search/>}/> */}
   </Routes>
    </div>
   
   </BrowserRouter>
   
  );
}

export default App;
