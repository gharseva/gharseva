import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import validator from "validator";
import { regexPassword } from "../utils";
import GoogleIcon from "@mui/icons-material/Google";

import {
  Paper,
  Container,
  Link,
  Stack,
  Button,
  Box,
  Divider,
  Avatar,
  Typography,
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import {
  Face as FaceIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
// import theme from "../styles/theme";
import "../styles/Login.css";

function Login({}) {
  const [values, setValues] = useState({
    email: "",
    phoneno: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({
    email: false,
    phoneno: false,
    password: false,
    fetchError: false,
    fetchErrorMsg: "",
  });

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value;
    // let isCorrectValue =
    //   fieldName === "phoneno" ? validator.isUppercase(currValue) : "";

    // isCorrectValue
    //   ? setErrors({ ...errors, [fieldName]: false })
    //   : setErrors({ ...errors, [fieldName]: true });

    setValues({ ...values, [fieldName]: event.target.value });
  };

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.phoneno,
          phoneno: values.phoneno,
          password: values.password,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        return setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: error.msg,
        });
      }

      const data = await res.json();
      console.log({ data });
      window.location.href = "/";

      // this is just a visual feedback for user for this demo
      // this will not be an error, rather we will show a different UI or redirect user to dashboard
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      });
      setValues({
        email: "",
        phoneno: "",
        password: "",
        showPassword: false,
      });
      return;
    } catch (error) {
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg:
          "There was a problem with our server, please try again later",
      });
    }
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
        // sx={{
        //   width: "100%",
        //   position: "fixed",
        //   top: "50%",
        //   left: "50%",
        //   webkitTransform: "translate(-50%, -50%)",
        //   transform: "translate(-50%, -50%)",
        //   "@media screen and (max-width: 600px)": {
        //     position: "fixed",
        //     top: "50%",
        //     left: "50%",
        //     webkitTransform: "translate(-50%, -50%)",
        //     transform: "translate(-50%, -50%)",
        //   },
        // }}
        >
          <Paper elevation={3} sx={{ display: "flex", flexDirection: "row" }}>
            <div className="login-cover" style={{}}></div>
            <div style={{ flex: "1 1 10%", width: "100%" }}>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "30px",
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#007DFE",
                    boxShadow: "0px 0px 8px rgba(131,153,167,0.99)",
                    "@media screen and (max-width: 600px)": {
                      width: 55,
                      height: 55,
                    },
                  }}
                >
                  <FaceIcon
                    sx={{
                      fontSize: 70,
                      "@media screen and (max-width: 600px)": {
                        fontSize: 50,
                      },
                    }}
                  />
                </Avatar>
                <h2 style={{ fontFamily: "poppins" }}>Login</h2>
              </Container>
              <Stack
                component="form"
                onSubmit={handleSubmit}
                noValidate
                spacing={3}
                sx={{
                  bgcolor: "#f5f5f6",
                  padding: "60px",
                  borderBottomRightRadius: "10px",
                  width: "100%",
                  "@media screen and (max-width: 600px)": {
                    padding: "30px",
                    borderRadius: "10px",
                  },
                }}
              >
                <TextField
                  sx={{ background: "white" }}
                  variant="filled"
                  type="text"
                  label="Email / Phone Number"
                  value={values.phoneno}
                  onChange={handleChange("phoneno")}
                  // error={errors.email}
                  helperText={
                    errors.email && "Please insert a valid email address"
                  }
                  InputProps={{
                    style: {
                      fontFamily: "Poppins",
                      backgroundColor: "#F5F5F6",
                    },
                  }}
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                />
                <FormControl variant="filled" sx={{ background: "#FFFFFF" }}>
                  <InputLabel
                    htmlFor="password-field"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Password
                  </InputLabel>
                  <FilledInput
                    sx={{ backgroundColor: "#F5F5F6" }}
                    id="password-field"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    error={errors.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={errors.email || errors.password}
                    sx={{
                      width: "100%",
                      background: "#007DFE",
                      height: "50px",
                      textTransform: "none",
                      fontFamily: "poppins",
                      fontWeight: "600",
                    }}
                  >
                    Log in
                  </Button>
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h5 className="or-login">OR</h5>
                </div>
                {/* google login */}
                <div className="google-login">
                  <form
                    action="https://www.gharseva.in/api/auth/google"
                    style={{ width: "100%" }}
                  >
                    <button type="submit" className="google-button">
                      <span className="google-button__icon">
                        <svg
                          viewBox="0 0 366 372"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                            id="Shape"
                            fill="#EA4335"
                          />
                          <path
                            d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                            id="Shape"
                            fill="#FBBC05"
                          />
                          <path
                            d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                            id="Shape"
                            fill="#4285F4"
                          />
                          <path
                            d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                            fill="#34A853"
                          />
                        </svg>
                      </span>
                      <span className="google-button__text">
                        Sign in with Google
                      </span>
                    </button>
                  </form>
                </div>

                {/* gg */}
                {errors.fetchError && (
                  <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
                )}
                <Divider />
                <Typography
                  paragraph
                  align="center"
                  sx={{ fontFamily: "poppins" }}
                >
                  Don't have an account yet?{" "}
                  <Link
                    component={RouterLink}
                    to="/signup"
                    sx={{ color: "#007DFE" }}
                  >
                    Sign up here
                  </Link>
                </Typography>
              </Stack>
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default Login;
