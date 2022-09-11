import React,{useState} from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './SideNavbar.css'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import Header from "../Header/Index";






function SideNavbar({children}) {


 

  let location =  useLocation()
  let active = location.pathname
   
   
   

  const [show, setShow] = useState(true);
  const navigate =useNavigate()

const handleLogout =async()=>{
    localStorage.removeItem('vendor')
    // await axios.get(`${serverUrl}/admin/logout`,{withCredentials:true}).then((res)=>{
    //    navigate('/admin/login')
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
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
      <main id="main" className={show ? "space-toggle main" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" style={{color:'#c4bff2'}} onClick={() => setShow(!show)}>
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/admin" className="nav-logo">
              <i className="fas fa-home-alt nav-link-icon "  ></i>
              <span className="nav-logo-name">Home</span>
            </Link>
            <div className="nav-list">
              <Link to="/admin" className={`nav-link   ${active == '/admin' ? 'active':null}`}>
                <i className="fas fa-tachometer nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/admin/users" className={`nav-link   ${active == '/admin/users' ? 'active':null}`}>
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">Users</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Hotel</span>
              </Link>
            </div>
          </div>
          {/* <Link    className="nav-link"> */}
            <div onClick={handleLogout} className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
            </div>
          {/* </Link> */}
        </nav>
      </aside>
      {/* <h1>Content</h1> */}
     
    </main>

      <div >{children}</div>
      
      </>
  );
}

export default SideNavbar;




// /{/* <Sidebar
     
// hoverHighlight='rgba(255,255,255,0.15)'
//  width={250}
//  background="#343941"
//    breakPoint={768}
//    content={sidebarItems}
   
//  ></Sidebar> */}

// <ProSidebar>
// <SidebarHeader>
// <span style={{ color: "#D61C4E" }}>CAR</span> 
// {/**
// * 
// *  You can add a header for the sidebar ex: logo
// */}
// </SidebarHeader>
// <SidebarContent>
// {/**
// *  You can add the content of the sidebar ex: menu, profile details, ...
// */}
// </SidebarContent>
// <SidebarFooter>
// {/**
// *  You can add a footer for the sidebar ex: copyright
// */}
// </SidebarFooter>
// </ProSidebar>;