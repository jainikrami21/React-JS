import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function Edit_Profile() {
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("id")) {
      return redirect("/");
    }
    fetchdata();
  }, []);

  const [formvalue, setFormvalue] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const { id } = useParams();
  const fetchdata = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    console.log(res);

    setFormvalue({
      ...formvalue,
      name: res.data.name,
      email: res.data.email,
      mobile: res.data.mobile,
    });
  };

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const validation = () => {
    let result = true;
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      toast.error("Name field is required");
    }
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      result = false;
      toast.error("Mobile field is required");
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error("Email field is required");
    }
    return result;
  };

  const update = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/users/${id}`,
        formvalue
      );
      toast.success("Update Success");
      localStorage.setItem("name", formvalue.name);
      setFormvalue({ ...formvalue, name: "", mobile: "", email: "" });
      return redirect("/profile");
    }
  };

  return (
    <div>
      {/* contact section */}
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <h3>Edit Profile</h3>
                  </div>
                  <div className="col-md-12 ">
                    <input
                      className="contactus"
                      placeholder="Name"
                      onChange={onchange}
                      value={formvalue.name}
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      onChange={onchange}
                      value={formvalue.mobile}
                      type="mobile"
                      name="mobile"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      onChange={onchange}
                      value={formvalue.email}
                      name="email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn" onClick={update}>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="map_section">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit_Profile;
