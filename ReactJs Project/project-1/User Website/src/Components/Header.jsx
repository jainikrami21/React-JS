import React from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

    const redirect=useNavigate();
    const logout=()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        toast.success('Logout Successfully');
        return redirect('/');
    }
  return (
    <div>
      
      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <NavLink to="index.html" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-user-tie me-2" />
              Startup
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link active">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-item nav-link">
                Services
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="/blog"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/blogg" className="dropdown-item">
                    Blog Grid
                  </NavLink>
                  <NavLink to="/blogd" className="dropdown-item">
                    Blog Detail
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink
                  to="/pages"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/price" className="dropdown-item">
                    Pricing Plan
                  </NavLink>
                  <NavLink to="/feature" className="dropdown-item">
                    Our features
                  </NavLink>
                  <NavLink to="/team" className="dropdown-item">
                    Team Members
                  </NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">
                    Testimonial
                  </NavLink>
                  <NavLink to="/quote" className="dropdown-item">
                    Free Quote
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>

              {(()=>{
                //get / print storage session
                if(localStorage.getItem('name'))
                {
                  return(
                    <>
                    <NavLink to="/profile" className="nav-item nav-link">
                Hi..{localStorage.getItem('name')}
              </NavLink>

              <NavLink to="/javascript:void(0);" className="nav-item nav-link login_btn" onClick={logout}>
                Logout
              </NavLink>
                    </>
                  )
                }
                else
                {
                  return(
                  <>
                  <NavLink to="/Login" className="nav-item nav-link">
                Login
              </NavLink>
              <NavLink to="/Signup" className="nav-item nav-link">
                Register
              </NavLink>
                  </>
                  )
                }
              })
              ()}
            </div>
            <butaton
              type="button"
              className="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search" />
            </butaton>
            <NavLink
              to="https://htmlcodex.com/startup-company-website-template"
              className="btn btn-primary py-2 px-4 ms-3"
            >
              Download Pro Version
            </NavLink>
          </div>
        </nav>
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative Digital Solution
                  </h1>
                  <NavLink
                    to="/Quote"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Creative &amp; Innovative
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Creative &amp; Innovative Digital Solution
                </h1>
                <NavLink
                  to="/Quote"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </NavLink>
                <NavLink
                  to="/Contact"
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
