import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  BackpackWalletAdapter,
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import '@/styles/globals.css'
import "@solana/wallet-adapter-react-ui/styles.css";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useMemo } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = "https://api.devnet.solana.com";
  const wallets = useMemo(
    () => [
      new LedgerWalletAdapter(),
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new BackpackWalletAdapter(),
      new SlopeWalletAdapter(),
      new GlowWalletAdapter
    ],
    [network]
  );

  return (
    <WalletProvider wallets={wallets}>
        <WalletModalProvider>
           <Component {...pageProps} />
        </WalletModalProvider>
    </WalletProvider>
  )
}
