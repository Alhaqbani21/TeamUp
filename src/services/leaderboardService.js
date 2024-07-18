import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function fetchLeaderboard() {
  const leaderboardRef = collection(db, 'leaderboard');
  const q = query(leaderboardRef, orderBy('points', 'desc'), limit(10));
  const querySnapshot = await getDocs(q);

  const leaderboard = [];
  querySnapshot.forEach((doc) => {
    leaderboard.push({ id: doc.id, ...doc.data() });
  });

  return leaderboard;
}
