import { useEffect, useState } from "react";
import { Spinner, Button } from "flowbite-react";

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      <HomePage />
      </>
  );
}

export default App;
