import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'

function NavigationBar() {
  const navigate = useNavigate(); 
  return (
    <nav className="clearfix">
      <h3 onClick={() => navigate('/')}>Comic Verse</h3>
      <NavLink to="/" >Home</NavLink> {/* <a href="/">Home</a> */}
      <NavLink to="/displayComics" >Comic Page</NavLink>
      <NavLink to="/characters" >Display Character</NavLink>
      {/* <NavLink to="/add-details" activeClassName="active">Add Character Details</NavLink> */}
      <NavLink to="/characterDetails/:id">View Character Details</NavLink>
      
    </nav>
  )
}

export default NavigationBar; 