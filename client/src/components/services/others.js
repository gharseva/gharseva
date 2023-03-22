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

const Others = () => {
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
          <img className="brand-logo" src={Logo} />
        </Link>
        {/* <h2 className="brand-name">GharSeva</h2> */}
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
      {/* BODY */}
      <div className="coming-soon-div">
        {" "}
        <h1 className="coming-soon-text"> &nbsp; &nbsp;Soon </h1>
      </div>
      {/* BODY END */}
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

export default Others;
