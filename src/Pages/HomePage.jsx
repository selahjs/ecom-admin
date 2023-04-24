import React from 'react'
import Hero from "../components/Hero";
import Card from "../components/Cards";

const HomePage = () => {
  return (
    <>
        <Hero />
        <div className='flex gap-4'>
            {[...Array(4)].map(item=>(
                <Card />
            ))}
        </div>
    </>
  )
}

export default HomePage