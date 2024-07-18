import { useState } from 'react';

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from 'firebase/firestore';

function LoginFireBase() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/Home');
      } catch (error) {
        setError(error.message);
        console.error('Error logging in: ', error);
      }
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user document exists in users collection
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        // Add user to users collection
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          joinedAt: formatDate(new Date().toISOString()),
          location: 'Saudi Arabia, Riyadh',
          points: 0,
          matchesPlayed: 0,
        });
      }

      // Check if the user document exists in leaderboard collection
      const leaderboardDoc = await getDoc(doc(db, 'leaderboard', user.uid));
      if (!leaderboardDoc.exists()) {
        // Add user to leaderboard collection
        await setDoc(doc(db, 'leaderboard', user.uid), {
          name: user.displayName,
          points: 0,
        });
      }

      navigate('../Home');
    } catch (error) {
      console.error('Error signing up with Google: ', error);
      // Handle errors appropriately
    }
  }

  // to format the date for the JoindAt
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div className="min-h-screen bg-[#e3e6e6] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-sm:max-w-xl max-sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a0e2c6] to-[#007955] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl max-sm:rounded-3xl max-sm:-rotate-6"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 max-sm:p-20 max-sm:rounded-3xl">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-bold">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Link to={'/signup'}>
                    <h1 className="text-sm text-black">
                      Don't have an account? Sign up
                    </h1>
                  </Link>
                  <div className="relative">
                    <button
                      onClick={handleLogin}
                      className="middle none center mr-3 rounded-lg bg-[#007955] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#508172] transition-all hover:shadow-lg hover:shadow-[#508172] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleGoogleSignIn}
                      className="middle none center rounded-lg bg-[#db4437] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#c33c28] transition-all hover:shadow-lg hover:shadow-[#c33c28] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Login with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFireBase;
