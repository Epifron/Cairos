import React from "react";
import Head from "next/head";
import Link from "next/link";

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Create a note</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div className="mt-1 w-full flex-wrap flex justify-center">
          <Link href="/home">
            <a>Home</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Next;
