// import { Fade } from "react-awesome-reveal";
import landingPageVideo from '../assets/landingPageVideo.mp4';
import { Link } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { useAuth } from '../contexts/AuthContext';
function Landingpage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/Home');
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="relative min-h-screen">
        <video
          src={landingPageVideo}
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative bg-opacity-75   bg-black min-h-screen flex items-center justify-center">
          <svg
            className="absolute inset-x-0 -bottom-1 text-base-100"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-start justify-between xl:flex-row ">
              <div className="  mb-12 xl:mb-0 xl:pr-16 ">
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  TeamUp <br className="hidden md:block" />
                </h1>
                <p className="mb-4 text-white md:text-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-xs leading-relaxed">
                  An easy-to-use platform that allows people to organize sports
                  activities effortlessly. Users can create groups for various
                  sports, specify the required number of players, and set the
                  activity timing. The application also enables users to join
                  activities of interest based on their geographical location
                  and availability.
                </p>
                <p className="max-w-lg mb-6 font-sans text-sm tracking-tight text-[#cbc8c8] sm:text-2xl sm:leading-none">
                  Join us now and enjoy <br className="hidden md:block" />
                </p>
                <div className="flex">
                  <Link to={'/SignUp'}>
                    {' '}
                    <button
                      className="middle none center mr-3 rounded-lg bg-[#007955] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#508172] transition-all hover:shadow-lg hover:shadow-[#508172] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      SignUp
                    </button>
                  </Link>
                  <Link to={'/Login'}>
                    {' '}
                    <button
                      className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-[#007955] to-[#508172] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#508172] transition-all hover:shadow-lg hover:shadow-[#508172] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Activities */}
      <p className="p-2 text-3xl font-bold   mb-7 text-[#007955]  flex justify-center items-center mt-8">
        Activities
      </p>
      <Fade direction="right">
        <div className="flex justify-center items-center gap-12 mt-5 max-sm:flex-col">
          <div>
            <img
              className="w-[15em] h-[15em] rounded-md "
              src="https://i.pinimg.com/474x/5c/93/42/5c9342018257adcbd3583e22de1461d9.jpg"
            />
            <h2 className="text-lg text-center mt-4">Volleyball</h2>
          </div>

          <div>
            <img
              className="w-[15em] h-[15em] rounded-md "
              src="https://i.pinimg.com/564x/e9/cd/a7/e9cda718f10716d9eb01c4ce03fa04f3.jpg"
            />
            <h2 className="text-lg text-center mt-4">Padel</h2>
          </div>

          <div>
            <img
              className="w-[15em] h-[15em] rounded-md "
              src="https://i.pinimg.com/564x/0a/0d/12/0a0d1234e829cf469e8788283ff149fa.jpg"
            />
            <h2 className="text-lg text-center mt-4">Basketball</h2>
          </div>
        </div>
      </Fade>
      {/* our team  */}
      <div className="py-6 bg-base-100  mt-6 ">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-3xl font-bold   mb-7 text-[#007955] ">
            Our Team
          </p>

          <h1
            className=" font-bold leading-none text-pretty  text-[#508172] sm:text-xl 
           md:text-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-xs "
          >
            Our dedicated team of programmers is passionate about transforming
            ideas into innovative digital solutions. We strive to deliver
            high-quality, efficient, and scalable software to meet your unique
            needs. Join us on a journey of creativity, excellence, and
            technological advancement
          </h1>
          <div className="flex  justify-center items-center mt-[5em] max-sm:flex-col max-sm:mt-[2em]">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 ">
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  {/* Abdulaziz  */}
                  Alhaqbani
                </p>
                <p className="text-[#508172] ">Software Engineer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  href="mailto:alhaqbani21@gmail.com"
                  title="Email"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/alhaqbani-abdulaziz/"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Alhaqbani21"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 ">
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Amal Ghazai
                </p>
                <p className="text-[#508172] ">Programmer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="mailto:ammalgh22@gmail.com"
                  title="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/amal-alotaibi-985642259/"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/ammalgh"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 ">
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Amwaj Alharbi
                </p>
                <p className="text-[#508172] ">Programmer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="mailto:amwaj@outlook.com"
                  title="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/amwaj-alharbi/"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/amwaj-a"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="footer footer-center bg-[#0a1120]  text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            TeamUp
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Landingpage;
