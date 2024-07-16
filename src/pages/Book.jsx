import { Fade } from "react-awesome-reveal";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
function Book() {
  return (
    <>
      {/* <div className="bg-[#f6f6f6] min-h-screen flex  justify-center items-center"> */}
      <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
        <SideBar />
        <div className="w-full h-full flex flex-col justify-between">
          <main className="max-w-full h-full flex relative overflow-y-auto">
            <div className="w-full p-4">
              <h2
                className="w-full mx-auto text-5xl font-bold text-center font-serif pt-8"
                style={{
                  color: "#007955",
                  textShadow: "2px 2px 4px rgba(0, 121, 85, 0.5)",
                }}
              >
                Bookings
              </h2>

              {/* card */}

              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center mt-8 px-4">
                {/* c1 */}
                <Fade direction="right">
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    {" "}
                    <div
                      style={{
                        backgroundImage:
                          "url(https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700)",
                      }}
                      className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                    />
                    <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                      <Link to={"/Booking"}>
                        {" "}
                        <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                          Stad Revolt
                        </div>
                      </Link>
                      <div className="flex items-center justify-between py-4 px-6 bg-gray-400">
                        <h1 className="text-gray-800 font-bold">$129</h1>
                        <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                          <span className="text-white">2 hour</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
                {/* c2 */}
                <Fade direction="right" delay={300}>
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <div
                      style={{
                        backgroundImage:
                          "url(https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700)",
                      }}
                      className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                    />
                    <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                      <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                        Stad Revolt
                      </div>
                      <div className="flex items-center justify-between py-4 px-6 bg-gray-400">
                        <h1 className="text-gray-800 font-bold">$129</h1>
                        <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                          <span className="text-white">2 hour</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
                {/* c3 */}
                <Fade direction="right" delay={600}>
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <div
                      style={{
                        backgroundImage:
                          "url(https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700)",
                      }}
                      className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                    />
                    <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                      <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                        Stad Revolt
                      </div>
                      <div className="flex items-center justify-between py-4 px-6 bg-gray-400">
                        <h1 className="text-gray-800 font-bold">$129</h1>
                        <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7]">
                          <span className="text-white">2 hour</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
                {/* c4 */}
                <Fade direction="right">
                  <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
                    <div
                      style={{
                        backgroundImage:
                          "url(https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700)",
                      }}
                      className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                    />
                    <div className="w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                      <div className="py-4 text-center font-bold uppercase tracking-wide text-gray-800">
                        Stad Revolt
                      </div>
                      <div className="flex items-center justify-between py-4 px-6 bg-gray-400">
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
