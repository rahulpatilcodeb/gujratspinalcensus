import React, {useState} from "react" 
import regi from "../Components/imges/regi.png"
import { Link, NavLink } from "react-router-dom" 
import "../Components/csss/Home.css"
import { Nav } from "react-bootstrap"

const Register =() => {
  // const [formData, setFormData] = useState({});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // send formData to the API
  // };

  function registered(){
    window.location.href="/"
  }


  return (
    <>
      <div className="mb-4" style={{marginLeft: "190px", marginTop: "20px"}}>
        Registration Done.
      </div>

      <div className="card text-center">
        <div className="card-body">
          <img
            className="manImg"
            style={{height: "80px", width: "83px"}}
            src={regi}
            alt=""
          ></img>
          <p className="card-text">Your Registration Successfully Done.</p>
          <NavLink onClick={registered} style={{color: "rgba(107, 193, 122, 1)"}}>
            Registration New Patient
          </NavLink>
        </div>
      </div>
      
    </>
  ) 
}

export default Register;
