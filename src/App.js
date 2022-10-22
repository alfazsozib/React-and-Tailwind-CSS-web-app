import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Category from "./components/Category";
import category from "../src/data/cat";

function App() {
  const data = category.map((item) => {
    return <Category {...item}/>;
  });

  console.log(data);

  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      < Category />
    </div>
  );
}

export default App;
