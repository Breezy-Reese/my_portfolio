import React from "react";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      
      <About />
    <Services />
    <Contact />
      <Footer />
      
     
    </div>
  );
}

export default App;
