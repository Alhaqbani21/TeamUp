// import { Fade } from "react-awesome-reveal";
import landingPageVideo from '../assets/landingPageVideo.mp4';
import { Link } from 'react-router-dom';
function Landingpage() {
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
        <div className="relative bg-opacity-75 bg-black min-h-screen flex items-center justify-center">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
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
    </>
  );
}

export default Landingpage;
