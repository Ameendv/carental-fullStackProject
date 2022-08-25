import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import {Link} from 'react-router-dom'

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import Header from "../Header/Index";






function SideNavbar(props) {


  const showVehicles=()=>{
    console.log('lkasdjfh')
  }

// const sidebarItems = [
//   <SidebarItem>
//     <span style={{ color: "#D61C4E" }}>CAR</span>
//     <span style={{ color: "#fff", marginLeft: "4px" }} >ENT</span>
//   </SidebarItem>,
//   <SidebarItem>Dashboard</SidebarItem>,
//   <SidebarItem onClick={()=>showVehicles()}><Link to="/" />View Bookings</SidebarItem>,
//   <SidebarItem >Vehicles</SidebarItem>,
//   <SidebarItem>Customers</SidebarItem>,
//   <SidebarItem>Sales</SidebarItem>,
// ];
  
  return (
    <>
      <Header />
      {/* <Sidebar
     
     hoverHighlight='rgba(255,255,255,0.15)'
      width={250}
      background="#343941"
        breakPoint={768}
        content={sidebarItems}
        
      ></Sidebar> */}

<ProSidebar>
  <SidebarHeader>
  <span style={{ color: "#D61C4E" }}>CAR</span> 
    {/**
     * 
     *  You can add a header for the sidebar ex: logo
     */}
  </SidebarHeader>
  <SidebarContent>
    {/**
     *  You can add the content of the sidebar ex: menu, profile details, ...
     */}
  </SidebarContent>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>
</ProSidebar>;

      <div >{props.children}</div>
      
      </>
  );
}

export default SideNavbar;