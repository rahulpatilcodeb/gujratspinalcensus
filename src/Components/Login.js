import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/csss/Home.css";

const Login = ({ nextStep, handleFormData, prevStep, values, onsubmit }) => {
  // const [data, FormData] = useState({});

  // const handleSubmit = (event) => {
  //   console.log("in handle submit");
  //   event.preventDefault();
  //   console.log(data);
  // };

  // function handleFormData(event) {
  //   return FormData({
  //     ...data,
  //     [event.target.name]: event.target.value,
  //   });
  // }
  const submitFormData = async (e) => {
    e.preventDefault();
    console.log("FormData")
    await onsubmit(e);
    console.log("after")
    nextStep();
  };

  return (
    <>
      <div className="mb-5 d-flex justify-content-center">
        <div style={{ marginRight: "50px" }}>
          <div className="col">
            <span
              style={{
                border: "px solid rgb(231, 231, 231)",
                backgroundColor: "rgb(228, 233, 229)",
                padding: "5px 8px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              1
            </span>
            <span>Personal Details -</span>
          </div>
        </div>
        <div style={{ marginLeft: "50px " }}>
          <div className="col">
            <span
              style={{
                border: "2px solid rgb(0, 238, 40)",
                backgroundColor: "rgb(78, 244, 105)",
                padding: "5px 8px ",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              2
            </span>
            <span>Injury Details -</span>
          </div>
        </div>
      </div>
      <form
        name="form"
        onSubmit={submitFormData}
        style={{ margin: "0px 339px " }}
      >
        <div className="container mb-4">
          <div className="mb-4">
            <label for="InjuryYear" className="form-label">
              Injury Year
            </label>
            <input
            onChange={handleFormData("injuryYear")}
            type="text"
            name="injuryYear"
              id="InjuryYear"
              className="form-control tcolor"
            />
             
          </div>
          <div className="mb-4">
            <label for="Ireason" className="form-label">
              Injury Reason
            </label>
            <textarea
              onChange={handleFormData("injuryReason")}
              name="injuryReason"
              value={values.injuryReason}
              className="form-control tcolor"
              id="Ireason"
              rows="1"
            ></textarea>
          </div>
          <label for="Itype" className="form-label">
            Injury Type
          </label>
          <div className="row mb-4 ">
            <div className="col d-flex justify-content-between">
              <label
                className="custom-control-label"
                name="Injury-type"
                for="ItypeP"
              >
                Paraplagia
              </label>
              <input
                onChange={handleFormData("injuryType")}
                type="radio"
                name="injuryType"
                className="custom-control-input"
                value="Paraplagia"
                id="ItypeP"
              />
            </div>
            <div className="col d-flex justify-content-between">
              <label
                className="custom-control-label"
                name="Injury-type"
                for="ItypeQ"
              >
                Quadriplegia
              </label>
              <input
                onChange={handleFormData("injuryType")}
                type="radio"
                name="injuryType"
                className="custom-control-input"
                value="Quadriplegia"
                id="ItypeQ"
              />
            </div>
          </div>

          <div className="mb-4">
            <label for="Ilevel" className="form-label">
              Injury Level
            </label>
            <select
              onChange={handleFormData("injuryLevel")}
              name="injuryLevel"
              id="Ilevel"
              className="form-select tcolor"
            >
              <option value="high">high</option>
              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </div>
          <label for="ImplantFix" className="form-label">
            Implant Fixation
          </label>
          <div className="row mb-4">
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="ImplantFix">
                Operated
              </label>
              <input
                onChange={handleFormData("implantFixation")}
                type="radio"
                name="implantFixation"
                className="custom-control-input"
                value="Operated"
                id="ImplantFix"
              />
            </div>
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="Implant-Fix-No">
                Not Operated
              </label>
              <input
                onChange={handleFormData("implantFixation")}
                type="radio"
                name="implantFixation"
                className="custom-control-input"
                value="Not Operated"
                id="Implant-Fix-No"
              />
            </div>
          </div>
          <label className="form-label">Injury Status:</label>
          <div className="row mb-4">
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="Istatus">
                Compled
              </label>
              <input
                onChange={handleFormData("injuryStatus")}
                type="radio"
                name="injuryStatus"
                className="custom-control-input"
                value="Compled"
                id="Istatus"
              />
            </div>
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="Istatus-no">
                Incomplete
              </label>
              <input
                onChange={handleFormData("injuryStatus")}
                type="radio"
                name="injuryStatus"
                className="custom-control-input"
                value="Incomplete"
                id="Istatus-no"
              />
            </div>
          </div>
          <label for="exampleFormControlTextarea1" className="form-label">
            Physical Status
          </label>
          <div className="row mb-4">
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="PhysicalStatus">
                Dependent
              </label>
              <input
                onChange={handleFormData("physicalStatus")}
                type="radio"
                name="physicalStatus"
                className="custom-control-input"
                value="Dependent"
                id="PhysicalStatus"
              />
            </div>
            <div className="col d-flex justify-content-between">
              <label
                className="custom-control-label"
                name="gender"
                for="PhysicalStatusno"
              >
                Not Dependent
              </label>
              <input
                onChange={handleFormData("physicalStatus")}
                type="radio"
                name="physicalStatus"
                className="custom-control-input"
                value="Not Dependent"
                id="PhysicalStatusno"
              />
            </div>
          </div>
          <label className="form-label">Financial Status</label>
          <div className="row mb-4">
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="Financialdep">
                Dependent
              </label>
              <input
                onChange={handleFormData("financialStatus")}
                type="radio"
                name="financialStatus"
                className="custom-control-input"
                value="Dependent"
                id="Financialdep"
              />
            </div>
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="FinancialInd">
                Independent
              </label>
              <input
                onChange={handleFormData("financialStatus")}
                type="radio"
                name="financialStatus"
                className="custom-control-input"
                value="Independent"
                id="FinancialInd"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-between">
              <label className="custom-control-label" for="FinancialJob">
                Job
              </label>
              <input
                onChange={handleFormData("financialStatus")}
                type="radio"
                name="financialStatus"
                className="custom-control-input"
                value="Job"
                id="FinancialJob"
              />
            </div>
            <div className="col d-flex justify-content-between ">
              <label className="custom-control-label" for="FinancialBus">
                Business
              </label>
              <input
                onChange={handleFormData("financialStatus")}
                type="radio"
                name="financialStatus"
                className="custom-control-input"
                value="Business"
                id="FinancialBus"
              />
            </div>
          </div>
          <div className="div d-flex justify-content-between">
            <button
              onClick={prevStep}
              style={{
                backgroundColor: "rgba(193, 107, 178, 1)",
                color: "white",
              }}
              to="/"
              className="btn"
              role="button"
            >
              Previous
            </button>
            <button
            type="submit"

              style={{
                backgroundColor: "rgba(193, 107, 178, 1)",
                color: "white",
              }}
              // to="/registered"
              className="btn"
              role="button"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
