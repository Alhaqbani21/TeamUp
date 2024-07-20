import { useState } from "react";
import image from "../assets/googel.png";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";

// import image1 from "../assets/image1.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("../Home");
      } catch (error) {
        setError(error.message);
        console.error("Error logging in: ", error);
      }
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user document exists in users collection
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        // Add user to users collection
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          joinedAt: formatDate(new Date().toISOString()),
          location: "Saudi Arabia, Riyadh",
          points: 0,
          matchesPlayed: 0,
        });
      }

      // Check if the user document exists in leaderboard collection
      const leaderboardDoc = await getDoc(doc(db, "leaderboard", user.uid));
      if (!leaderboardDoc.exists()) {
        // Add user to leaderboard collection
        await setDoc(doc(db, "leaderboard", user.uid), {
          name: user.displayName,
          points: 0,
        });
      }

      navigate("../Home");
    } catch (error) {
      console.error("Error signing up with Google: ", error);
      // Handle errors appropriately
    }
  }

  // to format the date for the JoindAt
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div className="bg-white relative lg:py-20 ">
        <div
          className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12 max-sm:hidden">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img
                  src="https://i.pinimg.com/564x/06/90/7e/06907e118f54b6005cfd81e672a5b925.jpg"
                  className="btn-"
                />
              </div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div
                className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                  Login
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <button
                    onClick={handleGoogleSignIn}
                    className="cursor-pointer my-3 w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white 
                   rounded-lg transition duration-200   border border-gray-600"
                    data-ripple-light="true"
                  >
                    <div className="flex items-center justify-center ">
                      <img className="w-[3em]" src={image} alt="Google" />
                      <p className="text-sm text-gray-600 transition duration-200 ">
                        Login with Google
                      </p>
                    </div>
                  </button>
                  <div className="my-10 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      OR
                    </div>
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Email
                    </p>
                    <input
                      placeholder="enter your email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="relative">
                    <p
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    >
                      Password
                    </p>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder=" enter your Password"
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="text-center text-sm mt-2">
                    I Do not have an account?{" "}
                    <Link className="text-blue-500 underline" to={"../SignUp"}>
                      SignUp
                    </Link>
                  </p>
                  <div className="relative">
                    <div
                      onClick={handleLogin}
                      className="cursor-pointer w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-[#007955]
                  rounded-lg transition duration-200 hover:bg-[#215244]"
                    >
                      LogIn
                    </div>
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

export default Login;
