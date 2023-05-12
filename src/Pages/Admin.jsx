import React, {useState, useEffect} from 'react'

import Table from '../components/Table'
import ModalC from '../components/ModalC';
import Button from "../components/Button";
import SearchInput from '../components/SearchInput';
import Sort from '../components/Sort';
import NewModal from '../components/NewModal';
import Pagination from '../components/Pagination';

const Admin = () => {
  //search is impelemented in Table.jsx
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const [tableData, setTableData] = useState([]);

  // Pagination Logic
  const indexOfLastData = currentPage * postPerPage;
  const indexOfFirstData = indexOfLastData - postPerPage;
  const currentDatas = tableData.slice(indexOfFirstData, indexOfLastData);
  const totalPages =  Math.ceil(tableData.length / postPerPage)

  //get data from localStorage
  useEffect(()=>{
      setTableData(JSON.parse(localStorage.getItem("products")))
  }, [])

  // Pagination methods
  function onPreviousePage(){
    setCurrentPage(prevPage => prevPage - 1 )
  }
  function onNextPage(){
    setCurrentPage(prevPage => prevPage + 1)
  }
  function goToPage(pageNumber){
    setCurrentPage(pageNumber)
  }

  // Modal methods
  function onClick(){
   setShow(true)
  }
  function onClose(){
    setShow(false)
  }

  //sort functionality
  function sortByPrice(){
    const sortedByPrice = currentDatas.sort((a,b)=> a.productPrice > b.productPrice ? 1: -1)
    setTableData(sortedByPrice)
  }
  function sortByName(){
    const sortedByName = currentDatas.sort((a,b)=> a.productTitle > b.productTitle ? 1: -1)
    setTableData(sortedByName)
  }
  function sortByID(){
    const sortedByID = currentDatas.sort((a,b)=> a.id > b.id ? 1: -1)
    setTableData(sortedByID)
  }

  return (
    <>
      {/* the admin controls the add product button as well as the edit button on the table */}
      <div className='flex items-center'>
        <SearchInput setSearch={setSearch}/>
        <Sort sortByPrice = {sortByPrice} sortByName={sortByName} sortByID={sortByID}/>
        <Button onClick={onClick} buttonName="Add Products"/>
      </div>
      {show && <ModalC show={show} onClick={onClick} onClose={onClose} buttonName="Add Products" data={tableData}/>}
      {/* <NewModal /> */}
      
      <Table onClick={onClick} show={show} onClose={onClose} data={currentDatas} searchByName={search}/>

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