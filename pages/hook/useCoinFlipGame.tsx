import { useState, useEffect } from "react";
import { toast } from "react-toastify";

type HistoryItem = {
  result: string;
  bet: number;
  won: boolean;
};

const useCoinFlipGame = () => {
  const [balance, setBalance] = useState(100);
  const [selectedSide, setSelectedSide] = useState("");
  const [selectedBet, setSelectedBet] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [coinImage, setCoinImage] = useState("/coin/heads.png"); // default head

  const winPercentage = 50;

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
      const random = Math.random() * 100;
      let result: string;
      let won: boolean;

      if (random < winPercentage) {
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

      setCoinImage(result === "Heads" ? "/coin/heads.png" : "/coin/Tails.png");

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

  return {
    balance,
    selectedSide,
    selectedBet,
    history,
    isFlipping,
    coinImage,
    handleSideSelection,
    handleBetSelection,
    handleCoinFlip,
  };
};

export default useCoinFlipGame;
