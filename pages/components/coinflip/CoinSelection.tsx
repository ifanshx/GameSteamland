import React from "react";

type CoinSelectionProps = {
  selectedSide: string;
  handleSideSelection: (side: string) => void;
};

const CoinSelection: React.FC<CoinSelectionProps> = ({
  selectedSide,
  handleSideSelection,
}) => {
  return (
    <div className="mb-4">
      <p className="text-center">Selected side: {selectedSide}</p>
      <div className="grid grid-flow-col justify-center gap-3 mt-8">
        <button
          className={`uppercase rounded-md py-2 px-6 border-[1px] font-bold text-sm md:text-xl shadow-lg hover:scale-105 ${
            selectedSide === "Heads" ? "bg-yellow-400" : "bg-white"
          }`}
          onClick={() => handleSideSelection("Heads")}
        >
          Heads
        </button>
        <button
          className={`uppercase rounded-md py-2 px-6 border-[1px] font-bold text-sm md:text-xl shadow-lg hover:scale-105 ${
            selectedSide === "Tails" ? "bg-yellow-400" : "bg-white"
          }`}
          onClick={() => handleSideSelection("Tails")}
        >
          Tails
        </button>
      </div>
    </div>
  );
};

export default CoinSelection;
