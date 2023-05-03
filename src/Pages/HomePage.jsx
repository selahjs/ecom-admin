import React, { useState, useEffect } from "react";
import { Spinner, Button } from "flowbite-react";

import Hero from "../components/Hero";
import Card from "../components/Cards";
import data from "../api/data";

const HomePage = () => {
  //for now there are no products in localStorage
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

  useEffect(()=>{
    setProducts(data)
  }, [data])

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const productElemnts = products.map((product,i)=>(
    <Card key={i} data={product}/>
  ))
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-gray-300">
          <Button color="gray">
            <Spinner />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
      ) : (
        <div>
          <Hero />
          <div className="flex gap-4">
            {productElemnts}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
