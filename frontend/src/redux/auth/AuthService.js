 import axios from 'axios'
 import { SERVER_URL } from '../../constants/api'

 const API_URL='/vendor/api/login'

 //Login vendor
 const login = async(vendorData)=>{
    const response = await axios.post(`${SERVER_URL}${API_URL}`,vendorData)

    if(response.data){
        localStorage.setItem('vendor',JSON.stringify(response.data))

        
    }
    return response.data
 }


const authService={
    login
}

export default authService