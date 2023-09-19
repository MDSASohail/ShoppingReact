import React from "react";

function Newsletter() {
  return (
    <>
      <div className="mt-40 w-full h-96  flex justify-center items-center bg-rose-200 ">
        <div>
          <div className="header-text text-center">Newsletter</div>
          <p className="font-serif m-4 text-center">Get timely updates from your favorite prodocts</p>
          <div className="flex justify-center h-12 items-center  ">
            <input placeholder="Your email" className="h-full p-2 outline-none " type="email" name="" id="" />
            <div className="w-20 border-2 h-full flex justify-center items-center bg-green-600 text-white">
            <svg className="w-6 mx-2 cursor-pointer "
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m19.822 7.431-4.846-7A1 1 0 0 0 14.153 0H1a1 1 0 0 0-.822 1.569L4.63 8 .178 14.431A1 1 0 0 0 1 16h13.153a1.001 1.001 0 0 0 .823-.431l4.846-7a1 1 0 0 0 0-1.138Z" />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
