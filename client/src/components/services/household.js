import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Stack,
  TextField,
  Autocomplete,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Img7 from "../../assets/chrome.png";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/logo.png";

const handleLogout = async (event) => {
  event.preventDefault();

  await fetch("/api/logout", {
    method: "DELETE",
  });
  window.location.href = "/";
};

const Housemaid = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClickP = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    setIsShown(true);
  };
  const handleCloseP = () => {
    setIsShown(false);
  };
  return (
    <>
      {isShown && (
        <div className="mobile-nav-div">
          <div
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/120/120925.png?w=826&t=st=1678961429~exp=1678962029~hmac=c2d1f4ba17e1f27c0dc5cf756846a8695cef1936478e850de80feb689c330eb7"
              alt="f"
              onClick={handleCloseP}
            />
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              position: "sticky",
              top: "0",
              zIndex: "999",
            }}
          >
            <h2
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </h2>
            <h2>Services</h2>
            <h2
              onClick={() => {
                window.location.href = "/aboutus";
              }}
            >
              About Us
            </h2>
            <h2
              onClick={() => {
                window.location.href = "/contactus";
              }}
            >
              Contact Us
            </h2>
            <button onClick={handleLogout} className="logout-buttonM">
              Log Out
            </button>
          </div>
        </div>
      )}
      <div className="navbar-home">
        <Link
          component={RouterLink}
          sx={{
            textTransform: "none",
            textDecoration: "none",
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to={`/`}
        >
          {/* <h2 className="brand-name">GharSeva</h2> */}
          <img className="brand-logo" src={Logo} />
        </Link>
        <div className="home-h-div">
          <h3
            className="home-h"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </h3>
          <h3 className="home-h">Services</h3>
          <h3
            className="home-h"
            onClick={() => {
              window.location.href = "/aboutus";
            }}
          >
            About Us
          </h3>
          <h3
            className="home-h"
            onClick={() => {
              window.location.href = "/contactus";
            }}
          >
            Contact Us
          </h3>
        </div>
        {/* for mobile navbar*/}
        <div className="mobile-navbar">
          <MenuIcon onClick={handleClickP}></MenuIcon>
        </div>
        {/* for mobile navbar end*/}
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      </div>
      <div className="mechanic-main-div">
        <h1 className="mech-title">Household Services</h1>
        <div className="mech-type-div">
          <div className="car-mech">
            <img
              src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15085.jpg?w=1380&t=st=1678780897~exp=1678781497~hmac=6b48729f43191e908ab8e0298898163b7495f8bdbd12b8440f137a006142738f"
              alt="aa"
              className="car-mech-img"
            />
            <div className="overlay-div">
              <div>
                <h4 className="mech-title-card">Electrician</h4>
              </div>
              <div>
                <Link
                  component={RouterLink}
                  to={`/household/electricianbooking`}
                  sx={{ textTransform: "none", textDecoration: "none" }}
                >
                  <h5 className="mech-book-button">Book Now</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="car-mech">
            <img
              src="https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg?w=1380&t=st=1678781020~exp=1678781620~hmac=9e21ab6de085d9e0bfb12c62d64f8e61c1974ddf5ad2a7966536c3417b59058b"
              alt="aa"
              className="car-mech-img"
            />
            <div className="overlay-div">
              <div>
                <h4 className="mech-title-card">Plumber</h4>
              </div>
              <div>
                <Link
                  component={RouterLink}
                  to={`/household/plumberbooking`}
                  sx={{ textTransform: "none", textDecoration: "none" }}
                >
                  <h5 className="mech-book-button">Book Now</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="car-mech">
            <img
              src="https://img.freepik.com/free-photo/chambermaid-preparing-hotel-room_23-2148095204.jpg?w=1380&t=st=1678781089~exp=1678781689~hmac=18a182b3479f98354216ccbf42d596a24d388264a54152ab2feb52f14275bae5"
              alt="aa"
              className="car-mech-img"
            />
            <div className="overlay-div">
              <div>
                <h4 className="mech-title-card">Housemaid</h4>
              </div>
              <div>
                <Link
                  component={RouterLink}
                  to={`/household/housemaidbooking`}
                  sx={{ textTransform: "none", textDecoration: "none" }}
                >
                  <h5 className="mech-book-button">Book Now</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mech-verified-div">
        <div className="mech-verified-sub-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/360/360467.png?w=826&t=st=1677930694~exp=1677931294~hmac=eb6d24399b7146c452efc3798f34bb2b5a4e99bb368e04be694049e8825b631a"
            className="img-mech"
          />
          <h3 style={{ color: "#444444", fontWeight: "600" }}>Trained</h3>
        </div>
        <div className="mech-verified-sub-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1226/1226208.png?w=826&t=st=1677930745~exp=1677931345~hmac=3661f407e2fcfc3bd0a749e57065ab5d953724e4dd6e5925b1ad0db10f3026d5"
            className="img-mech"
          />
          <h3 style={{ color: "#444444", fontWeight: "600" }}>Experienced</h3>
        </div>
        <div className="mech-verified-sub-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1255/1255403.png?w=826&t=st=1677930543~exp=1677931143~hmac=9e60a4ae0f0b6d958929a4548f7ed3697e6e86e711159b790fbe296312f5c78d"
            className="img-mech"
          />
          <h3 style={{ color: "#444444", fontWeight: "600" }}>Punctual</h3>
        </div>
        <div className="mech-verified-sub-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1001/1001677.png?w=826&t=st=1677930490~exp=1677931090~hmac=7c748e3cdbb64ab1294cfc11009f7abaeef9de6b951a6702d30a1bfbdfb73f60"
            className="img-mech"
          />
          <h3 style={{ color: "#444444", fontWeight: "600" }}> Reliable </h3>
        </div>
      </div>
      {/* Footer starts */}
      <div className="footer-div">
        <div className="footer-inner-div">
          <h1 style={{ color: "#fff", fontFamily: "Montserrat" }}>
            GET OUR WEB APP
          </h1>
          <img src={Img7} alt="" className="footer-icon" />
        </div>
        <div className="footer-inner-div-1">
          <div className="footer-extra-fm" style={{ flex: "1" }}>
            <b>Our Services</b>
            <ul className="footer-ul">
              <li
                onClick={() => {
                  window.location.href = "/mechanics";
                }}
              >
                Vehicle Repair
              </li>
              <li
                onClick={() => {
                  window.location.href = "/catering";
                }}
              >
                Catering
              </li>
              <li
                onClick={() => {
                  window.location.href = "/household";
                }}
              >
                Household
              </li>
              <li
                onClick={() => {
                  window.location.href = "/otherservices";
                }}
              >
                Others
              </li>
            </ul>
          </div>
          <div className="footer-extra-fm" style={{ flex: "1" }}>
            <b>About Us</b>
            <ul className="footer-ul">
              <li
                onClick={() => {
                  window.location.href = "/aboutus";
                }}
              >
                Our Mission
              </li>
              <li
                onClick={() => {
                  window.location.href = "/aboutus";
                }}
              >
                Our Team
              </li>
              <li>Our Blog</li>
              <li
                onClick={() => {
                  window.location.href = "/aboutus";
                }}
              >
                Our Operation
              </li>
            </ul>
          </div>
          <div className="mobile-footer-remove" style={{ flex: "1" }}>
            <b>&nbsp;</b>
            <ul className="footer-ul-1">
              <li
                onClick={() => {
                  window.location.href = "/contactus";
                }}
              >
                Contact Us
              </li>
              <li>Register as a Employee</li>
              <li
                onClick={() => {
                  window.location.href = "/termsandconditions";
                }}
              >
                Terms and Condition
              </li>
            </ul>
          </div>
        </div>
        <div className="pc-footer-remove" style={{}}>
          <b>&nbsp;</b>
          <ul className="footer-ul-1">
            <li
              onClick={() => {
                window.location.href = "/contactus";
              }}
            >
              Contact Us
            </li>
            <li>Register as a Employee</li>
            <li
              onClick={() => {
                window.location.href = "/termsandconditions";
              }}
            >
              Terms and Condition
            </li>
          </ul>
        </div>
      </div>
      <hr className="hori-line" />
      <div className="final-footer-div">
        <div className="footer-email" style={{ flex: "1" }}>
          <h5>Contact No. : 8471987717</h5>
        </div>
        <div style={{ flex: "1" }}>
          <h5>Email : supportalpha@gmail.com</h5>
        </div>
        <div
          className="footer-social"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookIcon
            onClick={() => {
              window.location.href =
                "https://www.facebook.com/profile.php?id=100090323919200&mibextid=ZbWKwL";
            }}
          />
          <InstagramIcon
            onClick={() => {
              window.location.href =
                "https://instagram.com/ghar__seva?igshid=ZDdkNTZiNTM=";
            }}
          />
          <LinkedInIcon
            onClick={() => {
              window.location.href =
                "https://in.linkedin.com/in/ghar-seva-338b3926a";
            }}
          />
        </div>
      </div>
      {/* footer ends */}
    </>
  );
};

export default Housemaid;
