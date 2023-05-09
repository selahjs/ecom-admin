import React from "react";

const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex my-6 justify-center">
        <li>
          <a
            onClick={props.prev}
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
          >
            Previous
          </a>
        </li>
        {[...Array(props.pages)].map((data,i) => (
            <li key={i}>
            <a  onClick={() => props.goToPage(i+1)}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
            >
                {i+1}
            </a>
            </li>
        ))
        }
        
        <li>
          <a
            onClick={props.next}
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
