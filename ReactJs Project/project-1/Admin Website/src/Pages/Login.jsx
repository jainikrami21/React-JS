import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const redirect=useNavigate();
  useEffect(() => {
    if((localStorage.getItem('aemail')))
    {
      return redirect('/dashboard');
    }
  })

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => 
  {
    setFormvalue
    ({
      ...formvalue,
      [e.target.name]: e.target.value
    });
  };
  
  const validation = () => {
    let result = true;

    if(formvalue.email == "" || formvalue.email == null)
    {
        result = false;
        toast.error('Email field is required')
    }
    if(formvalue.password == "" || formvalue.password == null)
    {
      result = false;
      toast.error('Password field is required')
    }
    return result;
  }


  const save = async(e) => {
    e.preventDefault();
    if (validation()) 
    {
      const res = await
      axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
          if (res.data.length > 0) 
      {
            if (res.data[0].password == formvalue.password)
          {
                  // create storage session
                  localStorage.setItem('aemail', res.data[0].email);
                  localStorage.setItem('aname', res.data[0].name);
                  toast.success('Login successful');
                  return redirect('/dashboard');
          }
          else 
          {
            toast.error('Enter a valid Password !');
            return redirect('/');
          }
      }
      else 
      {
        toast.error('Enter Valid Email !');
        return redirect('/');
      }
    }
    
  }

  return (
    <div>
      <div className="container">
        <div className="row text-center " style={{ paddingTop: 100 }}>
          <div className="col-md-12">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.9bLa6OsvYEWKly7Zu9bUowHaHa&pid=Api&P=0"
              alt="admin.logo"
              style={{ width: 70, height: 80 }}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div className="panel-body">
              <form role="form">
                <hr />
                <h5 style={{ color: "white" }}>Enter Details to Login</h5>
                <br />
                <div className="form-group input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-tag" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email "
                    value={formvalue.name}
                    onChange={onchange}
                    required
                    name="email"
                  />
                  <span id="emailerr" style={{ color: "red" }}></span>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock" />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    value={formvalue.password}
                    onChange={onchange}
                    required
                    name="password"
                  />
                  <span id="passerr" style={{ color: "red" }}></span>
                </div>
                <div className="form-group">
                  <label style={{ color: "white" }} className="checkbox-inline">
                    <input type="checkbox" /> Remember me
                  </label>
                  <span className="pull-right">
                    <a href="/">Forget password ? </a>
                  </span>
                </div>
                <a href="/" className="btn btn-primary">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit"
                    onClick={save}
                  >
                    Login Now
                  </button>
                </a>
                <hr />
                <h5 style={{ color: "white" }}>
                  Not register ? <a href="/">click here </a> or go to{" "}
                </h5>
                <a href="/">Home</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
