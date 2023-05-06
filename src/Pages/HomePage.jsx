import React, { useState, useEffect } from "react";
import { Spinner, Button } from "flowbite-react";

import Hero from "../components/Hero";
import Card from "../components/Cards";
import data from "../api/data";

const HomePage = () => {
  //we get products from local storage
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(getData())
  }, [data])

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 100);

  function getData(){
    // fetch goes here
    // for now we are getting data from localStorage
    // localStorage.setItem("products", JSON.stringify(data))
    const productData = JSON.parse(localStorage.getItem("products"));
    return productData
  }

  const productElemnts = products.map((product)=>(
    <Card key={product.id} data={product}/>
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
