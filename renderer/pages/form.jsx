import React from "react";
import Head from "next/head";
import Link from "next/link";

import { BsPlusSquare, BsArrowLeft } from "react-icons/bs";

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Create a note</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div className="mt-12 w-full flex-wrap flex justify-center">
          <Link href="/home">
            <button className="px-6 py-3 rounded-lg border border-gray-500 shadow-lg hover:shadow">
              <BsArrowLeft />
            </button>
          </Link>
          <p className="pt-2.5 pl-5">Back to notes</p>
        </div>
        <div className="mt-12 w-full flex-wrap flex justify-center">
          <p className="pt-2.5">Create a note</p>
          <div className="pl-4">
            <button className="px-6 py-3 rounded-lg border border-gray-500 shadow-lg hover:shadow">
              <BsPlusSquare />
            </button>
          </div>
        </div>
        <div className="mx-auto mt-10">
          <input
            type="text"
            className="p-4 block shadow bg-input rounded-lg border border-gray-500 my-1"
            placeholder="Text"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Next;
