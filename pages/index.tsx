import { useState } from "react";
import Head from "next/head";
import CoinFlipComponent from "./components/CoinFlipComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vent Flip - Steamland</title>
      </Head>
      <CoinFlipComponent />
    </div>
  );
}
