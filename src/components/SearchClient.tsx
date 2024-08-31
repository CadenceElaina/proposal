import React, { useState } from "react";
import { Clients } from "../data/Clients";

const SearchClient = ({ setCurrentClient }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter clients based on the search term
  const filteredClients = Clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectClient = (client) => {
    setCurrentClient(client);
    setSearchTerm(""); // Clear the search term
    setDropdownOpen(false); // Close the dropdown
  };

  const handleSearch = () => {
    const foundClient = Clients.find(
      (client) => client.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundClient) {
      setCurrentClient(foundClient);
      setSearchTerm(""); // Clear the search term
      setDropdownOpen(false); // Close the dropdown
    } else if (filteredClients.length === 1) {
      handleSelectClient(filteredClients[0]);
    } else if (filteredClients.length > 1) {
      setDropdownOpen(true);
    } else {
      alert("Client not found. Would you like to create a new record?");
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setDropdownOpen(true); // Open dropdown as user types
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="input"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter client's name"
        onFocus={() => setDropdownOpen(true)} // Open dropdown on focus
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button className="main-content-button" onClick={handleSearch}>
        Search!
      </button>
      {dropdownOpen && (
        <ul className="dropdown">
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <li key={client.id} onClick={() => handleSelectClient(client)}>
                {client.name}
              </li>
            ))
          ) : (
            <li style={{ padding: "5px" }}>No clients found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchClient;
