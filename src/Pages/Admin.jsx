import React, {useState} from 'react'
import Table from '../components/Table'
import ModalC from '../components/ModalC';

const Admin = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalC />
      <Table />
    </>
  )
}

export default Admin