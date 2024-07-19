import { Fade } from "react-awesome-reveal";
import SideBar from "../components/SideBar";
import Cardheder from "../components/Cardheder";
import { Link } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
function Book() {
  const [data, setData] = useState([]);
  const dataBase = collection(db, "stadium");
  useEffect(() => {
    const get = async () => {
      const data = await getDocs(dataBase);
      const filter = data.docs.map((e) => ({
        ...e.data(),
        id: e.id,
      }));
      setData(filter);
    };
    get();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
        <SideBar />
        <BottomNavBar />
        <div className="w-full h-full flex flex-col  justify-between overflow-y-auto">
          <div className="w-[70vw] mx-auto">
            {" "}
            <Cardheder />
          </div>

          <main className="max-w-full h-full flex relative ">
            <div className="w-full p-4">
              {/* card */}
              <h2 className="text-center text-3xl p-2 tracking-widest  text-[#007955]">
                All Stadiums
              </h2>
              <div className="flex space-x-2 justify-center items-center max-sm:flex-col">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-8 justify-items-center mt-8 px-4 max-sm:w-[27em] ">
                  {/* c1 */}
                  {data.map((e) => {
                    return (
                      <div key={e.id}>
                        <Fade direction="right">
                          <div className="bg-[#fffcfc] rounded-md  shadow-2xl  w-[32em]  ">
                            <Link
                              className="w-full hover:scale-105 transition-all"
                              to={`/Booking/${e.id}`}
                            >
                              <div className="md:flex px-4 leading-none max-w-4xl   mt-0">
                                <div className="flex-none">
                                  <img
                                    src={e.img}
                                    alt="pic"
                                    className="h-72 w-56 rounded-md shadow-4xl transform -translate-y-4 border-4 border-gray-300"
                                  />
                                </div>
                                <div className="flex-col text-black ml-10">
                                  <p className="pt-4 text-xl font-bold">
                                    {e.name}
                                  </p>

                                  <h1 className="text-gray-800 font-bold mt-10">
                                    {e.price}
                                  </h1>
                                  <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7] mt-10  inline-block">
                                    <span className="text-white">2 hour</span>
                                  </h1>
                                  <div className="border-t-2 border-gray-800 my-4 w-[14em] inline-block mt-9"></div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </Fade>
                      </div>
                    );
                  })}

                  {/*  */}

                  {/* c2 */}
                  {/* <Fade direction="right" delay={300}>
                    <div className="bg-[#fffcfc] rounded-md  shadow-2xl w-[32em] ">
                      <Link
                        className="w-full hover:scale-105 transition-all"
                        to={"/Booking/padel"}
                      >
                        <div className="md:flex px-4 leading-none max-w-4xl   mt-0">
                          <div className="flex-none">
                            <img
                              src="https://i.pinimg.com/564x/e9/cd/a7/e9cda718f10716d9eb01c4ce03fa04f3.jpg"
                              alt="pic"
                              className="h-72 w-56 rounded-md shadow-4xl transform -translate-y-4 border-4 border-gray-300"
                            />
                          </div>
                          <div className="flex-col text-black ml-10">
                            <p className="pt-4 text-xl font-bold">
                              {" "}
                              Stad Revolt
                            </p>

                            <h1 className="text-gray-800 font-bold mt-10">
                              $129
                            </h1>
                            <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7] mt-10  inline-block">
                              <span className="text-white">2 hour</span>
                            </h1>
                            <div className="border-t-2 border-gray-800 my-4 w-[14em] inline-block mt-9"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Fade> */}
                  {/* c3 */}
                  {/* <Fade direction="right" delay={600}>
                    <div className="bg-[#fffcfc] rounded-md  shadow-2xl w-[32em]  ">
                      <div className="md:flex px-4 leading-none max-w-4xl   mt-0">
                        <div className="flex-none">
                          <img
                            src="https://i.pinimg.com/564x/0a/0d/12/0a0d1234e829cf469e8788283ff149fa.jpg"
                            alt="pic"
                            className="h-72 w-56 rounded-md shadow-4xl transform -translate-y-4 border-4 border-gray-300"
                          />
                        </div>
                        <div className="flex-col text-black ml-10">
                          <p className="pt-4 text-xl font-bold"> Stad Revolt</p>

                          <h1 className="text-gray-800 font-bold mt-10">
                            $129
                          </h1>
                          <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7] mt-10  inline-block">
                            <span className="text-white">2 hour</span>
                          </h1>
                          <div className="border-t-2 border-gray-800 my-4 w-[14em] inline-block mt-9"></div>
                        </div>
                      </div>
                    </div>
                  </Fade> */}
                  {/* c4 */}
                  {/* <Fade direction="right">
                    <div className="bg-[#fffcfc] rounded-md  shadow-2xl w-[32em]  ">
                      <div className="md:flex px-4 leading-none max-w-4xl   mt-0">
                        <div className="flex-none">
                          <img
                            src="https://img.pikbest.com/ai/illus_our/20230427/c1335e4e27e5cd31007af894089719db.jpg!bw700"
                            alt="pic"
                            className="h-72 w-56 rounded-md shadow-4xl transform -translate-y-4 border-4 border-gray-300"
                          />
                        </div>
                        <div className="flex-col text-black ml-10">
                          <p className="pt-4 text-xl font-bold"> Stad Revolt</p>

                          <h1 className="text-gray-800 font-bold mt-10">
                            $129
                          </h1>
                          <h1 className="bg-[#007955] text-xs text-white px-4 py-2 font-semibold rounded uppercase hover:bg-[#6bc1a7] mt-10  inline-block">
                            <span className="text-white">2 hour</span>
                          </h1>
                          <div className="border-t-2 border-gray-800 my-4 w-[14em] inline-block mt-9"></div>
                        </div>
                      </div>
                    </div>
                  </Fade> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Book;
