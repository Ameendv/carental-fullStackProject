import React,{useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Register() {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2}=formData 

    const onChange=(e)=>{
      e.preventDefault()

      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
      
    }

    console.log(formData)

    const onSubmit=()=>{
      
    }

  return (
    <>
      <section className="header">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form action="" onSubmit={onSubmit}>
        <Box sx={{ flexGrow: 1 ,}}>
      <Grid  container spacing={2}  sx={{display:'flex',justifyContent:'center'}}>
        <Grid item xs={8} md={4} rowSpacing={2}>
        <div className="form-group">
        <input type="text" className='form-control' name="name" id="name" value={name} onChange={onChange} placeholder='Enter your name'/>
        </div>
        <div className="form-group">
        <input type="email" className='form-control' name="email" id="email" value={email} onChange={onChange} placeholder='Enter your email'/>
        </div>
        <div className="form-group">
        <input type="text" className='form-control' name="password" id="password" value={password} onChange={onChange} placeholder='Enter your Password'/>
        </div>
        <div className="form-group">
        <input type="text" className='form-control' name="password2" id="password2" value={password2} onChange={onChange} placeholder='Confirm password'/>
        </div>
        <div className="form-group">
        <input type="button" value="Submit" className='btn btn-dark' />
        </div>
        </Grid>
      </Grid>
    </Box>
        </form>
       
      </section>
    </>
  );
}

export default Register
