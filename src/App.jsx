import { useEffect, useState } from "react";
import { Spinner, Button } from "flowbite-react";

import NavbarC from "./components/NavbarC";
import HomePage from "./Pages/HomePage";
import FooterC from "./components/FooterC";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-gray-300">
          <Button color="gray">
            <Spinner  />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
      ) : (
        <div className="mx-10">
          <NavbarC />
          <HomePage />
          <FooterC />
        </div>
      )}
      </>
  );
}

export default App;
