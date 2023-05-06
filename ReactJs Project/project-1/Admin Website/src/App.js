import React from "react";
import {  Routes, Route } from "react-router-dom";
import BlankPage from "./Pages/BlankPage";
import Chart from "./Pages/Chart";
import Dashbord from "./Pages/Dashbord";
import Form from "./Pages/Form";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Logintable from "./Pages/Logintable";
import Table from "./Pages/Table";
import TabPanel from "./Pages/TabPanel";
import UIpage from "./Pages/UIpage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashbord/>}/>
        <Route path="/ui element" element={<UIpage/>}/>
        <Route path="/tab & panel" element={<TabPanel/>}/>
        <Route path="/morris chart" element={<Chart/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/logintable" element={<Logintable/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/blank page" element={<BlankPage/>}/>
      </Routes>
    </>
  );
}

export default App;
