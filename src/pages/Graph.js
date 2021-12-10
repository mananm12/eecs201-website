import React, { Component } from "react";
import "../App.css";


function Graph(ticker) {
  return (
      <div
          style = {{
              backgroundColor: "white",
              textAlign: "center",
          }}
      >
        <br />
        <h2>Blog</h2>
        <h4>A compilation of my favorite quotes.</h4>
        <br />
        <br />
        <h5>"Beware of geeks bearing formulas" - Warren Buffett</h5>
        <h5>"I Want You To Deal With Your Problems By Becoming Rich!" - Leonardo DiCaprio as Jordan Belfort </h5>
        <h5>"Is mayonnaise an instrument?" - Patrick Star</h5>
        <h5>"We don't make mistakes, just happy little accidents." - Bob Ross</h5>
        <br />
        <br />
        <br />
        <br />
      </div>
  );
}

export default Graph;