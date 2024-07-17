import { Fade } from 'react-awesome-reveal';
import SideBar from '../components/SideBar';
import Cardheder from '../components/Cardheder';
import { Link } from 'react-router-dom';
function Book() {
  return (
    <>
      <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
        <SideBar />

        <div className="w-full h-full flex flex-col  justify-between overflow-y-auto">
          <div className="w-[70vw] mx-auto">
            {' '}
            <Cardheder />
          </div>

          <main className="max-w-full h-full flex relative ">
            <div className="w-full p-4">
              {/* card */}
              <h2 className="text-center text-3xl p-2 tracking-widest  text-[#007955]">
                All Stadiums
              </h2>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center mt-8 px-4">
                {/* c1 */}
                <Fade direction="right">
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <Link
                      className="w-full hover:scale-105 transition-all"
                      to={'/Booking/Volly'}
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url(https://i.pinimg.com/474x/5c/93/42/5c9342018257adcbd3583e22de1461d9.jpg)',
                        }}
                        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                      />
                      <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                        <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                          Volly
                        </div>
                        <div className="flex items-center justify-between py-4 px-6 border-gray-300 border-t-[1px]">
                          <h1 className="text-gray-800 font-bold">$129</h1>
                          <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                            <span className="text-white">2 hour</span>
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                {/* c2 */}
                <Fade direction="right" delay={300}>
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <Link
                      className="w-full hover:scale-105 transition-all"
                      to={'/Booking/padel'}
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url(https://i.pinimg.com/564x/e9/cd/a7/e9cda718f10716d9eb01c4ce03fa04f3.jpg)',
                        }}
                        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                      />
                      <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                        {' '}
                        <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                          Padel
                        </div>
                        <div className="flex items-center justify-between py-4 px-6 border-gray-300 border-t-[1px]">
                          <h1 className="text-gray-800 font-bold">$129</h1>
                          <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                            <span className="text-white">2 hour</span>
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                {/* c3 */}
                <Fade direction="right" delay={600}>
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <Link
                      className="w-full hover:scale-105 transition-all"
                      to={'/Booking/Basketball'}
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url(https://i.pinimg.com/564x/0a/0d/12/0a0d1234e829cf469e8788283ff149fa.jpg)',
                        }}
                        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                      />
                      <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                        <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                          Basketball
                        </div>
                        <div className="flex items-center justify-between py-4 px-6 border-gray-300 border-t-[1px]">
                          <h1 className="text-gray-800 font-bold ">$129</h1>
                          <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                            <span className="text-white">2 hour</span>
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                {/* c4 */}
                <Fade direction="right">
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <div
                      style={{
                        backgroundImage:
                          'url(https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700)',
                      }}
                      className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                    />
                    <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                      <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                        Stad Revolt
                      </div>
                      <div className="flex items-center justify-between py-4 px-6 border-gray-300 border-t-[1px]">
                        <h1 className="text-gray-800 font-bold">$129</h1>
                        <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                          <span className="text-white">2 hour</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Book;
