import { useEffect, useState } from 'react';
import './App.css'
import './index.css';
import { LoadingScreen } from "./components/LodingScreen";
import { Navbar } from "./components/NavBar"
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoded, setIsLoded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {!isLoded && <LoadingScreen onCmplete={() => setIsLoded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoded ? "opacity-100" : "opacity-0"}
           bg-black text-gray-100 `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />

      </div>
    </>
  )
}

export default App
