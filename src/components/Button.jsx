import React from 'react'

const Button = (props) => {
  return (
    <button className="ml-auto flex justify-center col-span-12 text-sm p-2 border rounded-lg bg-green-800 text-white "
      onClick={props.onClick}>
        {props.buttonName === "Add Products" ?
        (<svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1
            1 0 011-1z"
            clipRule="evenodd"
            ></path>
        </svg>)
        :
        ""
        }
        {props.buttonName}
      </button>
  )
}

export default Button