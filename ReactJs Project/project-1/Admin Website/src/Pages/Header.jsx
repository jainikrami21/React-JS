import React from "react";
import { NavLink, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Header() {

  const redirect=useNavigate();
  useEffect(() => 
  {
    if(!(localStorage.getItem('aemail')))
      {
        return redirect('/');
      }
  })
  
  const adminlogout=()=>{
    localStorage.removeItem('aname');
    localStorage.removeItem('aemail');
    toast.error('Logout Success!');
    return redirect('/');
  }


  return (
    <div>
      <nav
        className="navbar navbar-default navbar-cls-top"
        role="navigation"
        style={{ marginBothrefm: 0 }}
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".sidebar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink className="navbar-brand" to="/">
            Binary admin
          </NavLink>
        </div>
        <div
          style={{
            color: "white",
            padding: "15px 50px 5px 50px",
            float: "right",
            fontSize: 16,
          }}
        >
          {" "}
          Last access : 30 May 2014 &nbsp;{" "}
          <a href="#" className="btn btn-danger square-btn-adjust">
            Logout
          </a>{" "}
        </div>
      </nav>
      {/* /. NAV TOP  */}
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li className="text-center">
              <img
                src="img/find_user.png"
                className="user-image img-responsive"
                alt="find user"
              />
            </li>
            <li>
              <NavLink className="active-menu" to="/dashboard">
                <i className="fa fa-dashboard fa-3x" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink  to="/">
                <i className="fa fa-desktop fa-3x" /> Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/ui element">
                <i className="fa fa-desktop fa-3x" /> UI Elements
              </NavLink>
            </li>
            <li>
              <NavLink to="/tab & panel">
                <i className="fa fa-qrcode fa-3x" /> Tabs &amp; Panels
              </NavLink>
            </li>
            <li>
              <NavLink to="/morris chart">
                <i className="fa fa-bar-chart-o fa-3x" /> Morris Charts
              </NavLink>
            </li>
            <li>
              <NavLink to="/table">
                <i className="fa fa-table fa-3x" /> Contact Table
              </NavLink>
            </li>
            <li>
              <NavLink to="/logintable">
                <i className="fa fa-table fa-3x" /> Login Table
              </NavLink>
            </li>
            <li>
              <NavLink to="/form">
                <i className="fa fa-edit fa-3x" /> SigUp Forms Table{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blank page">
                <i className="fa fa-square-o fa-3x" /> Blank Page
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* /. NAV SIDE  */}
    </div>
  );
}

export default Header;
