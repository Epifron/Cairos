import React from "react";
import Head from "next/head";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Notes</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div className="mt-12 w-full flex-wrap flex justify-center">
          <p className="pt-2.5">Create a new note</p>
          <div className="pl-4">
            <Link href="/form">
              <button className="px-6 py-3 rounded-lg border border-gray-500 shadow-lg hover:shadow">
                <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 w-full flex-wrap flex justify-center">
          <p>Notes</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
