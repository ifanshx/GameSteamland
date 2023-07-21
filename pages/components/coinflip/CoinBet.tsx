import React from "react";

type CoinBetProps = {
  selectedBet: number;
  handleBetSelection: (bet: number) => void;
};

const CoinBet: React.FC<CoinBetProps> = ({
  selectedBet,
  handleBetSelection,
}) => {
  return (
    <div className="mb-4">
      <p className="text-center">Selected bet: {selectedBet} coin</p>
      <div className="grid grid-flow-col justify-center gap-3 mt-4">
        {[1, 2, 4, 8, 10].map((bet) => (
          <button
            key={bet}
            className={`uppercase rounded-md py-2 px-6 border-[1px] font-bold text-sm md:text-xl shadow-lg hover:scale-105 ${
              selectedBet === bet ? "bg-yellow-400 text-white" : "bg-white"
            }`}
            onClick={() => handleBetSelection(bet)}
          >
            {bet}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoinBet;
