import React, { useState, useEffect } from "react";
import Card from "../components/Cards";

const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    setPopularItems(JSON.parse(localStorage.getItem("products")));
  }, []);
  const popularElemnts = popularItems.map((product) => {
    if (product.productRating >= 5) {
      return <Card key={product.id} data={product} />;
    }
  });
  return <div className="flex gap-4 overflow-auto">{popularElemnts}</div>;
};

export default PopularItems;
