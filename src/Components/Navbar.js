import React from "react" 
import logo from "../Components/imges/logo.png" 
import { Link } from "react-router-dom" 
import "../Components/csss/Home.css"

function Navbars() {
  return (
    <>
      <div className="my-3 d-flex justify-content-between">
        <div className="col ms-5">
          <span>
            <img
              className="manImg"
              style={{ height: "100px ", width: "120px " }}
              alt=""
              src={logo}
            ></img>
          </span>
        </div>
        <div className="col d-flex justify-content-md-end me-5 my-3">
          <span>
            <Link style={{ color: "rgba(107, 193, 122, 1)" }}>
              Home
            </Link>
            <Link style={{ color: "rgba(0, 0, 0)",marginLeft:"10px" }} >
              Contact
            </Link>
          </span>
        </div>
      </div>
    </>
  ) 
}

export default Navbars 
