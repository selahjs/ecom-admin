import { useEffect, useState } from "react";
import { RandomContextProvider } from "./context/randomContext";

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
     <>
     <RandomContextProvider>
      <HomePage />
     </RandomContextProvider>
      </>
  );
}
export default App;
