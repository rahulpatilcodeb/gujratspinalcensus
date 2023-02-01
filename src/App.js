import Navbar from "./Components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	
} from 'react-router-dom';
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Footer from "./Components/footer";
import Common from "./Components/Common";
import { FormDataContext } from "./Components/Common";
import { Provider } from "react";



function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Common />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/Registered" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
