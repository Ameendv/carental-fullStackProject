import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";

import Header from "../Header/Index";




const sidebarItems=[
<SidebarItem><span style={{color:'#D61C4E',}} >CAR</span><span style={{color:'#fff',marginLeft:'4px'}}>ENT</span></SidebarItem>,
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>View Bookings</SidebarItem>,
  <SidebarItem>Vehicles</SidebarItem>,
  <SidebarItem>Customers</SidebarItem>,
  <SidebarItem >Sales</SidebarItem>,
]



function SideNavbar(props) {
  return (
    <>
      <Header />
      <Sidebar
     
      activeHighlight='rgba(255,255,255,0.15)'
      width={250}
      background="#343941"
        breakPoint="768"
        content={sidebarItems}
      ></Sidebar>
      <div >{props.children}</div>
      
      </>
  );
}

export default SideNavbar;