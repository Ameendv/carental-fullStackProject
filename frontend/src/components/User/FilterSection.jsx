import React from 'react'

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import SedanIcon from '../../assets/sedan icon.svg'
import ManualIcon from '../../assets/gear-stick-manual.svg'
import AutoIcon from '../../assets/automobile.svg'
import Chip from '@mui/material/Chip';
import './Filtersection.css'



// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const iconGridStyle={
  display:'flex',justifyContent:'around',alignItems:'center'
  
}


const iconImageStyle={
  width:'80px',
  height:'50px',
  color:'yellow'
  
}


function FilterSection() {
  return (
    <Box sx={{ width: '100%',marginTop:'5px' ,backgroundColor:'#c5c5c54f',padding:'5px' }}>
    <Grid  container rowSpacing={1} columnSpacing={{ xs:1, sm:2, md:3 }} sx={iconGridStyle}>
    <Chip md={1} xs={2} sm={3} label="Type : " size='medium' variant="outlined" sx={{color:'#5e5e5e',marginTop:'5px',marginLeft:'20px'}} />
      <Grid item xs={3} md={2} sm={3} sx={iconGridStyle} >
      
        <Grid className='iconAndTitle' onClick={()=>{alert('filter applied')}}><img src={SedanIcon} alt="" style={iconImageStyle}/><p className='font'>Sedan</p></Grid>
      </Grid>
      <Grid item xs={3} md={2} sm={3} sx={iconGridStyle}>
      <Grid className='iconAndTitle' onClick={()=>{alert('filter applied')}}><img src={SedanIcon} alt="" style={iconImageStyle}/><p className='font'>Hatchback</p></Grid>
      </Grid>
      <Grid item xs={3} md={2} sm={3} sx={iconGridStyle}>
      <Grid className='iconAndTitle' onClick={()=>{alert('filter applied')}}><img src={SedanIcon} alt="" style={iconImageStyle}/><p className='font'>SUV</p></Grid>
      </Grid>
      <Chip md={1} xs={2} sm={3} label="Transmission : " size='medium' variant="outlined" sx={{color:'#5e5e5e',marginTop:'5px'}} />
      <Grid item xs={4} md={2} sm={4} sx={iconGridStyle}>
     <Grid className='iconAndTitle' onClick={()=>{alert('filter applied')}}> <img src={AutoIcon} alt="" style={iconImageStyle}/><p className='font' >Automatic</p></Grid>
      </Grid>
      <Grid item xs={4} md={2} sm={4} sx={iconGridStyle}>
    <Grid className='iconAndTitle' onClick={()=>{alert('filter applied')}}><img src={ManualIcon} alt="" style={iconImageStyle}/><p className='font'>Manual</p></Grid>
      
      </Grid>
    </Grid>
  </Box>
  )
}

export default FilterSection
