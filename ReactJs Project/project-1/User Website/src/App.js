import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";
import Vendor from "./Components/Vendor";
import Service from "./Components/Service";
import BlogG from "./Components/BlogG";
import BlogD from "./Components/BlogD";
import Price from "./Components/Price";
import Feature from "./Components/Feature";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Quote from "./Components/Quote";
import Contact from "./Components/Contact";
import Facts from "./Components/Facts";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Edit_Profile from "./Components/Edit_Profile";
import Profile from "./Components/Profile";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer/>
      <Topbar/>
      <Header/>
      <Facts/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<><About/><Team/></>} />
          <Route path="/service" element={<><Service /><Testimonial/></>} />
          <Route path="/blogg" element={<BlogG/>} />
          <Route path="/blogd" element={<BlogD />} />
          <Route path="/price" element={<><Price /><Quote/></>} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/edit_profile/:id" element={<Edit_Profile/>} />
        </Routes>
      <Vendor/>
      <Footer/> 
    </>
  );
}

export default App;
