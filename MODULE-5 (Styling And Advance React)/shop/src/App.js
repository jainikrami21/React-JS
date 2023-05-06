import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Electronic from "./Pages/Electronic";
import Fashion from "./Pages/Fashion";
import Jewellery from "./Pages/Jewellery";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/fashion" element={<Fashion/>} />
          <Route path="/electronic" element={<Electronic/>} />
          <Route path="/jewellery" element={<Jewellery/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
