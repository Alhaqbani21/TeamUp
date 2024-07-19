// src/services/matchesService.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const fetchMatches = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'matches'));
    const matches = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return matches;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};
