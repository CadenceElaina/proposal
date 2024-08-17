import React, { useState } from "react";
import CurrentIO from "../components/CurrentIO";
import SearchClient from "../components/SearchClient"; // Import the SearchClient component
import { IOs } from "../data/InvestmentObjectives";
import Navigation from "../components/Navigation";

const Home = () => {
  const [currentClient, setCurrentClient] = useState(null);

  return (
    <div>
      <h1>Home</h1>
      <Navigation />
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
      {!currentClient && (
        <p>Client not found. Would you like to create a new record?</p>
      )}
    </div>
  );
};

export default Home;
