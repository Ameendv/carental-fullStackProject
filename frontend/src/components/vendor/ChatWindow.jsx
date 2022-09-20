// import React from 'react'

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import Switch from '@mui/material/Switch';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';

// const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
//   position: 'absolute',
//   '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
//   '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
//     top: theme.spacing(2),
//     left: theme.spacing(2),
//   },
// }));

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// function ChatWindow() {
    
//     const [hidden, setHidden] = React.useState(false);
  
   
  
//     const handleHiddenChange = (event) => {
//       setHidden(event.target.checked);
//     };
  
//     return (
//       <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        
       
//         <Box sx={{ position: 'relative', mt: 3, }}>
//           <StyledSpeedDial
//             ariaLabel="SpeedDial playground example"
//             hidden={hidden}
//             icon={<SpeedDialIcon />}
//             direction='up'
//           >
//             {actions.map((action) => (
//               <SpeedDialAction
//                 key={action.name}
//                 icon={action.icon}
//                 tooltipTitle={action.name}
//               />
//             ))}
//           </StyledSpeedDial>
//         </Box>
//       </Box>
//     );
// }

// export default ChatWindow

import React,{useState,useEffect} from 'react'
import { toast, Toast } from "react-toastify";
import io from 'socket.io-client'
import {SERVER_URL} from '../../constants/api'

const socket =io.connect(`${SERVER_URL}`)

function ChatWindow() {

  const [message,setMessage]=useState('')

  socket.on('receive_message',(data)=>{setMessage(data)})



   const checkMessage=()=>{socket.on('receive_message',(data)=>{setMessage(data)}) }
  
  return(
    <div>
  {/* <input type='button' value='check messages' onClick={checkMessage} /> */}
    </div>
  )
}

export default ChatWindow

