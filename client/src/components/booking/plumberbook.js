import { useState, useContext } from "react";
import SoapIcon from "@mui/icons-material/Soap";
import { UserContext } from "../../App";

const Housemaidsbook = () => {
  const userContext = useContext(UserContext);
  const [fname, setFname] = useState();
  const [serviceDate, setserviceDate] = useState();
  const [typeAddress, settypeAddress] = useState();
  const [userphoneno, setUserPhoneno] = useState();
  const [typeofProblem, settypeofProblem] = useState();

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
    settypeofProblem(currentValue2);
  };
  const handleChange3 = (event) => {
    const currentValue3 = event.target.value;
    setFname(currentValue3);
  };
  const handleChange4 = (event) => {
    const currentValue4 = event.target.value;
    setUserPhoneno(currentValue4);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/pbooking", {
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
              <SoapIcon
                sx={{
                  color: "#8956f1",
                  fontSize: "40px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "26px",
                  },
                }}
              />
              <h1>Plumber Service Booking Form</h1>
            </div>
            <h2>Customers Information</h2>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
                <input value={"car"} id="typeofvehicle" hidden></input>
                <input value={userContext.email} id="email" hidden></input>
                <h5>Full name</h5>
                <input
                  value={fname}
                  onChange={handleChange3}
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
                <h5>Phone Number </h5>
                <input
                  value={userphoneno}
                  onChange={handleChange4}
                  id="phoneno"
                />
                <br />
                <h5>Date on which you want the service </h5>
                <input
                  type="date"
                  value={serviceDate}
                  onChange={handleChange}
                  id="servicedate"
                  style={{ textTransform: "uppercase" }}
                />
                <br />
                <h5>Describe Your Problem (optional) </h5>
                <input
                  type="text"
                  value={typeofProblem}
                  onChange={handleChange2}
                  id="typeofproblem"
                />
                <br />
                <button type="submit">Book Now</button>
              </form>
            </div>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/plunber-small-business-illustrations_171919-1155.jpg?w=826"
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Housemaidsbook;
