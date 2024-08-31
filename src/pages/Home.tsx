import React, { useState } from "react";
import CurrentIO from "../components/CurrentIO";
import SearchClient from "../components/SearchClient";
import { IOs } from "../data/InvestmentObjectives";
import Navigation from "../components/navigation/Navigation";

const Home = () => {
  const [currentClient, setCurrentClient] = useState(null);

  return (
    <div>
      <Navigation />
      <h1>Home</h1>

      <SearchClient setCurrentClient={setCurrentClient} />{" "}
      {/* Use the SearchClient component */}
      {currentClient && (
        <>
          <h3>
            Selected Client: {currentClient.name}
            <br />
            Client's Investment Objective:{" "}
            {IOs[currentClient.investmentObjective].name}
          </h3>
          <CurrentIO currentClientIO={currentClient.investmentObjective} />
        </>
      )}
    </div>
  );
};

export default Home;