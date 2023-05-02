import { useEffect, useState } from "react";
import { RandomContextProvider } from "./context/randomContext";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  console.log(user)
  //to use the states we use useSelector() and pass a callback function
  const {message} = useSelector((state)=>state)

  //to take action or manipulate the state we use usedispatch()
  const dispatch = useDispatch();

  //then we pass an object specifying what type of action we want to take on the state/s
  function login(){ dispatch({type: 'LOGIN', payload:{username:user.username, password:user.password}})}
  function logout(){ dispatch({type: 'LOGOUT'})}

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  function handleChange(e){
    const {name, value} = e.target
    setUser(prevState=>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  return (
     <>
     <RandomContextProvider>
      {message}
      <input 
        style={{border: 'solid 1px black'}} 
        placeholder="username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <input 
        style={{border: 'solid 1px black'}} 
        placeholder="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      
      <button onClick={login} style={{border: 'solid 1px black', margin: '3px'}}>LOGIN</button>
      <button onClick={logout} style={{border: 'solid 1px black', margin: '3px'}}>LOGOUT</button>
      {/* <HomePage /> */}
     </RandomContextProvider>
      </>
  );
}
export default App;
