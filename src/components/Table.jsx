import { useState, useEffect } from "react";

// import data from '../api/data'
import ModalC from "./ModalC";

export default function Table(props) {
  //filter data
  const search = props.searchByName.toLowerCase();
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  
  //modal configration
  function onClick() {
    setShow(true);
  }

  function onClose() {
    setShow(false);
  }
  //modal config ends here...

  function onDelete(id) {
    // we can send delete request by concating id as a query string
    // and we can update the local storage like this
    const oldData = JSON.parse(localStorage.getItem("products"));
    const newData = oldData.filter((data) => data.id !== id);
    localStorage.setItem("products", JSON.stringify(newData));
    setTableData(newData);
  }

  // getting data
  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  //select all checkbox handler
  function selectAllToggle() {
    setSelectAll((selected) => {
      setTableData(prevData=> (
        prevData.map(item=> (
          {
            ...item,
            selected: !selected
          }
        ))
      ))
      return !selected;
    });
    
  }

  //individual item checkbox toggler
  function toggleChecked(event,id) {
    const { name, checked } = event.target;
    setTableData(prevData => {
      return prevData.map(item=>{
        console.log(name, item.selected)
        return {
          ...item,
          [name]: id === item.id? checked : item.selected
        }
      })
    });
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    name="selectAll"
                    checked={selectAll}
                    onChange={selectAllToggle}
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Available
              </th>
              <th scope="col" className="px-6 py-3">
                productPrice
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {/* This tableData can be filtered using search */}
          {tableData &&
            tableData
              .filter((item) => {
                return search === ""
                  ? item
                  : item.productTitle.toLowerCase().startsWith(search);
              })
              .map((table) => (
                <tbody key={table.id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    {/* Checkbox */}
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          name={"selected"}
                          onChange={(event)=>toggleChecked (event,table.id)}
                          checked={table.selected}
                          id="checkbox-table-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <p className="mx-3">{table.id + 1}</p>
                        <label
                          htmlFor="checkbox-table-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {table.productTitle}
                    </th>
                    <td className="px-6 py-4">{table.productColor}</td>
                    <td className="px-6 py-4">{table.productCategory}</td>
                    <td className="px-6 py-4">{table.available}</td>
                    <td className="px-6 py-4">${table.productPrice}</td>
                    <td className="flex items-center px-6 py-4 space-x-3">
                      <button
                        onClick={onClick}
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      {show && (
                        <ModalC
                          show={show}
                          onClose={onClose}
                          buttonName="Update product"
                        />
                      )}
                      <button
                        onClick={() => onDelete(table.id)}
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
        </table>
      </div>
    </section>
  );
}
