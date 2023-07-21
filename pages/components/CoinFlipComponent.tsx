import React from "react";
import CoinImage from "./coinflip/CoinImage";
import CoinSelection from "./coinflip/CoinSelection";
import CoinBet from "./coinflip/CoinBet";
import CoinFlipButton from "./coinflip/CoinFlipButton";
import WalletButtons from "./WalletButtons";
import History from "./coinflip/History";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCoinFlipGame from "../hook/useCoinFlipGame";

const CoinFlipComponent: React.FC = () => {
  const {
    balance,
    selectedSide,
    selectedBet,
    history,
    isFlipping,
    coinImage,
    handleSideSelection,
    handleBetSelection,
    handleCoinFlip,
  } = useCoinFlipGame();

  return (
    <div
      className="min-h-screen bg-cover object-cover flex items-center justify-center"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="flex flex-col space-y-3">
        <div className="max-w-md  w-auto mx-auto bg-white  bg-opacity-95 border-4 border-black shadow p-2 rounded-3xl">
          <CoinImage
            imageSrc={coinImage}
            alt={selectedSide}
            isFlipping={isFlipping}
          />
          <h1 className="text-2xl font-bold mb-6 text-center">VENT FLIP</h1>
          <div className="mb-4">
            <p className="text-center">Balance: {balance} coin</p>
          </div>
          <CoinSelection
            selectedSide={selectedSide}
            handleSideSelection={handleSideSelection}
          />
          <CoinBet
            selectedBet={selectedBet}
            handleBetSelection={handleBetSelection}
          />
          <CoinFlipButton
            isFlipping={isFlipping}
            handleCoinFlip={handleCoinFlip}
          />
          <div className="absolute top-0 right-4 mt-2">
            <WalletButtons />
          </div>
        </div>
        <History history={history} />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CoinFlipComponent;
