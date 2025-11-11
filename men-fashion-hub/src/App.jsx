import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
  
  <div className="container">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>

  );
}


export default App
