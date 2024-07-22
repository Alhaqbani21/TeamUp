import React from 'react';
import { addStadiumsToFirestore } from '../services/stadiumService';

const AddStadiumsButton = () => {
  const handleClick = () => {
    addStadiumsToFirestore();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Stadiums to Firestore
    </button>
  );
};

export default AddStadiumsButton;
