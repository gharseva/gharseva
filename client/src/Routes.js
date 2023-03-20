import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/home";

import { UserContext } from "./App";
import Mechanics from "./components/services/mechanics";
import Catering from "./components/services/cartering";
import Household from "./components/services/household";
import Others from "./components/services/others";
import Carbook from "./components/booking/mechanicsbook/carbook";
import Bikebook from "./components/booking/mechanicsbook/bikebook";
import Housemaidsbook from "./components/booking/housemaidbook";
import PlumberBook from "./components/booking/plumberbook";
import ElectricianBook from "./components/booking/electricianbook";
import Carteringbook from "./components/booking/carteringbook";
import Othersbook from "./components/booking/mechanicsbook/othersbook";
import Termsncondition from "./components/info/termsncondition";
import AboutUs from "./components/info/aboutus";
import ContactUs from "./components/info/contactus";

function RoutesComp() {
  const userContext = useContext(UserContext);
  return (
    <>
      <Routes>
        {userContext.email && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/mechanics" element={<Mechanics />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/household" element={<Household />} />
            <Route path="/otherservices" element={<Others />} />
            <Route path="/mechanics/carbooking" element={<Carbook />} />
            <Route path="/mechanics/bikebooking" element={<Bikebook />} />
            <Route path="/mechanics/othersbooking" element={<Othersbook />} />
            <Route
              path="/household/housemaidbooking"
              element={<Housemaidsbook />}
            />
            <Route path="/household/plumberbooking" element={<PlumberBook />} />
            <Route
              path="/household/electricianbooking"
              element={<ElectricianBook />}
            />
            <Route
              path="/catering/cateringbooking"
              element={<Carteringbook />}
            />
            <Route path="/termsandconditions" element={<Termsncondition />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </>
        )}
        {!userContext.email && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default RoutesComp;
