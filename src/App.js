import Header from './component/Header';
import Navbar from './component/Navbar';
import Movies from './component/Movies';
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'
import {Routes,Route} from 'react-router-dom';
import Login from './component/Login';
function App() {
  return (
    <div className="">
    
    {
      
      // <Login/>
  }
  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/user' element={<Login/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
      </Routes>

  
    
      <Footer/>
    
    </div>
  );
}

export default App;
