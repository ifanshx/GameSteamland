import React, { useState } from "react";

type HistoryItem = {
  result: string;
  bet: number;
  won: boolean;
};

type HistoryProps = {
  history: HistoryItem[];
};

const History: React.FC<HistoryProps> = ({ history }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  const displayedHistory = showMore ? history : history.slice(0, 1);
  return (
    <div className="  justify-center text-center items-center">
      <div className="overflow-x-auto">
        <h2 className="bg-black rounded-lg shadow-md text-white text-lg font-bold mb-1">
          History
        </h2>
        <table className="w-full bg-black rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 text-sm font-medium text-gray-600">Bet</th>
              <th className="py-2 text-sm font-medium text-gray-600">Result</th>
              <th className="py-2 text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedHistory.map((item, index) => (
              <tr
                key={index}
                className={`${
                  item.won ? "bg-green-500" : "bg-red-500"
                } transition-all duration-200`}
              >
                <td className="py-3 text-sm font-semibold text-gray-800">
                  {item.bet} coin
                </td>
                <td className="py-3 text-sm font-semibold text-gray-800">
                  {item.result}
                </td>
                <td className="py-3 text-sm font-semibold">
                  {item.won ? "Won" : "Lost"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {history.length > 1 && (
        <div className="mt-3">
          <button
            className="w-auto p-1 rounded-lg bg-slate-100 text-sm text-gray-600 hover:text-gray-800 underline focus:outline-none"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : `Show ${history.length - 1} More`}
          </button>
        </div>
      )}
    </div>
  );
};

export default History;
