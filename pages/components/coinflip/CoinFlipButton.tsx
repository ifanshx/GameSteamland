import React from "react";

type CoinFlipButtonProps = {
  isFlipping: boolean;
  handleCoinFlip: () => void;
};

const CoinFlipButton: React.FC<CoinFlipButtonProps> = ({
  isFlipping,
  handleCoinFlip,
}) => {
  return (
    <div className="mb-4 flex justify-center">
      <button
        className={`${
          isFlipping ? "bg-gray-400 pointer-events-none" : "bg-yellow-400"
        } px-4 py-2 rounded-md mt-4 font-bold text-sm md:text-xl text-dark`}
        onClick={handleCoinFlip}
        disabled={isFlipping}
      >
        {isFlipping ? "Processing..." : "FLIP COIN"}
      </button>
    </div>
  );
};

export default CoinFlipButton;
