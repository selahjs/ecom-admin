import { createContext, useState } from "react";

const SlideContext = createContext()

function RandomContextProvider(props){
    const [slide, setSlide] = useState(false)

    function toggleSlide(){
        setSlide(prevSlide => !prevSlide)
    }
     
    return (
        <SlideContext.Provider value={{shouldSlide: slide, toggleSlide: toggleSlide}}>
            {props.children}
        </SlideContext.Provider>
    )
}

export {SlideContext, RandomContextProvider}