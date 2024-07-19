import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { Fade } from 'react-awesome-reveal';
import { useParams } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import React, { useState } from 'react';

function Booking() {
  const params = useParams().id;
  const [isLoading, setIsLoding] = useState(false);
  const [userData, setUserData] = useState({});
  const [dataStadium, setDataStadium] = useState({});
  const [index, setIndex] = useState(-1);
  const dataBase = doc(db, 'stadium', params);
  const dataBaseMatch = collection(db, 'matches');
  const getData = async () => {
    try {
      const dataDoc = await getDoc(dataBase);
      // console.log(dataDoc.data());
      setDataStadium(dataDoc.data());
      setIsLoding(true);
    } catch (error) {
      console.error(error);
    }
  };
  const users = async () => {
    const user = auth.currentUser;
    // console.log(user);

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      setUserData(userDoc.data());
    }
  };

  React.useEffect(() => {
    users();
    getData();
  }, []);

  const handelTimes = async () => {
    let array = [];
    array = dataStadium.timeSlot;

    if (index != -1) {
      const time = array[index].time;
      const admin = { name: userData.name, point: userData.points };
      const teamA =
        dataStadium.category == 'Padel'
          ? Array.from({ length: 2 }, (_, index) => (index == 0 ? admin : null))
          : dataStadium.category == 'Basketball'
          ? Array.from({ length: 5 }, (_, index) => (index == 0 ? admin : null))
          : Array.from({ length: 6 }, (_, index) =>
              index == 0 ? admin : null
            );
      const teamB =
        dataStadium.category == 'Padel'
          ? Array.from({ length: 2 }, (_) => null)
          : dataStadium.category == 'Basketball'
          ? Array.from({ length: 5 }, (_) => null)
          : Array.from({ length: 6 }, (_) => null);

      await addDoc(dataBaseMatch, {
        stadiumName: dataStadium.name,
        location: dataStadium.location,
        price: dataStadium.price,
        distance: dataStadium.distance,
        time: time,
        teamA: teamA,
        teamB: teamB,
        category: dataStadium.category,
        pending: [],
        Admin: userData.name,
      });

      array[index] = { time: array[index].time, isBooked: true };
      await updateDoc(dataBase, { timeSlot: array });
      console.log('yes');
      setIndex(-1);
    }
  };
  return (
    <>
      {!isLoading ? (
        <span className="loading m-auto  loading-spinner loading-md"></span>
      ) : (
        <div>
          <div
            className="hero h-96"
            style={{
              backgroundImage: `url(${dataStadium.img})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-75"></div>
            <div className="hero-content w-full flex justify-start text-neutral-content text-start">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold"> {dataStadium.name}</h1>
                <p className="mb-5 max-w-md">
                  {dataStadium.name.includes('Padel') ? (
                    <span>
                      {' '}
                      Padel is a sport that requires good coordination and quick
                      reflexes. If those skills aren’t there yet, you will find
                      that will be an improvement in these skills, game after
                      game.
                    </span>
                  ) : dataStadium.name.includes('Basketball') ? (
                    <span>
                      Basketball is a fast moving game that involves a lot of
                      variety, including shooting, dribbling, passing,
                      rebounding, defence and much more.
                    </span>
                  ) : (
                    <span>
                      The benefits of volleyball aren't just physical. Playing
                      volleyball can also have significant benefits for your
                      mental health. Physical activity can help reduce stress
                      and anxiety
                    </span>
                  )}
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
            </div>
          </div>
          <div className="w-full max-w-xl xl:px-8 mt-9 xl:w-5/12">
            <br />

            <section className="flex">
              <div className=" rounded-lg shadow-2xl p-7 sm:p-10  w-5/6  max-sm:mx-auto ">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl max-sm:text-center max-sm:mr-4">
                  Available Times
                </h3>
                <div className="max-w-md mx-auto  max-sm:mx-auto ">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {dataStadium.timeSlot.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setIndex(index)}
                        type="button"
                        // style={{backgroundColor:item.isBooked?'':'transparent'}}
                        disabled={item.isBooked}
                        className={
                          item.isBooked
                            ? // "rounded-lg shadow-md hover:bg-primary " +
                              'bg-gray-400 w-full rounded-lg shadow-md  py-2 text-center text-white '
                            : ' hover:bg-green-700 border border-green-700 w-full rounded-lg shadow-md  py-2 text-center hover:text-white'
                        }
                      >
                        {item.time} PM
                      </button>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={() => handelTimes()}
                      type="submit"
                      className="w-full py-3 text-center text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
                    >
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <img
            src={}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          /> */}
          {/* <h2 className="absolute  z-10 left-8 top-20  mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            {dataStadium.name}
          </h2> */}
          {/* <div className="relative  h-96  bg-opacity-75 bg-black "> */}
          {/* <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg> */}
          {/* <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"> */}
          {/* <div className="flex relative  flex-col items-center justify-between xl:flex-row"> */}
          {/* <div className="w-full absolute top-14 left-0  max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
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
            </div> */}

          {/* </div> */}
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default Booking;
