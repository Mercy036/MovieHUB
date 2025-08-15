import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContexts";

function App() {
  return (
    <MovieProvider>
      <main className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;