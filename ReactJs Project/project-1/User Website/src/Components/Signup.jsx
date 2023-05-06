import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {

  const redirect=useNavigate();

  useEffect(() => {
    if(localStorage.getItem('id'))
    {
      return redirect('/');
    }
  },[]);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jainik-16f74-default-rtdb.firebaseio.com/users.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  const [formvalue, setFormvalue] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),status: 'Unblock',
      [e.target.name]: e.target.value
    });
    console.log(formvalue);
  };

  const validation=()=>{
    let result=true;
    if(formvalue.name=="" || formvalue.name==null)
    {
      result=false;
      toast.error('Name field is required');
    }
    if(formvalue.mobile=="" || formvalue.mobile==null)
    {
      result=false;
      toast.error('mobile field is required');
    }
    if(formvalue.email=="" || formvalue.email==null)
    {
      result=false;
      toast.error('email field is required');
    }
    if(formvalue.password=="" || formvalue.password==null)
    {
      result=false;
      toast.error('password field is required');
    }
    return result;
  }

  const save = async(e) => {
    e.preventDefault();
    if(validation())
    {
      
        const res=await axios.post(`http://localhost:3000/users`,formvalue);
        toast.success('Registered Succeess');
        setFormvalue({ ...formvalue, name: "",mobile: "",email: "",password: ""})
        return redirect('/');
        
    }

  }


  // const save = (e) => {
  //   e.preventDefault();
  //   if (formvalue.name == "") {
  //     document.getElementById("nameerr").innerHTML = "User Name is empty";
  //   } else {
  //     document.getElementById("nameerr").innerHTML = "";
  //     fetch("https://jainik-16f74-default-rtdb.firebaseio.com/users.json", {
  //       method: "POST",
  //       body: JSON.stringify(formvalue),
  //       headers: { "Content-type": "application/json; charset=utf-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //           alert("Register Success");
  //           setFormvalue({
  //             ...formvalue,
  //             name: "",
  //             email: "",
  //             mobile: "",
  //             password: "",
  //           });
  //         }
  //       });
  //   }

  //   if (formvalue.email == "") {
  //     document.getElementById("emailerr").innerHTML = "User Email is empty";
  //   } else {
  //     document.getElementById("emailerr").innerHTML = "";
  //     fetch("https://jainik-16f74-default-rtdb.firebaseio.com/users.json", {
  //       method: "POST",
  //       body: JSON.stringify(formvalue),
  //       headers: { "Content-type": "application/json; charset=utf-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //           alert("Register Success");
  //           setFormvalue({
  //             ...formvalue,
  //             name: "",
  //             email: "",
  //             mobile: "",
  //             password: "",
  //           });
  //         }
  //       });
  //   }

  //   if (formvalue.mobile == "") {
  //     document.getElementById("mobileerr").innerHTML =
  //       "User Mobile Number is empty";
  //   } else {
  //     document.getElementById("mobileerr").innerHTML = "";
  //     fetch("https://jainik-16f74-default-rtdb.firebaseio.com/users.json", {
  //       method: "POST",
  //       body: JSON.stringify(formvalue),
  //       headers: { "Content-type": "application/json; charset=utf-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //           alert("Register Success");
  //           setFormvalue({
  //             ...formvalue,
  //             name: "",
  //             email: "",
  //             mobile: "",
  //             password: "",
  //           });
  //         }
  //       });
  //   }

  //   if (formvalue.password == "") {
  //     document.getElementById("passerr").innerHTML = "Password is empty";
  //   } else {
  //     document.getElementById("passerr").innerHTML = "";
  //     fetch("https://jainik-16f74-default-rtdb.firebaseio.com/users.json", {
  //       method: "POST",
  //       body: JSON.stringify(formvalue),
  //       headers: { "Content-type": "application/json; charset=utf-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //           alert("Register Success");
  //           setFormvalue({
  //             ...formvalue,
  //             name: "",
  //             email: "",
  //             mobile: "",
  //             password: "",
  //           });
  //         }
  //       });
  //   }

  
  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Sign Up</h5>
          </div>

          <div className="row g-5">
            <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      onChange={onchange}
                      value={formvalue.name}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="nameerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      onChange={onchange}
                      value={formvalue.email}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="emailerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-12">
                    <input
                      type="mobile"
                      name="mobile"
                      onChange={onchange}
                      value={formvalue.mobile}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Phone Number"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="mobileerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-06">
                    <input
                      type="password"
                      name="password"
                      onChange={onchange}
                      value={formvalue.password}
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
                      SIGNUP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Signup;
