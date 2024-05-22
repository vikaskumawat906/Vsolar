import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Component/Navbar';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Component/Contact';

function App() {
  return (
<Router>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contactus' element={<Contact/>}/>
   </Routes>
   </Router>
  );
}

export default App;
