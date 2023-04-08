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
import Modal from "react-modal";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

import "../styles/home.css";

//images\
import Img from "../assets/wave1.png";
import Img1 from "../assets/Img2.webp";
import Img2 from "../assets/protection.png";
import Img3 from "../assets/bestprice.png";
import Img4 from "../assets/hourglass.png";
import Img5 from "../assets/browser.png";
import Img6 from "../assets/advertising.png";
import Img7 from "../assets/chrome.png";
import Logo from "../assets/logo.png";
import cateringimg from "../assets/cateringimg.jpeg";
import mechimg from "../assets/mechimg.jpeg";
import holdimg from "../assets/holdimg.jpeg";
import otherimg from "../assets/otherimg.jpeg";

const handleLogout = async (event) => {
  event.preventDefault();

  await fetch("/api/logout", {
    method: "DELETE",
  });
  window.location.href = "/";
};

const Home = () => {
  // prompt for webapp download
  useEffect(() => {
    if (
      "onbeforeinstallprompt" in window &&
      /Android/i.test(navigator.userAgent)
    ) {
      window.addEventListener("beforeinstallprompt", (e) => {
        console.log("Before install prompt fired!");
      });
    }
  }, []);

  const [isShown, setIsShown] = useState(false);
  const [faqisShown, setFaqIsShown] = useState(false);
  const [faqisShown1, setFaqIsShown1] = useState(false);
  const [faqisShown2, setFaqIsShown2] = useState(false);
  const [faqisShown3, setFaqIsShown3] = useState(false);
  const [faqisShown4, setFaqIsShown4] = useState(false);
  const [faqisShown5, setFaqIsShown5] = useState(false);
  const scrollRef = useRef();
  const scrollBottom = (e) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClickP = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    setIsShown(true);
  };
  const handleCloseP = () => {
    setIsShown(false);
  };
  const handleClick1 = () => {
    // Toggle the content for the first question
    setFaqIsShown((current) => !current);
  };
  const handleClick2 = () => {
    // Toggle the content for the first question
    setFaqIsShown1((current) => !current);
  };
  const handleClick3 = () => {
    // Toggle the content for the first question
    setFaqIsShown2((current) => !current);
  };
  const handleClick4 = () => {
    // Toggle the content for the first question
    setFaqIsShown3((current) => !current);
  };
  const handleClick5 = () => {
    // Toggle the content for the first question
    setFaqIsShown4((current) => !current);
  };
  const handleClick6 = () => {
    // Toggle the content for the first question
    setFaqIsShown5((current) => !current);
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
            <h2 onClick={() => scrollBottom(scrollRef)}>Services</h2>
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
      <div loading="eager" alt="" className="poster">
        <div className="navbar-home">
          {/* <h2 className="brand-name">GharSeva</h2> */}
          <img className="brand-logo" src={Logo} alt="gg" />
          <div className="home-h-div">
            <h3
              className="home-h"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </h3>
            <h3 className="home-h" onClick={() => scrollBottom(scrollRef)}>
              Services
            </h3>
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
        <div className="header">
          <div className="dialog-div">
            <h1 className="dialog">
              Silchar's <span>Trusted Home </span>
              Services
            </h1>
            <h5 className="dialog-para">
              Simplify your life and find the right domestic help with{" "}
              <span className="website-ani">GharSeva' </span>
              efficient platform.
            </h5>
            <button
              className="booknow-button"
              onClick={() => scrollBottom(scrollRef)}
            >
              Book Now
            </button>
          </div>
          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <div className="main-modal-content">
              <div className="modal-content">
                <h1 className="modal-title">
                  Want effective home easy home service ?
                </h1>
                <h1 className="close-modal" onClick={() => setIsOpen(false)}>
                  ×
                </h1>
              </div>
              <div className="modal-div">
                <h2 style={{ margin: "0" }}>Book Now</h2>
              </div>
              <div class="modal-grid-container">
                <div class="modal-box-1">
                  <img
                    className="img-mbox-1"
                    src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="a"
                  ></img>
                  <div className="bottom-modal">
                    <h4 style={{ margin: "10px 0 0 0", color: "#232323" }}>
                      Vehicle Repair
                    </h4>
                    <button
                      className="button-modal"
                      onClick={() => {
                        window.location.href = "/mechanics";
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
                <div class="modal-box-1">
                  <img
                    className="img-mbox-1"
                    src="https://image.wedmegood.com/resized/1000X/uploads/member/26467/1600097916_SAVE_20200709_102940_01.jpeg"
                    alt="a"
                  ></img>
                  <div className="bottom-modal">
                    <h4 style={{ margin: "10px 0 0 0", color: "#232323" }}>
                      Catering
                    </h4>
                    <button
                      className="button-modal"
                      onClick={() => {
                        window.location.href = "/catering";
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
                <div class="modal-box-1">
                  <img
                    className="img-mbox-1"
                    src="https://profiles.sulekha.com/mstore/43530795/albums/default/thumbnailfull/shutterstock-648398542.jpg"
                    alt="a"
                  ></img>
                  <div className="bottom-modal">
                    <h4 style={{ margin: "10px 0 0 0", color: "#232323" }}>
                      Household
                    </h4>
                    <button
                      className="button-modal"
                      onClick={() => {
                        window.location.href = "/household";
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
                <div class="modal-box-1">
                  <img
                    className="img-mbox-1"
                    src="https://img.freepik.com/free-vector/coming-soon-construction-illustration-design_1017-31445.jpg?w=1380&t=st=1677572390~exp=1677572990~hmac=95e6d07b15d904676261ca6e3472c61f93de40eb3db5307a7a96d848397207ad"
                    alt="a"
                  ></img>
                  <div className="bottom-modal">
                    <h4 style={{ margin: "10px 0 0 0", color: "#232323" }}>
                      Others
                    </h4>
                    <button
                      className="button-modal"
                      onClick={() => {
                        window.location.href = "/otherservices";
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <div className="dialog-div-1">
            <img src={Img1} className="dialog-img"></img>
            <div class="grid-container">
              <div class="box">
                <div className="service-1">
                  {/* <div className="service-img"> */}
                  <img src={mechimg} className="service-img"></img>
                  {/* </div> */}
                  <div className="service-1-content">
                    Vehicle Mechanics
                    <p className="para-service-1">
                      Fix your broken-down vehicle quickly with our home vehicle
                      repair service <br />
                      <br />
                      <a href="/mechanics">See More..</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-1">
                <div className="service-1">
                  {/* <div className="service-img"> */}
                  <img src={cateringimg} className="service-img"></img>
                  {/* </div> */}
                  <div className="service-1-content">
                    Catering Services
                    <p className="para-service-1">
                      Make your event unforgettable with our top-notch catering
                      service. <br />
                      <br />
                      <a href="/catering">See More..</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-2">
                <div className="service-1">
                  {/* <div className="service-img"> */}
                  <img src={holdimg} className="service-img"></img>
                  {/* </div> */}
                  <div className="service-1-content">
                    Household Services
                    <p className="para-service-1">
                      Book our professional household service for a clean and
                      tidy home with ease. <br /> <br />
                      <a href="/household">See More..</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-3">
                <div className="service-1">
                  {/* <div className="service-img"> */}
                  <img src={otherimg} className="service-img"></img>
                  {/* </div> */}
                  <div className="service-1-content">
                    Other Services
                    <p className="para-service-1">
                      Other Services to be add soon. We will keep you updated
                      when a new service is added <br />
                      <br />
                      <a href="/otherservices">See More..</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services start */}
      <div className="service-div" id="service-div" ref={scrollRef}>
        <h1 className="service-title">Our Services </h1>
        <h4 className="service-title-para">
          Employ trained experts who have honed their skills to meet your
          specific requirements.
        </h4>
        <div className="service-component">
          <Link
            component={RouterLink}
            to={`/mechanics`}
            sx={{ textTransform: "none", textDecoration: "none" }}
          >
            <div className="services-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/814/814406.png"
                alt=""
                className="services-img-1"
              />
              <h4 className="service-1-title">
                Vehicle Repair
                <p className="others-extra">**Terms and Condition Applied**</p>
              </h4>
            </div>
          </Link>
          <Link
            component={RouterLink}
            to={`/catering`}
            sx={{ textTransform: "none", textDecoration: "none" }}
          >
            <div className="services-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1060/1060277.png?w=826&t=st=1677563910~exp=1677564510~hmac=81691822ae172dffac9d4727f60a6de7fb76023627125a71acd6b243508a08f3"
                alt=""
                className="services-img-1"
              />
              <h4 className="service-1-title">
                Catering
                <p className="others-extra">**Terms and Condition Applied**</p>
              </h4>
            </div>
          </Link>
          <Link
            component={RouterLink}
            to={`/household`}
            sx={{ textTransform: "none", textDecoration: "none" }}
          >
            <div className="services-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/995/995029.png?w=826&t=st=1677563988~exp=1677564588~hmac=f1e425e0d10a9ec32c17b9378d49e7c646fa5b51376bc5e80d7855db4af6c266"
                alt=""
                className="services-img-1"
              />
              <h4 className="service-1-title">
                Household
                <p className="others-extra">**Terms and Condition Applied**</p>
              </h4>
            </div>
          </Link>
          <Link
            component={RouterLink}
            to={`/otherservices`}
            sx={{ textTransform: "none", textDecoration: "none" }}
          >
            <div className="services-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1219/1219141.png?w=826&t=st=1677564202~exp=1677564802~hmac=ad2dad0fffde2a4affd8a5ac4c016fcb6746e805d9be6608f0988c28ecbc1486"
                alt=""
                className="services-img-1"
              />
              <h4 className="service-1-title">
                Others
                <p className="others-extra">(To be added soon)</p>{" "}
              </h4>
            </div>
          </Link>
        </div>
      </div>
      {/* Why choose us start  */}
      <div className="wcu-div">
        <div className="wcu-div-1">
          <h1 className="wcu-title">Why Choose Us</h1>
          <div className="wcu-div-2">
            <div className="child-wcu-div">
              <img src={Img2} className="wcu-img"></img>
              <h3 className="title-for-wcu">Experienced and Professional </h3>
              <p className="para-for-wcu">
                Our experienced and vetted employees are skilled in their
                respective fields and trained to provide excellent customer
                service, ensuring our customers' safety and satisfaction.
              </p>
            </div>
            <div className="child-wcu-div">
              <img src={Img3} className="wcu-img"></img>
              <h3>Affordable Prices</h3>
              <p className="para-for-wcu">
                We offer competitive and transparent pricing without hidden
                fees, along with occasional discounts and promotions. Customers
                can get high-quality home services at a reasonable price.
              </p>
            </div>
            <div className="child-wcu-div">
              <img src={Img4} className="wcu-img"></img>
              <h3>Reliable and Timely </h3>
              <p className="para-for-wcu">
                We prioritize our customers time with reliable and prompt
                services. Most of our services offer same day or next day
                service appointments.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why choose us end */}
      {/* FAQ starts */}
      <div className="faq-div">
        <h1>FAQs</h1>
        <div className="faq-inner-div">
          <div className="faq-inner">
            <h3>What services does your company offer?</h3>
            <h3
              onClick={handleClick1}
              style={{ fontWeight: "900" }}
              className="plus"
            >
              {faqisShown ? "-" : "+"}
            </h3>
          </div>
          {faqisShown && (
            <div className="faq-answer">
              Our company offers a variety of home services including vehicle
              service, catering, and more. We are constantly expanding our
              services to meet the needs of our customers.
            </div>
          )}
          <div className="faq-inner">
            <h3>What areas do you serve?</h3>
            <h3
              onClick={handleClick2}
              style={{ fontWeight: "900" }}
              className="plus"
            >
              {faqisShown1 ? "-" : "+"}
            </h3>
          </div>
          {faqisShown1 && (
            <div className="faq-answer">
              We are currently serving the city of Silchar and its surrounding
              areas. If you're unsure if we serve your area, please reach out to
              us and we will let you know.
            </div>
          )}
          <div className="faq-inner">
            <h3>How can I book a service?</h3>
            <h3
              onClick={handleClick3}
              style={{ fontWeight: "900" }}
              className="plus"
            >
              {faqisShown2 ? "-" : "+"}
            </h3>
          </div>
          {faqisShown2 && (
            <div className="faq-answer">
              Booking a service with us is easy! You can either call our
              customer service hotline or book directly on our website. Just
              select the service you need, choose a date and time that works for
              you, and we'll take care of the rest.
            </div>
          )}
          <div className="faq-inner">
            <h3>What is your cancellation policy?</h3>
            <h3
              onClick={handleClick4}
              style={{ fontWeight: "900" }}
              className="plus"
            >
              {faqisShown3 ? "-" : "+"}
            </h3>
          </div>
          {faqisShown3 && (
            <div className="faq-answer">
              We understand that plans can change. If you need to cancel a
              service, please let us know at least 24 hours in advance to avoid
              any cancellation fees. If you cancel within 24 hours of your
              scheduled service time, a cancellation fee may apply.
            </div>
          )}
          <div className="faq-inner">
            <h3>How can I provide feedback about my service?</h3>
            <h3
              onClick={handleClick5}
              style={{ fontWeight: "900" }}
              className="plus"
            >
              {faqisShown4 ? "-" : "+"}
            </h3>
          </div>
          {faqisShown4 && (
            <div className="faq-answer">
              We welcome all feedback from our customers! You can either leave a
              review on our website or social media pages, or contact our
              customer service team directly. We are always looking for ways to
              improve our services and appreciate your feedback.
            </div>
          )}
          <div className="faq-inner">
            <h3>Will there be new services added in the future?</h3>
            <h3
              onClick={handleClick6}
              style={{ fontWeight: "900" }}
              className="plus"
            >
              {faqisShown5 ? "-" : "+"}
            </h3>
          </div>
          {faqisShown5 && (
            <div className="faq-answer">
              Yes, we are always looking to expand our offerings to better serve
              our customers. Keep an eye on our website and social media pages
              for announcements about new services!
            </div>
          )}
        </div>
      </div>
      {/* FAQ ends */}
      {/*hire workers starts*/}
      <div className="hire-workers-div">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3%",
          }}
        >
          <div className="hw-div-1">
            <div style={{ paddingRight: "10%" }}>
              <h2 className="hw-title-1">Register as a Worker</h2>
              <p style={{ color: "#292933" }}>
                If you're interested in working with us, please complete this
                form and we'll be in touch.
              </p>
              <button
                className="hw-button"
                onClick={() => {
                  window.open(
                    "https://forms.gle/bqrF2abAmyVbWD3Z6",
                    "_blank",
                    "noreferrer"
                  );
                }}
              >
                Share your details
              </button>
            </div>
            <div>
              <img src={Img5} className="hw-img-1" alt="gg"></img>
            </div>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/business-concept-design-drawing-handsome-businessman-casual-clothes-presenting-something-young-male-manager-showing-something-presenting-project-vector-illustration-draw-flat-cartoon-style_620206-340.jpg?w=1380"
            alt=""
            style={{ height: "300px" }}
            className="for-mobile-remove"
          />
        </div>
        <div className="hw-box-2">
          <img
            src="https://img.freepik.com/free-vector/people-holding-banners_24908-57940.jpg?w=826&t=st=1678780396~exp=1678780996~hmac=c06b4cd9d04563d8de6e60b800b7ad62de392c2eaec6d409f4b3ad2d7b8252c8"
            alt=""
            style={{ height: "350px" }}
            className="for-mobile-remove"
          />
          <div className="hw-div-2">
            <div style={{ paddingRight: "10%" }}>
              <h2 className="hw-title-2">Refer a worker</h2>
              <p style={{ color: "#292933" }}>
                Want to help others find better employment opportunities? Sign
                them up as job seekers and earn rewards worth Rs. 100.
              </p>
              <button
                className="hw-button-1"
                onClick={() => {
                  window.open(
                    "https://forms.gle/dpVKAYdQRZ9d1nDe7",
                    "_blank",
                    "noreferrer"
                  );
                }}
              >
                Share your details
              </button>
            </div>
            <div>
              <img src={Img6} className="hw-img-1" alt="gg"></img>
            </div>
          </div>
        </div>
      </div>
      {/* hire works ends */}
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
            </li>{" "}
          </ul>
        </div>
      </div>
      <hr className="hori-line" />
      <div className="final-footer-div">
        <div className="footer-email" style={{ flex: "1" }}>
          <h5>Contact No. : 8471987717</h5>
        </div>
        <div style={{ flex: "1" }}>
          <h5>Email : supportGharSeva@gmail.com</h5>
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

export default Home;
