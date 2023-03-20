import { useState } from "react";
import "../../../styles/mechanicsbooking/carbook.css";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";

const Carbook = () => {
  const [serviceDate, setserviceDate] = useState();
  const [typeAddress, settypeAddress] = useState();

  const handleChange = (event) => {
    const currentValue = event.target.value;
    setserviceDate(currentValue);
  };
  const handleChange1 = (event) => {
    const currentValue1 = event.target.value;
    settypeAddress(currentValue1);
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
                <input value={"a@gmail.com"} id="email" hidden></input>
                <h5>Full Name</h5>
                <input value={"Ajharul"} id="fullname"></input>
                <br />
                <h5>Address </h5>
                <input
                  value={typeAddress}
                  onChange={handleChange1}
                  id="address"
                />
                <br />
                <h5>Phone Number </h5>{" "}
                <input value={"8471987717"} id="phoneno" />
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
                <input value={""} id="problem" />
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
