import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom"

const Cards = (props) => {
  const data = props.data;
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/4 my-5"> 
    {/* https://tailwindcss.com/docs/width */}
      <Card
        imgAlt={data.productTitle}
        imgSrc={data.imgUrl}
      >
        <Link to="/productDetailt">
          <h5 className="text-lg truncate font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.productTitle}
          </h5>
        </Link>
        <div className="mt-2 flex items-center">
          {/* rating  */}
          {[...Array(data.productRating)].map((rating,i)=>(
            <svg
            key={i}
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          ))}
          
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {/* rating number ~ 5.0 */}
            {data.productRating+'.0'} 
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${data.productPrice}
          </span>
          <button
            onClick={()=> props.addToCart(data)}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
