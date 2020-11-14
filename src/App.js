import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Review from "./components/Review";
import BookDetail from "./components/BookDetail";
import BookSearch from "./components/BookSearch";


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/">
          <span className="navbar-brand">📕📗📘 2020 Book Application 📙📓📒</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                <span className="nav-link">
                  Home😎 <span className="sr-only">(current)</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/BookSearch">
                <span className="nav-link">Show me the book!👀</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/BookSearch" component={BookSearch} />
        <Route path="/BookDetail" component={BookDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
