import { useState, useContext } from "react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { UserContext } from "../../../App";

const Bikebook = () => {
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
    alert("YOur order has been booked");
  };
  return (
    <>
      <div className="mainn">
        <div className="carbook-main-div">
          <div className="carbook-main-div-1">
            <div className="header-carbook">
              <TwoWheelerIcon
                sx={{
                  color: "#8956f1",
                  fontSize: "40px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "35px",
                  },
                }}
              />
              <h1>Bike/Scooty Service Booking Form</h1>
            </div>
            <h2>Customers Information</h2>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
                <input value={"bike/scooty"} id="typeofvehicle" hidden></input>
                <input value={userContext.email} id="email" hidden></input>
                <h5>Full name</h5>
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
                <h5>Phone Number </h5>
                <input
                  value={userphoneno}
                  onChange={handleChange3}
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
                <h5>
                  Describe the Problem with your Bike/Scooty (optional)
                </h5>{" "}
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
            src="https://img.freepik.com/free-vector/male-mechanic-repairs-motorcycle-wheel-isolated-white-background-man-fixing-motorbike-repair-shop-garage-concept-motor-service-repair-maintenance-garage_575670-1889.jpg?w=740&t=st=1678687527~exp=1678688127~hmac=6c9e3e80c44bd644f5c14bab87e7f877efd2f4254e6141560b8f66ac2e549161"
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Bikebook;
