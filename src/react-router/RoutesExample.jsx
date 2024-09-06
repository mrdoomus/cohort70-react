import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Profile from "./routes/Profile";

function RoutesExample() {
  return (
    <BrowserRouter>
      {/* <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about/:firstName" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default RoutesExample;
