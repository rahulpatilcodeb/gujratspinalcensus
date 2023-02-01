import React from "react" 
import insta from "../Components/imges/insta.png" 
import meta from "../Components/imges/meta.png" 
import lin from "../Components/imges/lin.png" 
import twit from "../Components/imges/twit.png" 
import "../Components/csss/Home.css"

function Footer() {
  return (
    <>
      <footer
        className=" d-flex justify-content-between position-relative"
        style={{ height: "50px", backgroundColor: "rgb(252, 249, 249)" }}
      >
        <h6 className="my-2 ms-5">© 2023 Spinal Injury. All Rights Reserved.</h6>

        <span className=" my-2 me-5">
          <img style={{ height: "33px", width: "33px" }} alt="" src={insta}></img>
          <img style={{ height: "33px", width: "33px" }} alt="" src={meta}></img>
          <img style={{ height: "33px", width: "33px" }} alt="" src={lin}></img>
          <img style={{ height: "33px", width: "33px" }} alt="" src={twit}></img>
        </span>
      </footer>
    </>
  ) 
}

export default Footer 
