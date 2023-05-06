import React, {useState} from 'react'
import Table from '../components/Table'
import ModalC from '../components/ModalC';
import Button from "../components/Button";

const Admin = () => {
  const [show, setShow] = useState(false)
  function onClick(){
   setShow(true)
  }

  function onClose(){
    setShow(false)
  }
  return (
    <>
      {/* the admin controls the add product button as well as the edit button on the table */}
      <Button onClick={onClick} buttonName="Add Products"/>
      {show && <ModalC show={show} onClick={onClick} onClose={onClose} buttonName="Add Products"/>}
      
      <Table onClick={onClick} show={show} onClose={onClose}/>
    </>
  )
}

export default Admin