import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/googel.png";
import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name: values.name,
          email: values.email,
          joinedAt: formatDate(new Date().toISOString()),
          location: "Saudi Arabia, Riyadh",
          points: 0,
          matchesPlayed: 0,
          isNotified: false,
        });

        navigate("../login");
      } catch (error) {
        console.error("Error signing up: ", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  async function signUpGoogle() {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          joinedAt: formatDate(new Date().toISOString()),
          location: "Saudi Arabia, Riyadh",
          points: 0,
          matchesPlayed: 0,
          isNotified: false,
        });
      }

      navigate("../Home");
    } catch (error) {
      console.error("Error signing up with Google: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <l-infinity
            size="150"
            stroke="7"
            stroke-length="0.30"
            bg-opacity="0.1"
            speed="2.0"
            color="#FB923C"
          ></l-infinity>
        </div>
      )}
      <div
        className={`bg-white relative min-h-screen flex items-center justify-center ${
          isLoading ? "pointer-events-none" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center lg:flex-row w-full mx-auto">
          <div className="flex justify-center items-center w-full lg:w-7/12">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10 max-md:hidden lg:flex">
                <img
                  src="https://i.pinimg.com/564x/06/90/7e/06907e118f54b6005cfd81e672a5b925.jpg"
                  className="btn-"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-20 lg:mt-0 lg:w-6/12 px-4">
            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10 w-full max-w-md lg:max-w-lg">
              <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                Sign up
              </p>
              <div className="w-full mt-6 space-y-8">
                <div
                  onClick={signUpGoogle}
                  className="cursor-pointer my-3 w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white rounded-lg transition duration-200 border border-gray-600"
                >
                  <div className="flex items-center justify-center">
                    <img className="w-[3em]" src={image} alt="Google" />
                    <p className="text-sm text-gray-600 transition duration-200">
                      Sign Up with Google
                    </p>
                  </div>
                </div>
                <div className="my-10 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    OR
                  </div>
                </div>
                <form
                  className="flex flex-col gap-3"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Name
                    </p>
                    <input
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your name"
                      type="text"
                      className={`border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="relative mt-4">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Email
                    </p>
                    <input
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your email"
                      type="text"
                      className={`border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="relative mt-4">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Password
                    </p>
                    <input
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your password"
                      type="password"
                      className={`border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md ${
                        formik.touched.password && formik.errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <p className="text-center text-sm mt-4">
                    Do you have an account?{" "}
                    <Link className="text-blue-500 underline" to={"../login"}>
                      Login
                    </Link>
                  </p>
                  <div className="relative mt-4">
                    <button
                      type="submit"
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-[#007955] rounded-lg transition duration-200 hover:bg-[#215244]"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
