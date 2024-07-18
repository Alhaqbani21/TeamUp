import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import { setDoc, doc, getDoc } from 'firebase/firestore';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function signUp() {
    if (email && password && name) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Add user to users collection
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: email,
          joinedAt: formatDate(new Date().toISOString()),
          location: 'Saudi Arabia, Riyadh',
          points: 0,
          matchesPlayed: 0,
        });

        // Add user to leaderboard collection
        await setDoc(doc(db, 'leaderboard', user.uid), {
          name: name,
          points: 0,
        });

        navigate('../LoginFireBase');
      } catch (error) {
        console.error('Error signing up: ', error);
        // Handle errors appropriately
      }
    }
  }

  async function signUpGoogle() {
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

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <>
      {/* component */}
      <div className="min-h-screen bg-[#e3e6e6] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-sm:max-w-xl max-sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a0e2c6] to-[#007955] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl max-sm:rounded-3xl max-sm:-rotate-6"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 max-sm:p-20 max-sm:rounded-3xl">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-bold ">SignUp</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>

                  {/* Email Input */}
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

                  {/* Password Input */}
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

                  <Link to={'/Login'}>
                    <h1 className="text-sm text-black">I have an account?</h1>
                  </Link>

                  {/* Sign Up Button */}
                  <div className="relative flex gap-4">
                    <button
                      onClick={signUp}
                      className="middle none center rounded-lg bg-[#007955] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#508172] transition-all hover:shadow-lg hover:shadow-[#508172] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      SignUp
                    </button>
                    <button
                      onClick={signUpGoogle}
                      className="middle none center rounded-lg bg-[#db4437] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#c33c28] transition-all hover:shadow-lg hover:shadow-[#c33c28] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      SignUp with Google
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

export default AddUser;
