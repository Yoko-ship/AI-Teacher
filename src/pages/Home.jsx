import React from "react";
import "../css/home.css";
import Grid from "../components/Grid";
import randomElements from "../components/themes";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="main">
      <h2>Разбирай сложные темы с AI</h2>

      <div className="btn">
        <Link to="/learning">Начать обучение</Link>
      </div>

      <h2>Примеры</h2>
      <div className="grids">
        <Grid value={randomElements} />
      </div>
    </div>
  );
}

export default Home;
