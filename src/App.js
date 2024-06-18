import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Component/Contact';
import PastProjects from './Component/PastProjects';
import Details from './Component/Details';
import Overview from './Component/Overview';
import Services from './Component/Services';

function App() {
  return (
<Router>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/pastprojects' element={<PastProjects/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/overview' element={<Overview/>}/>
    <Route path='/services' element={<Services/>}/>
   </Routes>
   <Footer/>
   </Router>
  );
}

export default App;
