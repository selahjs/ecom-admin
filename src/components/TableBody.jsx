import { useState } from "react"
export default function Table(props){
    console.log(props.table.selected)
    const [selected, setSelected] = useState(props.table.selected)
    function handleChange(){
        
    }
    return (
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                             onChange={()=> console.log(props.table.selected)}
                             checked={props.table.selected}
                             id="checkbox-table-search-1" 
                             type="checkbox" 
                             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {props.table.productName}
                    </th>
                    <td className="px-6 py-4">
                        {props.table.color}
                    </td>
                    <td className="px-6 py-4">
                        {props.table.category}
                    </td>
                    <td className="px-6 py-4">
                        {props.table.accessories}
                    </td>
                    <td className="px-6 py-4">
                        {props.table.available}
                    </td>
                    <td className="px-6 py-4">
                        ${props.table.price}
                    </td>
                    <td className="px-6 py-4">
                        {props.table.weight}
                    </td>
                    <td className="flex items-center px-6 py-4 space-x-3">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                    </td>
                </tr>
            </tbody>

    )
}