import React, { useState } from "react";
import { Modal, Label, TextInput, Checkbox } from "flowbite-react";
import Button from "./Button";

const ModalC = () => {
  const [show, setShow] = useState(false)
  function onClick(){
   setShow(true)
  }

  function onClose(){
    setShow(false)
  }
  return (
    <React.Fragment>
      {/* the Button below is a custome made component i.e not from flowbite */}
      <Button onClick={onClick} buttonName="Add Products"/>
      {/* <Button onClick={onClick}>Something</Button> */}
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Products
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required={true} />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="/modal"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button buttonName="Log in to your account"/>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <a
                href="/modal"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ModalC;
