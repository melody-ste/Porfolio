import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";

const Home = () => {
  return (
    <div className="container-home">
      <h1 className="title-header">Mélody</h1>
      <h1 className="title-header">Stephan</h1>
      <h2>Développeur web fullstack & généraliste 3D</h2>
    </div>
  );
};

export default Home;