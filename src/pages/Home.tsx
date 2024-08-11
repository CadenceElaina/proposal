import React, { useState } from "react";
import CurrentIO from "../components/CurrentIO";
import { IOs } from "../data/InvestmentObjectives";
import { Clients } from "../data/Clients";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentClient, setCurrentClient] = useState(null);

  // Filter clients based on the search term
  const filteredClients = Clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectClient = (client) => {
    setCurrentClient(client);
    setSearchTerm(""); // Clear the search term
  };

  const handleSearch = () => {
    const foundClient = Clients.find(
      (client) => client.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundClient) {
      setCurrentClient(foundClient);
      setSearchTerm(""); // Clear the search term
    } else {
      alert("Client not found. Would you like to create a new record?");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Search:</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter client's name"
      />
      <button onClick={handleSearch}>Search!</button>
      {searchTerm && filteredClients.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "0",
            listStyleType: "none",
            marginTop: "5px",
          }}
        >
          {filteredClients.map((client) => (
            <li
              key={client.id}
              onClick={() => handleSelectClient(client)}
              style={{
                cursor: "pointer",
                padding: "5px",
                backgroundColor: "#667",
                margin: "2px 0",
              }}
            >
              {client.name}
            </li>
          ))}
        </ul>
      )}
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
      {!currentClient && searchTerm && filteredClients.length === 0 && (
        <p>Client not found. Would you like to create a new record?</p>
      )}
    </div>
  );
};

export default Home;
