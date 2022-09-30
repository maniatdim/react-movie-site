import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchItems from "./components/SearchItems";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";

function App() {
  // const [searchResults, setsearchResults] = useState([]);
  const [searchText, setsearchText] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar searchText={searchText} setsearchText={setsearchText} />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="search"
            element={
              <SearchItems
                keyword={searchText}
                //searchResults={searchResults}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
