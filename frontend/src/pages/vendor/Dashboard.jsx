import React from "react";
import SideNavbar from '../../components/vendor/Navbar/SideNavbar/SideNavbar'
import Content from '../../components/vendor/Navbar/Content/Index'
import Chat from '../../components/vendor/ChatWindow'





function Dashboard() {


  return (
    
    <>
      <SideNavbar>
        <Content />
        <Chat />
      </SideNavbar>
    </>
  );
}

export default Dashboard;
