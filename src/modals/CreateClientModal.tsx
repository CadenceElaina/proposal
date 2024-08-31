import React, { useEffect, useRef, useState } from "react";
import { IOs } from "../data/InvestmentObjectives";

const CreateClientModal = ({ isOpen, onClose, onSubmit, newClient, handleInputChange, handleOwnsInvestmentsChange }) => {
  const modalRef = useRef(null);
  const [ownsInvestments, setOwnsInvestments] = useState(false);
  const [investments, setInvestments] = useState(["", "", "", "", ""]); // 5 initial symbols

  const handleInvestmentChange = (index, value) => {
    const updatedInvestments = [...investments];
    updatedInvestments[index] = value;
    setInvestments(updatedInvestments);
  };

  const handleAddInvestment = () => {
    setInvestments([...investments, ""]); // Add a new empty symbol to the form
  };

  const handleRemoveInvestment = (index) => {
    const updatedInvestments = investments.filter((_, i) => i !== index);
    setInvestments(updatedInvestments);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, investments); // Pass investments back to parent component on submit
  };

  // Close modal if clicked outside the content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Call onClose if clicked outside modal
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <h2>Create New Client</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Client Name:
              <input
                type="text"
                name="name"
                value={newClient.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>Do you own any investments?</label>
            <input
              type="radio"
              name="ownsInvestments"
              value="yes"
              checked={ownsInvestments === true}
              onChange={() => {
                setOwnsInvestments(true);
                handleOwnsInvestmentsChange(true); // Pass this state back to the parent
              }}
            /> Yes
            <input
              type="radio"
              name="ownsInvestments"
              value="no"
              checked={ownsInvestments === false}
              onChange={() => {
                setOwnsInvestments(false);
                handleOwnsInvestmentsChange(false); // Pass this state back to the parent
              }}
            /> No
          </div>

          {ownsInvestments && (
            <div>
              <label>List your investments:</label>
              {investments.map((investment, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`Investment Symbol ${index + 1}`}
                    value={investment}
                    onChange={(e) => handleInvestmentChange(index, e.target.value)}
                  />
                  <button type="button" onClick={() => handleRemoveInvestment(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddInvestment}>
                Add Another Investment
              </button>
            </div>
          )}

          <div>
            <label>
              Investment Objective:
              <select
                name="investmentObjective"
                value={newClient.investmentObjective}
                onChange={handleInputChange}
                required
              >
                {Object.keys(IOs).map((key) => (
                  <option key={key} value={key}>
                    {IOs[key].name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button className="modal-button" type="submit">
            Create Client
          </button>
          <button className="modal-button" type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClientModal;
