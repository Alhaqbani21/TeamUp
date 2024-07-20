import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function fetchLeaderboard() {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, orderBy('points', 'desc'), limit(10));
  const querySnapshot = await getDocs(q);

  const leaderboard = [];
  querySnapshot.forEach((doc) => {
    leaderboard.push({ id: doc.id, ...doc.data() });
  });

  return leaderboard;
}
