import React,{useState} from 'react'
import io from 'socket.io-client'
import {SERVER_URL} from '../../constants/api'




// const socket =io.connect(`${SERVER_URL}`)

function ChatWindow() {

//   const [message,setMessage]=useState([])
//   const [disp,setDisp]=useState([])

 


//   const check=()=>{
    
//     socket.emit('send_message',message)
    
   
//   }

 
 
//   return (
//     <div>
//       <p>{disp}</p>
//       <input type='text' value={message} onChange={(e)=>{setMessage(e.target.value)}}  /> 
//       <input type="button" value="Send" onClick={check}/>
//     </div>
//   )
}

export default ChatWindow
