import React,{useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

function NavbarMenu() {

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
            console.log('Login')
          }}
        >
          Profile
        </Typography>
       
      </MenuItem>
      <MenuItem  onClick={handleCloseUserMenu}>
        <Typography
          textAlign="center"
          onClick={() => {
            console.log('Signup')
          }}
        >
          Logout
        </Typography>
       
      </MenuItem>
    </div>
  );
}

export default NavbarMenu;
