import React, { useState, useEffect } from "react";
import { Spinner, Button } from "flowbite-react";
import { useDispatch } from "react-redux";

import Hero from "../components/Hero";
import Card from "../components/Cards";

const HomePage = () => {
  //we get products from mockoon API
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    getData()
  }, [])

  //the reason I used useEffect for dispatch: the cart is not updating immidiately
  useEffect(()=>{
    dispatch({type: 'UPDATE_CART', payload: {cartQuantity: cart.length}})
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(product){
    setCart(prevCart=>{
      return [
        ...prevCart,
        product
      ]
    })
  }
  function getData(){
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      localStorage.setItem("products", JSON.stringify(data))
    })
    .catch(e=>{
      console.log(e)
      setError(e)
      })
  }
  
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 100);

  // Card Element
  const productElemnts = products.map((product)=>(
    <Card key={product.id} data={product} addToCart={addToCart}/>
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
          <div className="flex gap-4 overflow-auto">
            {productElemnts}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
