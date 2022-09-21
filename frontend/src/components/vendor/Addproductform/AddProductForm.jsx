import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddProductForm.css'
import { SERVER_URL } from '../../../constants/api'
import { toast } from 'react-toastify'
import axios from 'axios'

function AddProductForm() {

    const [data,setData]=useState({
        name:'',
        model:'',
        rent:'',
        currentKm:'',
        regNo:'',
        fuel:'',
        body:'',
        transmission:'',
        
    
        
    })

    const [images,setImages]=useState([])

    const handleChange=(prop)=>(e)=>{
        setData({ ...data, [prop]: e.target.value });
        
    }

    const handleImage=(e)=>{
        e.preventDefault()
        setImages(e.target.files[0])
       
    } 

    const navigate=useNavigate

    const onSubmit=(e)=>{
      e.preventDefault()

      const dataToBackend=new FormData()
      console.log(images)
      dataToBackend.append('images',images)
      dataToBackend.append('datas',JSON.stringify(data)) 
     
      const config={
        headers:{
            'Content-Type':'mulipart/form-data'
        }
    }
      
       
       axios.post(`${SERVER_URL}/vendor/api/add-car`,dataToBackend,config).then((response)=>{
        toast.success('Car added succesfully')
       
       }).catch((error)=>{
        toast.error('Something went wrong')
       })
    }
    
  return (
    <div className='form-add-car'>
     <div className='container bg-light'>
     <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Car Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg : Mercedez Benz" value={data.name} onChange={handleChange('name')}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Model</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg: C -class" value={data.model} onChange={handleChange('model')}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Rent Amount</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg : 1000" value={data.rent} onChange={handleChange('rent')}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Current Kilometer</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg : 45500" value={data.currentKm} onChange={handleChange('currentKm')}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Registration Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="eg : KL-11-1001" value={data.regNo} onChange={handleChange('regNo')}/>
  </div>
  <div className="form-group form-check d-flex flex-direction-row justifiy-content-start">
   <div><input type="radio" name="fuel" id="" value='petrol' onClick={handleChange('fuel')} /><span className="ms-2">Petrol</span></div>
   <div className="ms-3"><input type="radio" name="fuel" id="" value='diesel' onClick={handleChange('fuel')}/><span className="ms-2">Diesel</span></div>
  </div>
  <div className="form-group form-check d-flex flex-direction-row justifiy-content-start">
   <div><input type="radio" name="body" id="" value='sedan' onClick={handleChange('body')} /><span className="ms-2">Sedan</span></div>
   <div className="ms-3"><input type="radio" name="body" id="" value='hatchback' onClick={handleChange('body')} /><span className="ms-2">Hatchback</span></div>
   <div className="ms-3"><input type="radio" name="body" id="" value='suv' onClick={handleChange('body')} /><span className="ms-2">Suv</span></div>
  </div>
  <div className="form-group form-check d-flex flex-direction-row justifiy-content-start">
   <div><input type="radio" name="transmission" id=""  value='auto' onClick={handleChange('transmission')}/><span className="ms-2">Automatic</span></div>
   <div className="ms-3"><input type="radio" name="transmission" id="" value='manual' onClick={handleChange('transmission')} /><span className="ms-2">Manual</span></div>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Images</label>
    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" multiple name='images' onChange={handleImage}/>
    
  </div>
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>
     </div>
    </div>
  )
}

export default AddProductForm