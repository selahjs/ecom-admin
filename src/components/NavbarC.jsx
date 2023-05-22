import react from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function NavbarC() {
  const { username, loggedIn, cartQuantity } = useSelector((state) => state);
  const dispatch = useDispatch();
  function logout() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <Navbar fluid={true} rounded={true}>
        <Link to="/" className="flex">
          {/* <Navbar.Brand href="/"> */}
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FreeEcom
          </span>
          {/* </Navbar.Brand> */}
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* display username and logout button when logged in */}
          {loggedIn && (
            <>
              <h3 className="text-green-600">{username}</h3>
              <button
                onClick={logout}
                className="text-red-600 px-2  hover:text-white hover:bg-red-600 hover:rounded-md"
              >
                Logout
              </button>
            </>
          )}
          <Link to="#">Categories</Link>
      
          <Link to="/popular">Popular</Link>

          {loggedIn && <Link to="/admin">Admin</Link>}

          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
          <Link to="/cart">
            <div className="flex justify-center items-center">
              <div className="relative py-0">
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {cartQuantity}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-1 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </Navbar.Collapse>
      </Navbar>
  );
}
