import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Card, Label, TextInput, Button, Checkbox } from "flowbite-react";

const ForgotPassword = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState('')
  useEffect(()=>{
    setMessage(props.error)
  },[props.error])

  function recover(event, user){
    event.preventDefault()
    console.log('recovery in process')
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
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Password Recovery
            </h5>
            <form className="flex flex-col gap-4" onSubmit={(event)=> recover(event, user)}>
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
            <Button type="submit">Submit</Button>
            {message && <p className="text-center text-green-400 border border-green-400 rounded-md">{message}</p>}
            </form>
        </Card>
        </div>
    </div>
  );
};

export default ForgotPassword;
