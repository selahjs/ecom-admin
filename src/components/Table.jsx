import { useState } from "react"
import data from '../assets/data'
export default function Table(){
    const [selectAll, setSelectAll] = useState(false)
    const [tableData, setTableData] = useState(data);

    function handleChange(event) {
        // console.log(event) //sentheticEvent
        setSelectAll(prevData=> {
            return !prevData
        })
    }

    function toggleChecked(event){
        const {name, checked} = event.target
        console.log(checked)
        setTableData(prevTableData => {
            return prevTableData.map(tableData=>{
                    if(tableData.productName === name){
                        return {
                           ...tableData,
                           [name]: checked
                       }
                    }else{
                        return tableData
                    }
            })
        })
    }

    // function toggle(event,source) {
    //     const checkboxes = document.getElementsByName('checkbox-all-search');
    //     console.log(event.target.checked)
    //     for(var checkbox in checkboxes)
    //       checkbox.checked = source.checked;
    //   }
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
                                            onChange={handleChange}
                                            id="checkbox-all-search" 
                                            type="checkbox" 
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
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
                                    Accesories
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Weight
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {tableData.map((table,i)=>(
                            <tbody key={i}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                            name={table.productName}
                                            onChange={toggleChecked}
                                            checked={table.selected}
                                            id={i} 
                                            type="checkbox" 
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {table.productName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {table.color}
                                    </td>
                                    <td className="px-6 py-4">
                                        {table.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {table.accessories}
                                    </td>
                                    <td className="px-6 py-4">
                                        {table.available}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${table.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {table.weight}
                                    </td>
                                    <td className="flex items-center px-6 py-4 space-x-3">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </section>

    )
}