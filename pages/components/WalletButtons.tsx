import React from "react";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const WalletButtons: React.FC = () => {
  return (
    <div className="cursor-pointer my-2">
      <WalletMultiButtonDynamic />
    </div>
  );
};

export default WalletButtons;
