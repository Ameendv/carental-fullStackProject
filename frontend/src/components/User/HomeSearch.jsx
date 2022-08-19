import React,{useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "../../assets/Image.jpeg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';









const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

  const [pickupLocation, setPickupLocation] = React.useState('');
  const [dropLocation, setDropLocation] = React.useState('');
  const [pickupValue, setPickupValue] = React.useState(new Date().setMinutes(0));

  const [dropValue, setDropValue] = React.useState(new Date());

  console.log(pickupLocation,dropLocation,pickupValue,dropValue)
 


  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDropLocationChange = (event) => {
    setDropLocation(event.target.value);
  };


  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        height: "37rem",
      }}
      xs={12}
      md={12}
    >
      <Grid
      
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Grid xs={10} md={10} sx={{ marginTop: "17rem",display:'flex',flexDirection: "row", justifyContent: "space-evenly"}}>
        <form action="" >
        <FormControl variant="filled" sx={{  minWidth: 200,backgroundColor:'white', opacity: 0.7,borderRadius:'5px 0px 0px 5px' }}>
        <InputLabel id="demo-simple-select-filled-label">Pickup point</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={pickupLocation}
          onChange={handlePickupLocationChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Calicut'>Calicut</MenuItem>
          <MenuItem value={20}>Cochin</MenuItem>
          <MenuItem value={30}>Malappuram</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl variant="filled" sx={{  minWidth: 200,backgroundColor:'white', opacity: 0.7,}}>
        <InputLabel id="demo-simple-select-filled-label">Drop point</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={dropLocation}
          onChange={handleDropLocationChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Calicut</MenuItem>
          <MenuItem value={20}>Cochin</MenuItem>
          <MenuItem value={30}>Malappuram</MenuItem>
        </Select>
        
      </FormControl>
        
      <FormControl variant="filled" sx={{  minWidth: 200,backgroundColor:'white', opacity: 0.7,}}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
     
        
      <DesktopDateTimePicker
          label="Pickup date"
          value={pickupValue}
          onChange={(newValue) => {
            setPickupValue(newValue);
          }}
          disablePast={true}
         
         
          views={['year','month','day','hours',]}
          renderInput={(params) => <TextField {...params} />}
        />
     
     
    </LocalizationProvider>
    </FormControl>
    <FormControl variant="filled" sx={{  minWidth: 200,backgroundColor:'white', opacity: 0.7,}}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
     
        
      <DesktopDateTimePicker
          label="Drop date"
          value={dropValue}
          onChange={(newValue) => {
            setDropValue(newValue);
          }}
          views={['year','month','day','hours',]}
          minDate={pickupValue}
          renderInput={(params) => <TextField {...params} />}
        />
     
     
    </LocalizationProvider>
    </FormControl>


        
        <Button xs={11} variant="contained"  sx={{backgroundColor:'#D61C4E',borderRadius:'0px 5px 5px 0px',height:'3.49rem' ,fontWeight:"bold"}}>Search</Button>
        </form>
        </Grid>
      </Grid>
    </Box>
  );
}
