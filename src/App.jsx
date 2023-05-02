import { useEffect, useState } from "react";
import { RandomContextProvider } from "./context/randomContext";
import { useDispatch, useSelector } from "react-redux";

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
