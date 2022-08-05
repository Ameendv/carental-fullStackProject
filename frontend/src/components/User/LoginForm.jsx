import React, { useState } from "react";

import axios from "axios";
import { SERVER_URL } from "../../constants/api";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import FormControl from "@mui/material/FormControl";
import { loginSchema } from "../../validations/loginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Collapse from "@mui/material/Collapse";
import {useNavigate} from 'react-router-dom'


import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";

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


function LoginForm() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(loginSchema),
      });
    
      const onSubmit = (data) => {
        console.log('hai')
        validateUser(data);
      };
    console.log(formState)
    
    
      const [values, setValues] = useState({
        
        password: "",
        
        email: "",
       
        showPassword: false,
        
      });
    
      const [message, setMessage] = useState("");
    
      const navigate=useNavigate()
    
      const validateUser = async (data) => {
        const isValid = await loginSchema.isValid(values);
        if (isValid) {
          await axios
            .post(`${SERVER_URL}/api/user-login`, data)
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
                navigate('/')
              }
            })
            .catch((err) => {
              if (err.response.status === 409) {
                setMessage("Already registered");
                setOpen(true);
              }
            });
        }
      };
    
      const [open, setOpen] = useState(false);
    
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
    
     
    
      gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            process.env.REACT_APP_GOOGLE_CLIENT_ID,
          plugin_name: "chat",
        });
      });
    
      const handleFailure = (result) => {
        console.log(result);
      };
    
    const handleLogin=async(googleData)=>{
    
      
    const data={
      token:googleData.tokenId
    }
    
    const res=await axios.post(`${SERVER_URL}/user-google-signin`,data)
    console.log(res)
    
    }

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
            paddingTop:'8rem',
            paddingBottom:'8rem'
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
              {/* <Box
                sx={{
                  backgroundImage: `url(${Image})`,
                  width: "21.5rem",
                  margin: " 0rem -9rem 0rem -5rem",
                  backgroundSize: "cover",
                  height: "100%",
                  borderRadius: " 13px 0 1px 13px",
                }}
              >
                <div></div>
              </Box>
              <Divider orientation="vertical" sx={{}} flexItem /> */}

              <Box
                sx={{
                  "& > :not(style)": { m: 1, padding: "4px" },
                  backgroundColor: "#fff",
                  border: "0.5px solid #0000001f",
                  borderRadius: "10px",
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
                      Login
                    </Button>
                  </Box>
                </form>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                 
                 <Button size="small" onClick={()=>{navigate('/signup')}}>Forgot password</Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                 
                 <Box >New here?</Box><Button size="small" onClick={()=>{navigate('/signup')}}>Register</Button>
                </Box>
                  
                <Divider>OR</Divider>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                 
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
  )
}

export default LoginForm
