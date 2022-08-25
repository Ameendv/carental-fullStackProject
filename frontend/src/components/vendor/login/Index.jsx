import React ,{useState}from 'react'
import './style.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import KeyIcon from '@mui/icons-material/Key';

function Index() {

  const [values, setValues] = useState({
  
    password: '',
    username:'',
   
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  console.log(values)

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <React.Fragment>
      <CssBaseline />

      <Box
        sx={{
          bgcolor: "#00092C",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          padding:'100px'
        }}
      >
        <Grid item rowSpacing={2}
          sx={{
            width: 400,
            height: 300,
            display: "flex",
          alignItems:'center',
          flexDirection:"column",
            backgroundColor: "#fff",
            padding:'40px',
            border:'1px solid',
            borderColor:'white'
            
          }}
        >
          <Grid sx={{marginTop:'10px'}}>
          <TextField
          sx={{}}
        id="input-with-icon-textfield"
        label="Username"
        
        onChange={handleChange('username')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
          </Grid>
          <Grid sx={{marginTop:'20px'}}>
          <InputLabel htmlFor="standard-adornment-password" sx={{fontSize:'12px'}}>Password</InputLabel>
          <Input
          
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            sx={{width:'210px'}}
            startAdornment= {
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          </Grid>
          <Grid  sx={{marginTop:'20px'}}>
          <Button variant="contained" sx={{backgroundColor:"#D61C4E"}}>Login</Button>
          </Grid>
          
      
          </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Index    
