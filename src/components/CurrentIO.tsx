import React, { useState } from "react";
import { IOs } from "../data/InvestmentObjectives";
// object lists IOs and ideal ratios
// calculate curr port and see which io is closest

const CurrentIO = ({ currentClientIO }) => {
  const [currentIO, setCurrentIO] = useState("conservativeIncome");
  const [assetAllocation, setAssetAllocation] = useState(
    IOs[currentClientIO].assetAllocation
  );

  const handleChange = (event) => {
    const selectedIO = event.target.value;
    setCurrentIO(selectedIO);
    setAssetAllocation(IOs[selectedIO].assetAllocation);
  };

  return (
    <div>
      <table className="table">
        <caption>
          <label htmlFor="investment-objectives">
            Select Investment Objective:
          </label>
          <select
            id="investment-objectives"
            value={currentIO}
            onChange={handleChange}
          >
            {Object.keys(IOs).map((key) => (
              <option key={key} value={key}>
                {IOs[key].name}
              </option>
            ))}
          </select>
        </caption>
        <thead>
          <tr>
            <th scope="col">Asset</th>
            <th scope="col">Percentage of Portfolio</th>
          </tr>
        </thead>
        <tbody>
          {assetAllocation.map(({ asset, percentage }) => (
            <tr key={asset}>
              <td>{asset}</td>
              <td>{(percentage * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentIO;
