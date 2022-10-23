import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import "./App.css";

function App() {
  const elements = [
    { data: { id: "1", label: "Node 1" }, position: { x: 200, y: 100 } },
    { data: { id: "2", label: "Node 2" }, position: { x: 300, y: 100 } },
    { data: { id: "3", label: "Node 3" }, position: { x: 300, y: 100 } },
    { data: { id: "4", label: "Node 4" }, position: { x: 300, y: 100 } },
    { data: { id: "5", label: "Node 5" }, position: { x: 300, y: 100 } },
    { data: { id: "6", label: "Node 6" }, position: { x: 300, y: 100 } },
    { data: { id: "7", label: "Node 7" }, position: { x: 300, y: 100 } },
    { data: { id: "8", label: "Node 8" }, position: { x: 300, y: 100 } },
    { data: { id: "9", label: "Node 9" }, position: { x: 300, y: 100 } },
    {
      data: { source: "1", target: "2", label: "Edge from Node1 to Node2" },
    },
    {
      data: { source: "1", target: "3", label: "Edge from Node1 to Node3" },
    },
    {
      data: { source: "1", target: "4", label: "Edge from Node1 to Node4" },
    },
    {
      data: { source: "3", target: "5", label: "Edge from Node3 to Node5" },
    },
    {
      data: { source: "2", target: "8", label: "Edge from Node2 to Node8" },
    },
    {
      data: { source: "7", target: "4", label: "Edge from Node2 to Node8" },
    },
    {
      data: { source: "7", target: "9", label: "Edge from Node2 to Node8" },
    },
    {
      data: { source: "7", target: "6", label: "Edge from Node2 to Node8" },
    },
    {
      data: { source: "6", target: "3", label: "Edge from Node2 to Node8" },
    },
  ];

  useEffect(() => {
    var cy = cytoscape({
      elements: elements,
      container: document.getElementById("graph"),
      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(id)",
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
        name: "circle",
      },
    });
  });
  return (
    <div className="App">
      <div
        id="graph"
        style={{
          width: 800,
          height: 600,
          backgroundColor: "#f0efdf",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default App;
