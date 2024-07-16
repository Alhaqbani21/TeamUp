import React, { useState } from "react";
import padel from "../assets/padel1.jpg";
import person from "../assets/person.png";
import card from "../assets/cardF.png";
import bg from "../assets/bg2.jfif";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
import Players from "../components/Players";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import { Fade } from "react-awesome-reveal";
export default function Padel() {
  const [teamA, setteamA] = useState("TeamA");

  const PlayersA = [
    { name: "Ali", points: 0 },
    { name: "Ahmed", points: 200 },
  ];
  const PlayersB = [
    { name: "Saad", points: 50 },
    { name: "You", points: 0 },
  ];
  function getRankImage(points) {
    if (points >= 150) {
      return Platinum_1_Rank;
    } else if (points >= 100) {
      return Gold_1_Rank;
    } else if (points >= 50) {
      return Silver_1_Rank;
    } else {
      return Iron_1_Rank;
    }
  }
  return (
    <main className="hero min-h-screen rounded-xl  ">
      <div className="w-[70vw] gap-9 bg-base-100 rounded-lg flex">
        <div className="h-[80vh]  w-[30vw] rounded-s-xl shadow-2xl relative ">
          <div className="w-full flex gap-1">
            <button
              style={{
                backgroundColor: teamA == "TeamA" ? "#232f3e" : "#596a7e",
              }}
              onClick={() => setteamA("TeamA")}
              className="btn btn-secondary w-[50%]"
            >
              Team A
            </button>
            <button
              style={{
                backgroundColor: teamA == "TeamA" ? "#596a7e" : "#232f3e",
              }}
              onClick={() => setteamA("TeamB")}
              className="btn text-base-100 w-[50%]"
            >
              Team B
            </button>
          </div>

          <img className="h-[80vh] w-[30vw]" src={padel} alt="" />
          {teamA == "TeamA" ? (
            <>
              {" "}
              <Players name="Ali" x="left-20" y="top-14" img={team1} />
              <Players name="Ahmed" x="right-20" y="top-14" img={team1} />
            </>
          ) : (
            <>
              <Players name="Saad" x="right-20" y="bottom-20" img={team2} />{" "}
              <Players name="You" x="left-20" y="bottom-20" img={team2} />
            </>
          )}
        </div>

        <div className=" w-full h-max text-xl text-black bg-base-100 px-7 ">
          <div
            className="flex justify-between
        w-full p-3  "
          >
            {teamA == "TeamA" ? (
              <div className="flex  items-center  gap-6">
                <div className="text-xl  font-bold text-secondary m-2 shadow-lg border-2 rounded-full px-3 h-10">
                  A
                </div>
                <div className=" flex gap-10  ">
                  {PlayersA.map((player) => (
                    <Fade duration={2000} triggerOnce={true} direction="right">
                      <div>
                        {" "}
                        <p className="text-lg font-medium ">{player.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-base text-secondary ">
                            {player.points} points
                          </p>
                          <img
                            className="w-7"
                            src={getRankImage(player.points)}
                            alt="Rank"
                          />
                        </div>{" "}
                      </div>
                    </Fade>
                  ))}
                </div>{" "}
              </div>
            ) : (
              <div className="flex  items-center  gap-6">
                <div className="text-xl  font-bold text-secondary m-2 shadow-lg border-2 rounded-full px-3 h-10">
                  B
                </div>
                <div className=" flex gap-10  ">
                  {PlayersB.map((player) => (
                    <Fade triggerOnce={true} direction="right">
                      <div>
                        {" "}
                        <p className="text-lg font-medium ">{player.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-base text-secondary ">
                            {player.points} points
                          </p>
                          <img
                            className="w-7"
                            src={getRankImage(player.points)}
                            alt="Rank"
                          />
                        </div>{" "}
                      </div>{" "}
                    </Fade>
                  ))}
                </div>{" "}
              </div>
            )}
          </div>
          <div className="flex gap-3 mt-7 items-center px-3">
            <h1>Time</h1>
            <div className=" text-secondary text-lg">15 Jul, 5:00PM-6:30PM</div>
          </div>
          <div className="flex gap-3 mt-7 items-center px-3">
            <h1>Cost</h1>
            <div className="text-secondary text-lg">200 SAR</div>
          </div>
          <div
            className="flex justify-between mt-4 rounded-t-md
   w-full px-3"
          >
            <span className="">Riyadh Padel | مركز بادل الرياض</span>
          </div>
          <iframe
            className="justify-between rounded-t-md
        w-full p-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231841.9078419849!2d47.07881927490232!3d24.77730544035784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f012025ed9db1%3A0xa56f148f6e1a0b53!2zUml5YWRoIFBhZGVsIHwg2YXYsdmD2LIg2KjYp9iv2YQg2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1720995659360!5m2!1sar!2ssa"
            width="500"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

function naum() {
  return (
    <div>
      <nav className="h-10 "></nav>
      <main
        className="hero min-h-screen rounded-xl  "
        style={{
          // backgroundImage: `url(${bg})`,
          background: "cover",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="w-[70vw] gap-9 bg-base-100 rounded-lg flex">
          <section
            className="flex shadow-lg 
         rounded-s-xl  overflow-hidden
          w-max  justify-between
           gap-3 "
          >
            <div className="h-[80vh] w-[30vw] rounded-s-xl shadow-2xl relative ">
              <img className="h-[80vh] w-[30vw]" src={padel} alt="" />

              <Players name="Omar" x="left-48" y="-top-10" img={team1} />
              <Players name="Ahmed" x="left-16" y="top-9" img={team1} />
              <Players name="Ali" x="right-10" y="top-32 z-10" img={team1} />
              <Players name="Anas" x="right-32" y="top-32" img={team1} />
              <Players name="Rakan" x="left-32" y="top-9" img={team1} />
              <Players name="Ali" x="left-48" y="top-20" img={team1} />
              <Players name="Ali" x="left-20" y="top-32 z-10" img={team1} />
              <Players name="Ali" x="left-20" y="top-4" img={team1} />
              <Players name="Ahmed" x="right-20" y="top-9" img={team1} />
              <Players name="Saad" x="right-20" y="bottom-20" img={team2} />
              <Players name="Saad" x="left-20" y="bottom-20" img={team2} />
              <Players name="Saad" x="right-20" y="bottom-48" img={team2} />
              <Players name="Saad" x="left-20" y="bottom-48" img={team2} />
              <Players name="Saad" x="right-40" y="bottom-20" img={team2} />
              <Players name="Saad" x="right-40" y="bottom-48" img={team2} />
              <Players name="Saad" x="right-48" y="bottom-2" img={team2} />
              <Players name="Saad" x="right-10" y="bottom-40" img={team2} />
              <Players name="Saad" x="left-10" y="bottom-40" img={team2} />
              <Players name="Saad" x="right-20" y="bottom-20" img={team2} />
            </div>
            {/* <div className="h-[80vh] w-[30vw] relative ">
     
            <img className="h-[80vh] w-[30vw]" src={padel} alt="" />
            <Player
              x="left-20"
              y="top-9"
              name="Ali"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN2tbl5D_zSWwUh3EmroILfnsLQ0utFuNFA&s"
            />{" "}
            <Player
              x="right-20"
              y="top-9"
              name="Ahmed"
              img="https://i.pinimg.com/474x/78/39/74/783974deda0a9ceecc58eafa2a6fd340.jpg"
            />
          </div>{" "}
          <div className="h-[80vh] w-[30vw] relative ">
       

            <img className="h-[80vh] w-[30vw]" src={padel} alt="" />

            <div className="absolute top-9 left-20  w-28 ">
              <img className="" src={card} alt="" />
              <img
                className="absolute bottom-20 left-8  w-16 "
                src={person}
                alt=""
              />
              <h1 className="absolute bottom-14 font-bold  left-12">Ali</h1>
            </div>

            <div className="absolute top-9 right-20  w-28 ">
              <img className="" src={card} alt="" />
              <img
                className="absolute bottom-20 left-8  w-16 "
                src={person}
                alt=""
              />
              <h1 className="absolute bottom-14 font-bold  left-8">Ahmed</h1>
            </div>

            <div className="absolute bottom-20 left-20  w-28 ">
              <img className="" src={card} alt="" />
              <img
                className="absolute bottom-20 left-8  w-16 "
                src={person}
                alt=""
              />
              <h1 className="absolute bottom-14 font-bold  left-10">Saad</h1>
            </div>
          </div> */}
          </section>
          <div className=" w-[40vw] text-xl text-black bg-base-100 px-7 ">
            <div className="flex justify-between p-3">
              <h1>Padel</h1>
              <span className="text-blue-700">50 SAR</span>
            </div>
            <div
              className="flex justify-between rounded-t-md
             bg-zinc-300 border-b border-black w-full p-3"
            >
              <h1 className="flex items-center ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                  />
                </svg>
                date
              </h1>{" "}
              <span>15 Jul</span>
            </div>

            <div
              className="flex justify-between rounded-t-md
             bg-zinc-300 border-b border-black w-full p-3"
            >
              <h1 className="flex items-center gap-1 ">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                time
              </h1>{" "}
              <span>16:00 - 18:00 </span>
            </div>

            <div
              className="flex justify-between
             bg-zinc-300 w-full p-3  border-b border-black"
            >
              <h1 className=" mt-8">Team</h1>{" "}
              <div
                className="flex justify-between
             bg-zinc-300 w-full p-3  border-b border-black"
              >
                <div className="px-4">
                  <h1 className=" mt-8">Team-B</h1>{" "}
                  <ul className="list-disc">
                    <li>Ali</li>
                    <li>Ahmed</li>
                  </ul>
                </div>

                <div className="">
                  {" "}
                  <h1 className=" mt-8">Team-A</h1>{" "}
                  <ul className="list-disc">
                    <li>Saad</li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="flex justify-between rounded-t-md
             bg-zinc-300 w-full p-3"
            >
              <h1 className="flex items-center ">
                <svg
                  className="w-6 h-6 text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Location
              </h1>{" "}
              <span className=""> ملاعب الرواد </span>
            </div>

            <iframe
              className="justify-between rounded-t-md
             bg-zinc-300 w-full p-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115914.56110735387!2d46.870143756640616!3d24.784150000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efdbeff9f880d%3A0x2cc12953f5fba698!2z2YXZhNin2LnYqCDYp9mE2LHZiNin2K8g2YTZhNiq2KPYrNmK2LEg2KjYp9mE2LPYp9i52Kk!5e0!3m2!1sar!2ssa!4v1721044642738!5m2!1sar!2ssa"
              width="400"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* 
            <h1>
              <svg
                className="w-6 h-6 text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clipRule="evenodd"
                />
              </svg>
            </h1> */}
          </div>
        </div>
        {/* <div className="w-[80vw] m-auto pt-8">
          <h1 className="font-bold text-3xl">Location</h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231841.9078419849!2d47.07881927490232!3d24.77730544035784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f012025ed9db1%3A0xa56f148f6e1a0b53!2zUml5YWRoIFBhZGVsIHwg2YXYsdmD2LIg2KjYp9iv2YQg2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1720995659360!5m2!1sar!2ssa"
            width="600"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </main>
      {/* <div className="w-[80vw] m-auto pt-8">
        <h1 className="font-bold text-3xl">Location</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231841.9078419849!2d47.07881927490232!3d24.77730544035784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f012025ed9db1%3A0xa56f148f6e1a0b53!2zUml5YWRoIFBhZGVsIHwg2YXYsdmD2LIg2KjYp9iv2YQg2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1720995659360!5m2!1sar!2ssa"
          width="600"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
}
