import { useState } from "react";
import React from "react";

function Basic_Crud() {

  const[formvalue, setFormvalue] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const [data, setData] = useState([]);

  const save = (e) => {
    e.preventDefault();
    setData([...data, formvalue]);
    //console.log(data);
    setFormvalue({...formvalue, name: "", email: "", mobile: "",  password: "",})
  }
  
  const ondelete = (delid) => {
    var filterdata=data.filter((item,index,ent)=> item.id!==delid);
    setData(filterdata);
  }
  return (
    <div>
      {/* Contact Start */}
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
                      onChange={onchange} value={formvalue.name}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name" required
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="type"
                      name="email"
                      onChange={onchange} value={formvalue.email}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email" required
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="mobile"
                      name="mobile"
                      onChange={onchange} value={formvalue.mobile}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Phone Number" required
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-06">
                    <input
                      type="password"
                      name="password"
                      onChange={onchange} value={formvalue.password}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Password" required
                      style={{ height: 55 }}
                    />
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
          <div className="row">
            <div className="col-md-12">
              <div className="container py-2">
                <div
                  className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                  style={{ maxWidth: 600 }}
                >
                  <h5 className="fw-bold text-primary text-uppercase">
                    SignUp Data
                  </h5>
                </div>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Firstname</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    data.map((item, index, entarr) =>{
                      return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td><button className="btn btn-danger" onClick={()=>ondelete(item.id)}>Delete</button></td>
                    </tr>
                    ) 
                    }
                    )
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Basic_Crud;
