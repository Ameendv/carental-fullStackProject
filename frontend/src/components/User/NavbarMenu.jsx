import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";




function NavbarMenu() {
  const navigate=useNavigate()

    const [anchorElUser, setAnchorElUser] =useState(false);

    const handleCloseUserMenu = () => {
        setAnchorElUser(true);
      };
    
  return (
    <div>
      <MenuItem  onClick={handleCloseUserMenu}>
        <Typography
          textAlign="center"
          onClick={() => {
            navigate('/login')
          }}
        >
          Login
        </Typography>
       
      </MenuItem>
      <MenuItem  onClick={handleCloseUserMenu}>
        <Typography
          textAlign="center"
          onClick={() => {
            navigate('/signup')
          }}
        >
          Signup
        </Typography>
       
      </MenuItem>
    </div>
  );
}

export default NavbarMenu;
