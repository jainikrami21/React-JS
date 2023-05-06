import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() 
{

  const redirect = useNavigate();

  useEffect(() => 
  {
    if(localStorage.getItem('id'))
    {
        return redirect('/');
    }
  }, []);

  const [formvalue, setFormvalue] = useState
  ({
    email: "",
    password: "",
  });

  const onchange = (e) => 
  {
    setFormvalue
    ({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
    // console.log(formvalue);
  };

  const validation=()=> 
  {
    let result = true;

    if(formvalue.email=="" || formvalue.email==null)
    {
      result=false;
      toast.error('Email field is required');
    }
    if(formvalue.password==""  || formvalue.password==null)
    {
      result=false;
      toast.error('Password field is required');
    }
    return result;
  }
  
  const save = async(e) => 
  {
    e.preventDefault();
    if(validation())
    {
      const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      // console.log(res);
      
      if(res.data.length>0)
      {
        if(res.data[0].password==formvalue.password)
        {
          //create storage session
          localStorage.setItem('id',res.data[0].id);
          localStorage.setItem('name',res.data[0].name);

          toast.success('Login Success');
          return redirect('/');
        }
        else
        {
          toast.error('Enter Valid Password !');
          return redirect('/save');
        }
      }
      else
      {
        toast.error('Enter Valid Email !');
        return redirect('/save');
      }

    }
    
  }

    
  return (
    <div>
      {/* Login Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <div
                className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                style={{ maxWidth: 600 }}>
                <h5 className="fw-bold text-primary text-uppercase">Login</h5>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      value={formvalue.name}
                      onChange={onchange}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="emailerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="password"
                      value={formvalue.password}
                      onChange={onchange}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Password"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="passerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      onClick={save}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 350, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
    </div>
  );
}

export default Login;
