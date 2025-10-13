// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Limitbreak from "./limit-break.tsx";
import Keys from "./keys.tsx";
//import saves from "./saves.tsx";
//import labyrinthos from "./labyrinthos.tsx";

function App() {
return (
  <>
    <BrowserRouter basename="/IDLE-HOME">
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Welcome to the Idle Home vault</h1>
            <p>Select a category.</p>
          </div>
        }/>
        <Route path="/limit-break" element={<Limitbreak />} />
        <Route path="/keys" element={<Keys />} />
        {/* <Route path="/saves" element={<Saves />} />
        <Route path="/labyrinthos" element={<Labyrinthos />} /> */}
      </Routes>
      <nav>
        {/* Navigation links */}
        <Link to="/">Home</Link> |{" "}
        <Link to="/limit-break">Limit Break</Link> |{" "}
        <Link to="/saves">Saves</Link> |{" "}
        <Link to="/labyrinthos">Labyrinthos</Link> |{" "} 
        <Link to="/keys">Keys</Link>
      </nav>
    </BrowserRouter>
  </>
)

}

export default App
