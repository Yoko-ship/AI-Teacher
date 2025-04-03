import React from "react";
import Grid from "../components/Grid";
import { themes } from "../components/themes";
function Themes() {
  return (
    <div className="main">
      <h2>Темы</h2>
      <div className="grids">
        <Grid value={themes} />
      </div>
    </div>
  );
}

export default Themes;
