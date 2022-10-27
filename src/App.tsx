import React, { useState, useEffect } from "react";
import cytoscape from "cytoscape";
import "./App.css";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import networkData from "./data/network.json";

interface NodeDetails {
  name: string;
}

function SelectedNodeDetails(props: NodeDetails) {
  return (
    <div style={{ flexGrow: 1, maxWidth: 300 }}>
      <div style={{ marginLeft: 16, marginTop: 16 }}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Stop
            </Typography>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function NodeDetails(props: { node: NodeDetails | null }) {
  if (props.node != null) {
    return <SelectedNodeDetails name={props.node.name} />;
  } else {
    console.log("Empty node");
    return <div style={{ flexGrow: 1, maxWidth: 300 }}></div>;
  }
}

function App() {
  const elements = networkData;
  const [selectedNode, setSelectedNode] = useState<NodeDetails | null>(null);
  useEffect(() => {
    let cy = cytoscape({
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
    cy.on("tap", "node", function(evt) {
      const node = evt.target;
      setSelectedNode({ name: node._private.data.label });
    });
  }, []);
  return (
    <div className="App">
      <NodeDetails node={selectedNode} />
      <div
        id="graph"
        style={{
          width: 1024,
          height: 768,
          backgroundColor: "#f0efdf",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default App;
