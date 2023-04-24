import { useEffect, useState } from "react";
import { Spinner, Button } from "flowbite-react";

import Pricing from "./components/Pricing";
import Table from "./components/Table";
// import Navbar from "./components/Navbar";
import NavbarC from "./components/NavbarC";
import Hero from "./components/Hero";
import Card from "./components/Cards";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Button color="gray">
          <Spinner  />
          <span className="pl-3">Loading...</span>
        </Button>
      ) : (
        <div className="mx-10">
          <NavbarC />
          <Hero />
          <div className="flex gap-5">
            {[...Array(4)].map(item=>(
              <Card />
            ))}
          </div>
          <Login />
          {/* <Pricing /> */}
          {/* <Table /> */}
          {/* {false ? "❤️" : "♡"} */}
        </div>
      )}
    </>
  );
}

export default App;
