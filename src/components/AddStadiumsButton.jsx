import React from 'react';
import { addStadiumsToFirestore } from '../services/stadiumService';
import LottieAnimation from './LottieAnimation';

const AddStadiumsButton = () => {
  const handleClick = () => {
    addStadiumsToFirestore();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Stadiums to Firestore
      </button>
      <LottieAnimation />
    </>
  );
};

export default AddStadiumsButton;
