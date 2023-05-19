import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Card, Label, TextInput, Button, Checkbox } from "flowbite-react";

const SignUp = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    repeatePassword: ""
  });
  const [errorMessage, setError] = useState('')
  const dispatch = useDispatch();
  
  const signup = async (event, user) =>{
    event.preventDefault()
    console.log(user)
    const response = await fetch('http://localhost:3001/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
    const json = await response.json()

    if(response.ok){
      setUser(json)
      setError(null)
      dispatch({type: 'LOGIN', payload:{username:json.username, loggedIn: true, user: json}})
      console.log('successfully signed up!')
    }else{
      setError(json.error)
      console.log(json.error)
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex item-center justify-center my-20">
        <div className="w-1/3">
        <Card>
            <h5 className="text-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Sign Up
            </h5>
            <form className="flex flex-col gap-4" onSubmit={(event)=> signup(event, user)}>
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

            <div>
                <div className="mb-2 block">
                <Label htmlFor="repeatePassword" value="Repeate password" />
                </div>
                <TextInput
                id="repeatePassword"
                type="password"
                name="repeatePassword"
                placeholder="repeate password"
                required={true}
                value={user.repeatePassword}
                onChange={handleChange}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
            {errorMessage && <p className="text-center  text-red-600 border border-red-400 rounded-md">{errorMessage}</p>}
            </form>
            <p className="mt-2 text-center">
                Already have an account? 
                <Link to="/login" className="text-green-500"> Login. </Link>
            </p>
        </Card>
        </div>
    </div>
  );
};

export default SignUp;
