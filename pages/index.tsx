import { useState } from "react";
import Head from "next/head";
import Coinflip from "./components/Coinflip";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Vent Flip</title>
      </Head>
      <Coinflip />
    </div>
  );
}
