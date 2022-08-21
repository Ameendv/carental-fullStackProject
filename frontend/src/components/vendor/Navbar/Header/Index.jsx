import "./header.css";
import React from 'react'
export default function Header() {
  return (
    <div className='header-parent'>
      <div className="header">
        <span className="title">Home</span>
        <span className="title">Contact</span>
        <span className="title">Chat</span>
        <span className="title">Admin</span>
      </div>
    </div>
  );
}
