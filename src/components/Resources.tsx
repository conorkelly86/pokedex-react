import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourcesType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://conorkelly.netlify.app/data/${resourceType}.json`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourcesType("players")}>Players</button>
        <button onClick={() => setResourcesType("heroes")}>Heroes</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return (
          <>
            <pre>{JSON.stringify(item)}</pre>
          </>
        );
      })}
    </>
  );
}

export default App;
