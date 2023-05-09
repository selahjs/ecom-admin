import React, {useState} from "react";
import { Modal, Label, TextInput, Checkbox } from "flowbite-react";
import Button from "./Button";

const ModalC = (props) => {
  // the state of the modal is controlled in the parent i.e. the component that's calling the modal
  const [formData, setFormData] = useState({
    productTitle: "",
    productPrice: "",
    productCategory: "",
    productStock: ""
  })

  function handleChange(e){
    const {name, value} = e.target;
    setFormData(prevData=>{
        return {
          ...prevData,
          // props.data.length means the id of the next product to be added can be extracted from the last
          // products id + 1...
          id: props.data.length,
          [name] : value,
        }
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const response = await fetch('http://localhost:3002/products',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
    })
    const json = await response.json()

    if(response.ok){
        //in real life application when a client updates a data collection, the server sends the 
        // new collection of data therefore the localStorage is updated with the new data
        // but here we're mimicking that concept, i.e. updating the localStorage
        const temp = JSON.parse(localStorage.getItem("products"))
        temp.push(formData)
        localStorage.setItem("products", JSON.stringify(temp))
    }else{
      console.log('error')
    }
  }
  return (
    <React.Fragment>
      <Modal show={props.show} size="xl" popup={true} onClose={props.onClose}>
        <Modal.Header />
        <Modal.Body>
            <form className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8" onSubmit={handleSubmit}>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add Products
              </h3>

              {/* Product name input */}
              <div>
                <div className="mb-2 block">
                  <Label  value="Product name" />
                </div>
                <TextInput
                  name="productTitle"
                  id="productTitle"
                  key="productTitle"
                  placeholder="product name"
                  required={true}
                  value={formData.productTitle}
                  onChange={handleChange}
                />
              </div>

              {/* Prodcut price input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productPrice" value="Product price" />
                </div>
                <TextInput
                  name="productPrice"
                  id="productPrice"  
                  key="productPrice"  
                  placeholder="product price"
                  required={true} 
                  value={formData.productPrice}
                  onChange={handleChange} 
                  />
              </div>

              {/* Product Category input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productCategory" value="Product category" />
                </div>
                <TextInput
                  name="productCategory"
                  id="productCategory"  
                  key="productCategory"  
                  placeholder="product category"
                  required={true} 
                  value={formData.productCategory}
                  onChange={handleChange} 
                  />
              </div>

              {/* Stock amount input */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productStock" value="Stock amount" />
                </div>
                <TextInput
                  name="productStock"
                  id="productStock"  
                  key="productStock"  
                  placeholder="number of product in stock"
                  required={true} 
                  value={formData.productStock}
                  onChange={handleChange} 
                  />
              </div>

              {/* image input
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Product image" />
                </div>
                <input
                  name="imgUrl"
                  value={formData.imgUrl}
                  onChange={handleChange} 
                  id="image" 
                  type="file" 
                  required={true} />
              </div> */}

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
