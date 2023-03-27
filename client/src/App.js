import { useState, useEffect, createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Routes from "./Routes";
import "./styles/app.css";

export const UserContext = createContext({});

function App() {
  const [loading, setLoading] = useState(true);
  const [userSession, setUserSession] = useState(true);

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/isAuth");
        if (!res.ok) return setLoading(false);

        setUserSession(await res.json());
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("There was an error fetch auth", error);
        return;
      }
    };
    fetchUserAuth();
  }, []);

  return (
    <UserContext.Provider value={userSession}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <>
            <div class="spinner-box">
              <div class="three-quarter-spinner"></div>
            </div>
          </>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
