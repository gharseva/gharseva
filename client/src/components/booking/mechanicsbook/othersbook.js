import { useState, useContext } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Othersbook = () => {
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
  const handleChange5 = (event) => {
    const currentValue2 = event.target.value;
    setothertypevehi(currentValue2);
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
              <LocalShippingIcon
                sx={{
                  color: "#8956f1",
                  fontSize: "40px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "35px",
                  },
                }}
              />
              <h1>Other Vehicles Service Booking Form</h1>
            </div>
            <h2>Customers Information</h2>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
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
                <h5>Type of Vehicle </h5>
                <input
                  value={othertypevehi}
                  onChange={handleChange5}
                  id="typeofvehicle"
                ></input>
                <h5>Date on which you want the service </h5>
                <input
                  type="date"
                  value={serviceDate}
                  onChange={handleChange}
                  id="servicedate"
                  style={{ textTransform: "uppercase" }}
                />
                <br />
                <button type="submit">Book Now</button>
              </form>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/auto-detailing-abstract-concept_335657-3078.jpg?w=826&t=st=1678687938~exp=1678688538~hmac=6af8bc207af0ddf5f98f60beb6fcdeef86b8ab7a9536c03a6ce7a238aec109b2"
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Othersbook;
