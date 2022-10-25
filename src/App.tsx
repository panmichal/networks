import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import "./App.css";
import networkData from "./data/network.json";

function App() {
  const elements = networkData;
  useEffect(() => {
    var cy = cytoscape({
      elements: elements as cytoscape.ElementsDefinition,
      container: document.getElementById("graph"),
      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(label)",
          },
        },

        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],

      layout: {
        name: "cose",
        animate: false,
        avoidOverlap: true,
        nodeDimensionsIncludeLabels: true,
      },
    });
  });
  return (
    <div className="App">
      <div
        id="graph"
        style={{
          width: 2024,
          height: 1568,
          backgroundColor: "#f0efdf",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default App;
