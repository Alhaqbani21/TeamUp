import { Fade } from "react-awesome-reveal";

function Booking() {
  return (
    <>
      <div className="relative min-h-screen">
        <img
          src="https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-black min-h-screen">
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
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Stad Revolt <br className="hidden md:block" />
                  Lorem
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-300 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <a
                  href="/Book"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700"
                >
                  Back
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <Fade direction="right" delay={200}>
                  <div className="bg-white rounded-lg shadow-2xl p-7 sm:p-10 mt-[12em] ml-[8em] w-5/6">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Available Times
                    </h3>
                    <form className="max-w-md mx-auto ">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <button
                          type="button"
                          className="w-full py-2 text-center text-white bg-gray-600 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                          4:00 PM
                        </button>
                        <button
                          type="button"
                          className="w-full py-2 text-center text-white bg-gray-600 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                          6:00 PM
                        </button>
                        <button
                          type="button"
                          className="w-full py-2 text-center text-white bg-gray-600 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                          8:00 PM
                        </button>
                        <button
                          type="button"
                          className="w-full py-2 text-center text-white bg-gray-600 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                          10:00 PM
                        </button>
                      </div>
                      <div className="mb-4">
                        <button
                          type="button"
                          className="w-full py-2 text-center text-white bg-gray-600 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                          12:00 PM
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full py-3 text-center text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
                        >
                          Booking
                        </button>
                      </div>
                    </form>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
