import React from "react"
import {useSearchParams} from "react-router-dom"

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  const [van, setVan] = useSearchParams()
  const jet = van.get("type")
  console.log(jet)
  return (
    <>
      <HomePage />
    </>
  );
}
export default App;
