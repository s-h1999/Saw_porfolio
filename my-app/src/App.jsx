import { useState } from 'react';
import './App.css';

import Sidebar from "./components/sidebar.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Skills from "./components/Skills.jsx";
import Project from './components/Project.jsx';
import Contact from './components/contact.jsx';
// import PhotoGallery from './components/PhotoGallery.jsx';

import { useScroll, scrollToSection } from './hooks/useScroll';


function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  const [active, setActive] = useState("ABOUT");

  // Call the hook here
  useScroll(setActive);

  return (
    // Main container. `flex` and `h-screen` sets up the primary layout.
    <div className={`flex flex-col lg:flex-row h-screen bg-[rgb(33,33,33)]`}>
      
      {/* Sidebar: Fixed on desktop, sticky header on mobile */}
      <Sidebar active={active} scrollToSection={scrollToSection} />
      
      {/* Main Content: Takes up remaining space. 
          `lg:ml-[calc(25%+1.75rem)]` roughly accounts for the fixed 1/4 width sidebar 
          (lg:w-1/4) plus the large margin (lg:ml-7) on the sidebar for desktop view, 
          ensuring content starts after the fixed sidebar.
          On mobile, it remains full width.
      */}
      <main className="flex-1 overflow-auto p-6 space-y-10 w-full lg:ml-[15%]">
        <About increment={increment} />
        <Experience />
        <Project/>
        {/* <PhotoGallery/> */}
        <Skills />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;