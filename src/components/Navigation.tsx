import { useState } from "react";
import { Link } from "react-router-dom";
import CreateClientModal from "../modals/CreateClientModal";

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    investmentObjective: "",
    ownsInvestments: false, // New field for owning investments
    investments: [], // New field for investment symbols
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleFormSubmit = (e, investments) => {
    e.preventDefault();
  
    // Use the previous state to update the client with investments
    setNewClient((prevClient) => {
      const updatedClient = { 
        ...prevClient, 
        investments: prevClient.ownsInvestments ? investments : [] // Set investments if ownsInvestments is true
      };
      
      // Log the updated client details
      console.log("New client created:", updatedClient);
  
      return updatedClient;
    });
  
    setIsModalOpen(false); // Close modal after submitting
  };
  

  const handleOwnsInvestmentsChange = (value) => {
    setNewClient({ ...newClient, ownsInvestments: value });
  };

  return (
    <>
      <nav className="navigation">
        <div>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>
              <button onClick={() => setIsModalOpen(true)}>
                Create new client
              </button>
            </li>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
          </ul>
        </div>
      </nav>

      <CreateClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        newClient={newClient}
        handleInputChange={handleInputChange}
        handleOwnsInvestmentsChange={handleOwnsInvestmentsChange} // Pass handler for investment ownership
      />
    </>
  );
};

export default Navigation;
