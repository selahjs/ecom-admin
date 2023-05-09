import React, {useState, useEffect} from 'react'

import Table from '../components/Table'
import ModalC from '../components/ModalC';
import Button from "../components/Button";
import NewModal from '../components/NewModal';
import Pagination from '../components/Pagination';
import data from '../api/data'

const Admin = () => {
  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
  const [tableData, setTableData] = useState([]);

  // Pagination Logic
  const indexOfLastData = currentPage * postPerPage;
  const indexOfFirstData = indexOfLastData - postPerPage;
  const currentDatas = tableData.slice(indexOfFirstData, indexOfLastData);
  const totalPages =  Math.ceil(tableData.length / postPerPage)

  useEffect(()=>{
      setTableData(JSON.parse(localStorage.getItem("products")))
  }, [])

  function onPreviousePage(){
    setCurrentPage(prevPage => prevPage - 1 )
  }
  function onNextPage(){
    setCurrentPage(prevPage => prevPage + 1)
  }
  function goToPage(pageNumber){
    setCurrentPage(pageNumber)
  }
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
      
      {show && <ModalC show={show} onClick={onClick} onClose={onClose} buttonName="Add Products" data={tableData}/>}
      {/* <NewModal /> */}
      
      <Table onClick={onClick} show={show} onClose={onClose} data={currentDatas}/>

      {tableData.length > 0 && 
        <Pagination 
          datas={currentDatas} 
          next={onNextPage} 
          prev={onPreviousePage} 
          pages={totalPages} 
          goToPage={goToPage}
        />
        }
    </>
  )
}

export default Admin