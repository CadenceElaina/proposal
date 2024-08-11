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
    } else {
      alert("Client not found. Would you like to create a new record?");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter client's name"
        onFocus={() => setDropdownOpen(true)} // Open dropdown on focus
        onBlur={() => setTimeout(() => setDropdownOpen(false), 100)} // Delay closing for click events
      />
      <button className="button" onClick={handleSearch}>
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
