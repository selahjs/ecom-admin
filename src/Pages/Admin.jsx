import React, {useState, useEffect} from 'react'
import Table from '../components/Table'
import ModalC from '../components/ModalC';
import Button from "../components/Button";
import NewModal from '../components/NewModal';
import data from '../api/data'

const Admin = () => {
  const [show, setShow] = useState(false)
  const [tableData, setTableData] = useState([]);

  useEffect(()=>{
      setTableData(JSON.parse(localStorage.getItem("products")))
  }, [])

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
      {/* <NewModal /> */}
      
      <Table onClick={onClick} show={show} onClose={onClose} data={tableData}/>
    </>
  )
}

export default Admin