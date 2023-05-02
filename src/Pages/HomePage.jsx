import React, {useState} from 'react'
import { Spinner, Button } from "flowbite-react";

import Hero from "../components/Hero";
import Card from "../components/Cards";

const HomePage = () => {
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
        <div>
          <Hero />
          <div className='flex gap-4'>
              {[...Array(4)].map((item,i)=>(
                  <Card key={i} />
              ))}
          </div>
        </div>
        )}
    </>
  )
}

export default HomePage