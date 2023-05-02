import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Label, TextInput, Button, Checkbox } from "flowbite-react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  //to use the states we use useSelector() and pass a callback function
  const {message} = useSelector((state)=>state)

  //to take action or manipulate the state we use usedispatch()
  const dispatch = useDispatch();

  //then we pass an object specifying what type of action we want to take on the state/s
  function login(){ dispatch({type: 'LOGIN', payload:{username:user.username, password:user.password}})}
  function logout(){ dispatch({type: 'LOGOUT'})}

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
    <div className="w-1/3">
      <Card>
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="username"
              placeholder="name@example.com"
              required={true}
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput 
              id="password1" 
              type="password" 
              name="password"
              placeholder="password"
              required={true}
              value={user.password}
              onChange={handleChange}
             />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button onClick={login} type="submit">Submit</Button>
          <p className="text-center text-green-400">{message}</p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
