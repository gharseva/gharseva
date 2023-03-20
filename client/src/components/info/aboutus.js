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
import "../../styles/aboutus.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Img7 from "../../assets/chrome.png";
import MenuIcon from "@mui/icons-material/Menu";

const handleLogout = async (event) => {
  event.preventDefault();

  await fetch("/api/logout", {
    method: "DELETE",
  });
  window.location.href = "/";
};

const AboutUs = () => {
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
          }}
          to={`/`}
        >
          <h2 className="brand-name">GharSeva</h2>
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
      {/* end nav  */}
      <div className="aboutus-div">
        <div className="au-inner-div">
          <h1>ABOUT US</h1>
          <p>
            Welcome to our website, your one-stop solution for all home services
            in Silchar! We take pride in being one of the most reliable and
            trusted service providers in the city, offering a wide range of
            services that include vehicle repair, catering, electrician,
            plumbing, and many more.
          </p>
          <h1>OUR MISSION</h1>
          <p>
            Our mission is simple - to provide quality home services to the
            residents of Silchar with the utmost professionalism and efficiency.
            We understand that your time is valuable, and that's why we strive
            to complete every task promptly, without compromising on the quality
            of our work. We believe in delivering services that exceed your
            expectations, leaving you satisfied and stress-free.
          </p>
          <h1>OUR OPERATION</h1>
          <p>
            Our operation is simple and transparent. All you need to do is visit
            our website and select the service you require. You can choose a
            time slot that works best for you, and our team will arrive at your
            doorstep at the appointed time. Our technicians will assess the
            problem and provide you with a cost estimate before beginning any
            work. We believe in complete transparency, and there are no hidden
            charges or fees.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=1380&t=st=1679198953~exp=1679199553~hmac=59f42f66450e21cd8467d5c8f12275ef86f88bfadfc956367e9240c8c8b3f42a"
          alt="ff"
        />
      </div>
      {/* body end  */}
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

export default AboutUs;
