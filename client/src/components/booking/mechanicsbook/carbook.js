import { useState, useContext } from "react";
import "../../../styles/mechanicsbooking/carbook.css";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";
import { UserContext } from "./App";

const Carbook = () => {
  const userContext = useContext(UserContext);
  const [fname, setFname] = useState();
  const [serviceDate, setserviceDate] = useState();
  const [typeAddress, settypeAddress] = useState();
  const [userphoneno, setUserPhoneno] = useState();
  const [typeofproblem, settypeodproblem] = useState();

  const handleChange = (event) => {
    const currentValue = event.target.value;
    setserviceDate(currentValue);
  };
  const handleChange1 = (event) => {
    const currentValue1 = event.target.value;
    settypeAddress(currentValue1);
  };
  const handleChange2 = (event) => {
    const currentValue2 = event.target.value;
    setFname(currentValue2);
  };
  const handleChange3 = (event) => {
    const currentValue3 = event.target.value;
    setUserPhoneno(currentValue3);
  };
  const handleChange4 = (event) => {
    const currentValue4 = event.target.value;
    settypeodproblem(currentValue4);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/mbooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phoneno: document.getElementById("phoneno").value,
        address: document.getElementById("address").value,
        onservicedate: document.getElementById("servicedate").value,
        typeofvehicle: document.getElementById("typeofvehicle").value,
        typeofproblem: document.getElementById("typeofproblem").value,
      }),
    });
    await res.json();
    alert("Your order has been booked");
  };

  return (
    <>
      <div className="mainn">
        <div className="carbook-main-div">
          <div className="carbook-main-div-1">
            <div className="header-carbook">
              <TaxiAlertIcon
                sx={{
                  color: "#8956f1",
                  fontSize: "40px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "26px",
                  },
                }}
              />
              <h1>Car Service Booking Form</h1>
            </div>
            <h2>Customers Information</h2>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
                <input value={"car"} id="typeofvehicle" hidden></input>
                <input value={userContext.email} id="email" hidden></input>
                <h5>Full Name</h5>
                <input
                  value={fname}
                  onChange={handleChange2}
                  id="fullname"
                ></input>
                <br />
                <h5>Address </h5>
                <input
                  value={typeAddress}
                  onChange={handleChange1}
                  id="address"
                />
                <br />
                <h5>Phone Number </h5>{" "}
                <input
                  value={userphoneno}
                  onChange={handleChange3}
                  id="phoneno"
                />
                <br />
                <h5>Date on which you want the service</h5>
                <input
                  type="date"
                  value={serviceDate}
                  onChange={handleChange}
                  id="servicedate"
                  style={{ textTransform: "uppercase" }}
                />
                <br />
                <h5>Describe the Problem with your Car (Optional)</h5>{" "}
                <input
                  value={typeofproblem}
                  onChange={handleChange4}
                  id="typeofproblem"
                />
                <button type="submit">Book Now</button>
              </form>
            </div>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/car-service-concept_277904-6430.jpg?w=1060"
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Carbook;
