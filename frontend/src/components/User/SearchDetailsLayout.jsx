import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import './SearchDetailsLayout.css'
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function SearchDetailsLayout(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const LocationsCard = {
    backgroundColor: "#CACACA",
    borderRadius: "5px",
    padding: "5px",
    height: "120px",
  };

  const TimeCard = {
    backgroundColor: "#CACACA",
    borderRadius: "5px",
    padding: "5px",
    height: "120px",
  };

  const locationHead={
    color:'#888888',
    fontWeight:'bold'
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        flexGrow: 1,
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <Grid container spacing={1}>
        <Stack
          item
          spacing={3}
          xs={13}
          sm={3}
          md={3}
          sx={{
            
            backgroundColor: "white",
            padding: "15px",
            marginLeft: "5px",
            borderRadius: "5px",
            border: "solid 0.5px #c9c9c9",
          }}
        >
          <Item>FIND CARS NEAR YOUR LOCATION</Item>
          <Box sx={LocationsCard}>
            <Box
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "no-wrap",
                padding: "15px",
              }}
            >
              <Box>
                <Stack spacing={1}>
                  <Box sx={locationHead}>Pick up</Box>
                  <Box className="detailsFont">Calicut</Box>
                  <Box className="detailsFont">South beach</Box>
                </Stack>
              </Box>
              <Divider orientation="vertical" sx={{backgroundColor:'black',}} light={true} flexItem />
              <Box>
                <Stack spacing={1}>
                  <Box sx={locationHead}>Dropoff</Box>
                  <Box className="detailsFont">Ernakulam</Box>
                  <Box className="detailsFont">Marine drive</Box>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box sx={TimeCard}>
            <Box
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "no-wrap",
                padding: "15px",
              }}
            >
              <Box>
                <Stack spacing={1}>
                  <Box sx={locationHead}>Pickup Time</Box>
                  <Stack direction="row" spacing={1}>
                    <Box sx={{fontWeight:'bold',fontSize:'30px'}}>26</Box>
                   
                    <Box className="detailsFont">July,22<br/>10.00 Am</Box>
                   
                  </Stack>
                </Stack>
              </Box>
              <Divider orientation="vertical" sx={{backgroundColor:'black',}} light={true} flexItem />
              <Box>
                <Stack spacing={1}>
                  <Box sx={locationHead}>Dropoff Time</Box>
                  <Stack direction="row" spacing={1}>
                    <Box sx={{fontWeight:'bold',fontSize:'30px'}}>29</Box>
                   
                    <Box className="detailsFont">July,22<br/>10.00 Am</Box>
                   
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box sx={{height:'80px',backgroundColor:'#F87474',borderRadius:'5px',display:'flex',alignContent:'center',padding:'15px'}}>
            
              <AccessTimeIcon sx={{width:'45px',height:'45px'}}/>
              <Divider orientation="vertical" sx={{backgroundColor:'black',margin:'10px'}}flexItem />
            
            <Box SX={{marginLeft:'10px'}}>
              <h6 style={{color:'white',fontSize:'15px'}}>
              Total Travelling Duration
              </h6>
              <p style={{color:'black',fontSize:'13px',fontWeight:'bold'}}>
              3 Days and 4 Hours
              </p>
            </Box>
            
          </Box>
        </Stack>
        <Grid item xs={12} sm={9} md={9}>
          {props.children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchDetailsLayout;
