import React from "react";
import { Modal, Label, TextInput, Checkbox } from "flowbite-react";
import Button from "./Button";

const ModalC = (props) => {
  // the state of the modal is controlled in the parent i.e. the component that's calling the modal
  return (
    <React.Fragment>
      <Modal show={props.show} size="xl" popup={true} onClose={props.onClose}>
        <Modal.Header />
        <Modal.Body>
            <form className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add Products
              </h3>

              {/* Product name input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Product name" />
                </div>
                <TextInput
                  id="name"
                  placeholder="product name"
                  required={true}
                />
              </div>

              {/* Prodcut price input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Product price" />
                </div>
                <TextInput 
                  id="price"  
                  placeholder="product price"
                  required={true} />
              </div>

              {/* Product Category input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Product category" />
                </div>
                <TextInput 
                  id="category"  
                  placeholder="product category"
                  required={true} />
              </div>

              {/* Stock Category input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="stock-amount" value="Stock amount" />
                </div>
                <TextInput 
                  id="stock-amount"  
                  placeholder="number of product in stock"
                  required={true} />
              </div>

              {/* Stock input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Product image" />
                </div>
                <input id="image" type="file" required={true} />
              </div>

              {/* Add product button */}
              <div className="w-full">
                <Button buttonName={props.buttonName} action="addProduct"/>
              </div>
            </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ModalC;
