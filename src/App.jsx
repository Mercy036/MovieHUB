import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContexts";
import WatchLater from "./pages/WatchLater";

function App() {
  return (
    <MovieProvider>
      <main className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;