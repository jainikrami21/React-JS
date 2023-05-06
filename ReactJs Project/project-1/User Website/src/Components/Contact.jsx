import React from "react";
import { useState } from "react";
import { toast } from 'react';
import axios from 'axios';

function Contact() {
  
  const [formvalue, setFormvalue] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      contact_id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    });
    // console.log(formvalue);
  };

  const validation=()=> 
  {
    let result = true;
    if (formvalue.name=="" || formvalue.name==null)
    {
      result=false;
      toast.error('Name field is required');
    }
    if (formvalue.mobile=="" || formvalue.mobile==null)
    {
      result=false;
      toast.error('Mobile field is required');
    }
    if (formvalue.email=="" || formvalue.email==null)
    {
      result=false;
      toast.error('Email field is required');
    }
    if (formvalue.message=="" || formvalue.message==null)
    {
      result=false;
      toast.error('Message field is required');
    }
    return result;
  }
  const onsubmit=async(e) => {
    e.preventDefault();
    if(validation())
    {
      const res=await axios.post('http://localhost:3000/contacts',formvalue);
      setFormvalue({...formvalue, name:"",mobile:"",email:"",message:""})
      toast.success('Contact Success');
    }
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
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">
              If You Have Any Query, Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email to get free quote</h5>
                  <h4 className="text-primary mb-0">info@example.com</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit our office</h5>
                  <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      name="name"
                      onChange={onchange}
                      value={formvalue.name}
                      placeholder="Your Name"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="nameerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control border-0 bg-light px-4"
                      name="email"
                      onChange={onchange}
                      value={formvalue.email}
                      placeholder="Your Email"
                      required
                      style={{ height: 55 }}
                    />
                    <span id="emailerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-12">
                    <input
                      type="mobile"
                      className="form-control border-0 bg-light px-4"
                      name="mobile"
                      onChange={onchange}
                      value={formvalue.mobile}
                      required
                      placeholder="Mobile"
                      style={{ height: 55 }}
                    />
                    <span id="mobileerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0 bg-light px-4 py-3"
                      rows={4}
                      name="message"
                      type="text"
                      onChange={onchange}
                      value={formvalue.message}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                    <span id="messerr" style={{ color: "red" }}></span>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      onClick={onsubmit}
                    >
                      Send Message
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
      {/* Contact End */}
    </div>
  );
}

export default Contact;
