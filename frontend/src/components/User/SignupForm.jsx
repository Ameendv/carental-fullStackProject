import React, { useState } from "react";

import axios from "axios";
import { SERVER_URL } from "../../constants/api";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import FormControl from "@mui/material/FormControl";
import { signupSchema } from "../../validations/signupValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import OtpInput from "./OtpModal";


import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HttpsIcon from "@mui/icons-material/Https";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

import Image from "../../assets/Image.jpeg";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

function SignupForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    validateUser(data);
  };

  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validateUser = async (data) => {
    const isValid = await signupSchema.isValid(values)
    if (isValid) {
      console.log(data)
      await axios
        .post(`${SERVER_URL}/api/user-signup`, data)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setEmail(res.data.email);
            setNumber(res.data.number);
            setOpenModal(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            console.log(err.response.data)
            setMessage(err.response.data);
            setOpen(true);
          }
        });
    }
  };

  const [open, setOpen] = useState(false);

  //modal for otp
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpen(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: "chat",
    });
  });

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    try {
      const data = {
        token: googleData.tokenId,
      };

      const res = await axios.post(
        `${SERVER_URL}/api/user-google-signin`,
        data
      );
      console.log(res);
      if (res.status === 200) {
        navigate("/");
      } else {
        setMessage("Try again later");
        setOpen(true);
      }
    } catch (error) {
      setMessage("Try again later");
      setOpen(true);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "35px",
            paddingBottom: "35px",
          }}
        >
          <Container fixed>
            <Box
              sx={{
                backgroundImage: `url(${Image})`,

                borderRadius: "10px",
                bgcolor: "#fff",
                height: "100%",
                width: "75%",
                margin: "auto",
                marginTop: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              {openModal && (
                <OtpInput
                  onAction={handleClose}
                  email={email}
                  number={number}
                />
              )}
              <Box
                sx={{
                  "& > :not(style)": { m: 1, padding: "4px" },
                  backgroundColor: "#fff",
                  border: "0.5px solid #0000001f",
                  borderRadius: "5px",
                }}
              >
                <Collapse in={open}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    {message}
                  </Alert>
                </Collapse>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx1"
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      value={values.name}
                      {...register("name")}
                      onChange={handleChange("name")}
                      name="name"
                      error={Boolean(formState.errors.name)}
                      helperText={
                        formState.errors.name &&
                        formState.errors.name["message"]
                      }
                    />
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <PhoneIphoneIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5, mt: 3 }}
                    />
                    <TextField
                      id="input-with-sx2"
                      label="Mobile Number"
                      variant="outlined"
                      size="small"
                      value={values.number}
                      {...register("number")}
                      onChange={handleChange("number")}
                      name="number"
                      error={Boolean(formState.errors.number)}
                      helperText={
                        formState.errors.number &&
                        formState.errors.number["message"]
                      }
                    />
                    {/* <MuiPhoneNumber id="input-with-sx2"
                      label="Mobile Number"
                      variant="outlined"
                      size="small"
                      value={values.number}
                      {...register("number")}
                      onChange={handleChange("number")}
                      name="number"
                      error={Boolean(formState.errors.number)}
                      helperText={
                        formState.errors.number &&
                        formState.errors.number["message"]} defaultCountry={'us'} onlyCountries={['in','us']} />  */}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <AlternateEmailIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5, mt: 3 }}
                    />
                    <TextField
                      id="input-with-sx3"
                      label="Email"
                      variant="outlined"
                      size="small"
                      value={values.email}
                      {...register("email")}
                      onChange={handleChange("email")}
                      name="email"
                      error={Boolean(formState.errors.email)}
                      helperText={
                        formState.errors.email &&
                        formState.errors.email["message"]
                      }
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <LockOpenIcon
                      sx={{ color: "action.active", mr: 0, my: 1, mt: 3 }}
                    />
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        {...register("password")}
                        onChange={handleChange("password")}
                        name="password"
                        error={Boolean(formState.errors.password)}
                        helpertext={
                          formState.errors.password &&
                          formState.errors.password["message"]
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
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
                        label="Password"
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <HttpsIcon sx={{ color: "action.active", mr: 0, my: 1 }} />
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-confirmPassword"
                        type={
                          values.showconfirmPassword
                            ? "text"
                            : "confirmPassword"
                        }
                        value={values.confirmPassword}
                        {...register("confirmPassword")}
                        onChange={handleChange("confirmPassword")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle confirmPassword visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                              edge="end"
                            >
                              {values.showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        error={Boolean(formState.errors.confirmPassword)}
                        helpertext={
                          formState.errors.confirmPassword &&
                          formState.errors.confirmPassword["message"]
                        }
                        label="Confirm Password"
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      sx={{
                        width: "8rem",
                        backgroundColor: "#D61C4E",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Signup
                    </Button>
                  </Box>
                </form>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {/* <Button
                    sx={{ backgroundColor: "#EA4335" }}
                    variant="contained"
                    endIcon={<GoogleIcon />}
                    
                  >
                    Signin with google
                  </Button> */}
                  <Box>Already registered?</Box>
                  <Button
                    size="small"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Button>
                </Box>

                <Divider>OR</Divider>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {/* <Button
                    sx={{ backgroundColor: "#EA4335" }}
                    variant="contained"
                    endIcon={<GoogleIcon />}
                    
                  >
                    Signin with google
                  </Button> */}
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttontext="Signup with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                  ></GoogleLogin>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default SignupForm;
