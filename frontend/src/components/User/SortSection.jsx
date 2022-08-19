import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
function SortSection() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'start',
        color: theme.palette.text.secondary,
      }));

      const sortLowToHigh=()=>{
        alert('clicked')
      }

      const sortHighToLow=()=>{
        alert ('high to low')
      }
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:'#D9D9D9',padding:"10px 10px 10px 10px" }}>
    <Grid container spacing={2}>
      <Grid item xs={8} sm={2} md={0.8}>
      <Chip label="Sort by : " size='medium' variant="outlined" sx={{color:'#5e5e5e'}} />
      </Grid>
      <Grid item xs={8} sm={4}  md={1.5}>
        
        <Chip label="Price : Low to High" variant="outlined" sx={{backgroundColor:'white',color:'#5e5e5e'}} onClick={sortLowToHigh}/>
      </Grid>
      <Grid item xs={8} sm={4}  md={1.5}>
      <Chip  label="Price : High to Low" variant="outlined" sx={{backgroundColor:'white',color:'#5e5e5e'}} onClick={sortHighToLow}/>
      </Grid>
     
    </Grid>
  </Box>
  );
}

export default SortSection;
