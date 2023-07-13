import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

type HistoryItem = {
  result: string;
  bet: number;
  won: boolean;
};

export default function Coinflip() {
  const [balance, setBalance] = useState(20);
  const [selectedSide, setSelectedSide] = useState("");
  const [selectedBet, setSelectedBet] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleSideSelection = (side: string) => {
    setSelectedSide(side);
  };

  const handleBetSelection = (bet: number) => {
    setSelectedBet(bet);
  };

  const handleCoinFlip = () => {
    if (!selectedSide || selectedBet <= 0) {
      toast.error("Please make selections.");
      return;
    }

    if (selectedBet > balance) {
      toast.error("Not enough balance to place the bet.");
      return;
    }

    setIsFlipping(true);
    setTimeout(() => {
      const random = Math.random();
      let result: string;
      let won: boolean;

      if (random < 0.5) {
        result = "Heads";
        won = selectedSide === "Heads";
      } else {
        result = "Tails";
        won = selectedSide === "Tails";
      }

      const newBalance = won ? balance + selectedBet : balance - selectedBet;

      const newHistory: HistoryItem[] = [
        {
          result,
          bet: selectedBet,
          won,
        },
        ...history.slice(0, 4),
      ];

      setSelectedSide("");
      setSelectedBet(0);
      setBalance(newBalance);
      setHistory(newHistory);
      setIsFlipping(false);
    }, 2000);

    playCoinFlipSound(); // Play coin flip sound effect
  };

  const playCoinFlipSound = () => {
    const audio = new Audio("/sounds/coinflipsound.mp3");
    audio.play();
  };

  useEffect(() => {
    if (history.length > 0) {
      playResultSound(); // Play result sound effect
    }
  }, [history]);

  const playResultSound = () => {
    const audio = new Audio("/sounds/resultsound.mp3");
    audio.play();
  };

  return (
    <div
      className="min-h-screen bg-cover object-cover bg-gray-100  flex items-center justify-center"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="max-w-md w-[350px] mx-auto bg-white border border-black shadow p-6 rounded">
        {isFlipping ? (
          <div className="w-24 h-24 mx-auto animate-spin2">
            <Image
              src={`/coin/${selectedSide}.png`}
              alt="Coin"
              width={96}
              height={96}
              className="w-full h-full brightness-50"
            />
          </div>
        ) : (
          <div className="mb-4 text-center justify-center items-center">
            {history.length > 0 ? (
              <Image
                src={`/coin/${history[0].result}.png`}
                alt="Coin"
                width={96}
                height={96}
                className="w-24 h-24 mx-auto"
              />
            ) : (
              <Image
                src={`/coin/heads.png`}
                alt="Coin"
                width={96}
                height={96}
                className="w-24 h-24 mx-auto "
              />
            )}
          </div>
        )}

        <h1 className="text-2xl font-bold mb-6 text-center">Vent Flip</h1>

        <div className="mb-4">
          <p className="text-center">Balance: {balance} coin</p>
        </div>

        <div className="mb-4">
          <p className="text-center">Selected side: {selectedSide}</p>
          <div className="flex justify-center space-x-4">
            <button
              className={`px-2 py-1 border ${
                selectedSide === "Heads" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSideSelection("Heads")}
            >
              Heads
            </button>
            <button
              className={`px-2 py-1 border ${
                selectedSide === "Tails" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSideSelection("Tails")}
            >
              Tails
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-center">Selected bet: {selectedBet} coin</p>
          <div className="flex  justify-center space-x-4">
            {[1, 2, 4, 8, 10].map((bet) => (
              <button
                key={bet}
                className={`px-2 py-1 border rounded-md ${
                  selectedBet === bet ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleBetSelection(bet)}
              >
                {bet}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white"
            onClick={handleCoinFlip}
            disabled={isFlipping}
          >
            {isFlipping ? "Flipping..." : "Flip Coin"}
          </button>
        </div>

        <div className="absolute top-0 right-4 mt-2 bg-white  border border-black shadow p-6 w-[300px] justify-center text-center items-center rounded-lg ">
          <h2 className="text-lg font-bold mb-2">History</h2>
          {history.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className={`mb-2 flex items-center  text-center   ${
                item.won ? "text-green-500" : "text-red-500"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full mr-2 ${
                  item.won ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <p className="text-sm">
                Bet: {item.bet} coin | Result: {item.result} |{" "}
                {item.won ? "Won" : "Lost"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
