import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Label, TextInput, Button, Checkbox } from "flowbite-react";

const SignUp = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState('')
  useEffect(()=>{
    setMessage(props.error)
  },[props.error])

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
    <div className="w-1/3">
      <Card>
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Sign in
        </h5>
        <form className="flex flex-col gap-4" onSubmit={(event)=> props.login(event, user)}>
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
          <Button type="submit">Submit</Button>
          {message && <p className="text-center text-green-400 border border-green-400 rounded-md">{message}</p>}
        </form>
        <p className="mt-5 text-center">Forgot your password? <a href="/forgot-password">Click here</a></p>
        <p className="mt-5 text-center">Already have an account? <a href="/forgot-password">Login</a></p>
      </Card>
    </div>
  );
};

export default Login;
