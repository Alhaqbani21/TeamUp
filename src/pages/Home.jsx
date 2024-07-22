import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CardCategory from "../components/CardCategory";
import padelImage from "../assets/padel_Image.png";
import basketBall from "../assets/basket_Ball.png";
import VollyBall from "../assets/VollyBall.png";
import MatchCard from "../components/MatchCard";
import { Fade } from "react-awesome-reveal";
import basketBallImage from "../assets/basketBallImage.png";
import BottomNavBar from "../components/BottomNavBar";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import LottieAnimation from "../components/LottieAnimation";
import {
  updateDoc,
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { fetchMatches } from "../services/matchesService";
import SortComponent from "../components/SortComponent";
import moment from "moment"; // Import moment
import VollyballImage from "../assets/VollyballImage.png";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const ImageUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==";
  const backgroundImagePadel =
    "https://champs-sportsclub.com/wp-content/uploads/2024/05/Playing-Tennis-padel-1.jpg";

  useEffect(() => {
    if (!currentUser) {
      navigate("/LoginFireBase");
    } else {
      fetchMatchesData();
      fetchUserData();
    }
  }, [currentUser, navigate]);

  const fetchUserData = async () => {
    try {
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
        if (userDoc.data().isNotified) {
          console.log("Notify me");
          notifyUserWinner();
          await updateDoc(doc(db, "users", currentUser.uid), {
            isNotified: false,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  function notifyUserWinner() {}

  const fetchMatchesData = async () => {
    try {
      const fetchedMatches = await fetchMatches();
      const usersSnapshot = await getDocs(collection(db, "users"));

      const usersPointsMap = usersSnapshot.docs.reduce((acc, doc) => {
        const userData = doc.data();
        acc[doc.id] = userData.points; // Assuming the user ID is the document ID
        return acc;
      }, {});
      const today = new Date().getDate();
      const monthArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = monthArray[new Date().getMonth()];

      const formattedMatches = fetchedMatches.map((match) => {
        const teamACount = (match.teamA || []).filter(
          (player) => player && player.name
        ).length;
        const teamBCount = (match.teamB || []).filter(
          (player) => player && player.name
        ).length;
        const totalSlots =
          (match.teamA?.length || 0) + (match.teamB?.length || 0);

        return {
          id: match.id,
          stadiumName: `${match.stadiumName} `,
          distance: match.distance,
          price: match.price,
          date: `${today} ${month}`,
          time: match.time,
          // status: "Upcoming",
          teamA: (match.teamA || []).map((player) => ({
            name: player?.name || "",
            img: ImageUrl,
            point: usersPointsMap[player?.userId] ?? 0,
            userId: player?.userId,
          })),
          teamB: (match.teamB || []).map((player) => ({
            name: player?.name || "",
            img: ImageUrl,
            point: usersPointsMap[player?.userId] ?? 0,
            userId: player?.userId,
          })),
          backgroundImage:
            match.category === "Padel"
              ? backgroundImagePadel
              : match.category === "Basketball"
              ? basketBallImage
              : VollyballImage,
          category: match.category,
          Admin: match.Admin,
          pending: match.pending || [],
          rejected: match.rejected || [],
        };
      });

      setMatches(formattedMatches);
    } catch (error) {
      console.error("Error fetching matches: ", error);
    }
  };

  const handleRequestJoin = async (team, index, matchId) => {
    try {
      const matchRef = doc(db, "matches", matchId);
      await updateDoc(matchRef, {
        pending: arrayUnion({
          userId: currentUser.uid,
          name: currentUser.displayName || userData.name,
          team: team, // Include the team information
        }),
      });
      console.log(
        `Request to join team ${team} at index ${index} for match ${matchId}`
      );
      // Fetch updated matches data after the join request
      fetchMatchesData();
      toast.success("Wait to be accepted");
    } catch (error) {
      console.error("Error requesting to join match: ", error);
    }
  };

  const sortMatches = (matches, sortOption) => {
    if (sortOption === "distance") {
      return matches.sort(
        (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
      );
    } else if (sortOption === "nearestFull") {
      return matches.sort((a, b) => {
        const aPlayers =
          a.teamA.filter((p) => p.name).length +
          a.teamB.filter((p) => p.name).length;
        const bPlayers =
          b.teamA.filter((p) => p.name).length +
          b.teamB.filter((p) => p.name).length;
        const aSlots = a.teamA.length + a.teamB.length;
        const bSlots = b.teamA.length + b.teamB.length;
        return bPlayers / bSlots - aPlayers / aSlots;
      });
    } else {
      return matches.sort((a, b) => {
        const now = moment();
        const aTime = moment(a.time.split("-")[0], "h:mmA");
        const bTime = moment(b.time.split("-")[0], "h:mmA");
        return aTime.diff(now) - bTime.diff(now);
      });
    }
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const filteredMatches = matches.filter((match) => {
    const matchesCategory =
      selectedCategory === "All" || match.category === selectedCategory;
    const matchesSearchInput = match.stadiumName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const teamACount = match.teamA.filter(
      (player) => player && player.name
    ).length;
    const teamBCount = match.teamB.filter(
      (player) => player && player.name
    ).length;
    const totalSlots = match.teamA.length + match.teamB.length;
    const isFull = teamACount + teamBCount === totalSlots;
    return matchesCategory && matchesSearchInput && !isFull;
  });

  const sortedMatches = sortMatches(filteredMatches, sortOption);

  return (
    <>
      <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
        <SideBar />
        <ToastContainer autoClose={2000} />;
        <BottomNavBar />
        <div className="w-full h-full flex flex-col justify-between ">
          <main className="max-w-full h-full flex relative overflow-y-auto overflow-x-hidden ">
            <div className="flex flex-col w-full my-4">
              <div className="text-center text-5xl p-2 tracking-widest text-secondary">
                Sports
              </div>
              <Fade triggerOnce={true} direction="left">
                <div className="bg-base-100 flex justify-center items-center gap-3 h-min max-md:flex-col py-12 ">
                  <CardCategory
                    title={"Padel"}
                    bgColor={"green-400"}
                    img={padelImage}
                    onClick={() => handleCategoryClick("Padel")}
                    isSelected={selectedCategory === "Padel"}
                  />

                  <CardCategory
                    bgColor={"orange-400"}
                    img={basketBall}
                    title={"Basket ball"}
                    onClick={() => handleCategoryClick("Basketball")}
                    isSelected={selectedCategory === "Basketball"}
                  />
                  <CardCategory
                    bgColor={"cyan-400"}
                    img={VollyBall}
                    title={"Volly ball"}
                    onClick={() => handleCategoryClick("Volleyball")}
                    isSelected={selectedCategory === "Volleyball"}
                  />
                </div>
              </Fade>
              <div className="flex w-full flex-col">
                <div className="divider"></div>
              </div>

              <div className="py-8 flex flex-col justify-center items-center w-full gap-1">
                <div className="text-center text-5xl p-2 tracking-widest text-secondary">
                  Matches
                </div>

                <div className="p-0 flex flex-row w-full justify-center mb-4 max-md:flex-col max-md:items-center max-md:gap-4">
                  <div className="flex w-[65%] max-w-[35rem] p-0  justify-center max-md:w-full">
                    <input
                      type="text"
                      placeholder="Search for match"
                      className="px-3  w-[100%] input rounded-none rounded-s-lg input-bordered focus:outline-none  shadow-2xl max-md:w-[70%]"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />

                    <button
                      onClick={handleSearch}
                      className="w-10 bg-blue-400 rounded-r-lg"
                    >
                      <svg
                        className="m-auto text-slate-200"
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
                          strokeWidth="2"
                          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <SortComponent onSortChange={handleSortChange} />
                </div>

                {sortedMatches.length > 0 ? (
                  sortedMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      stadiumName={match.stadiumName}
                      distance={match.distance}
                      price={match.price}
                      date={match.date}
                      time={match.time}
                      status={match.status}
                      teamA={match.teamA}
                      teamB={match.teamB}
                      court={match.court}
                      players={match.players}
                      matchStatus={match.matchStatus}
                      backgroundImage={match.backgroundImage}
                      onRequestJoin={handleRequestJoin}
                      matchId={match.id}
                      admin={match.Admin}
                      pending={match.pending}
                      rejected={match.rejected}
                      currentUserId={currentUser.uid}
                    />
                  ))
                ) : (
                  <div className="text-center text-2xl text-gray-500 my-5">
                    <svg
                      className="emoji-404"
                      enableBackground="new 0 0 226 249.135"
                      height="249.135"
                      id="Layer_1"
                      overflow="visible"
                      version="1.1"
                      viewBox="0 0 226 249.135"
                      width="226"
                      xmlSpace="preserve"
                    >
                      <circle cx="113" cy="113" fill="#FFE585" r="109" />
                      <line
                        enableBackground="new    "
                        fill="none"
                        opacity="0.29"
                        stroke="#6E6E96"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                        x1="88.866"
                        x2="136.866"
                        y1="245.135"
                        y2="245.135"
                      />
                      <line
                        enableBackground="new    "
                        fill="none"
                        opacity="0.17"
                        stroke="#6E6E96"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                        x1="154.732"
                        x2="168.732"
                        y1="245.135"
                        y2="245.135"
                      />
                      <line
                        enableBackground="new    "
                        fill="none"
                        opacity="0.17"
                        stroke="#6E6E96"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                        x1="69.732"
                        x2="58.732"
                        y1="245.135"
                        y2="245.135"
                      />
                      <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
                      <path
                        d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
                        enableBackground="new    "
                        fill="#FF9900"
                        opacity="0.24"
                      />
                      <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
                      <ellipse
                        cx="67.732"
                        cy="140.894"
                        enableBackground="new    "
                        fill="#FF0000"
                        opacity="0.18"
                        rx="17.372"
                        ry="8.106"
                      />
                      <ellipse
                        cx="154.88"
                        cy="140.894"
                        enableBackground="new    "
                        fill="#FF0000"
                        opacity="0.18"
                        rx="17.371"
                        ry="8.106"
                      />
                      <path
                        d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
                        fill="#FFEFB5"
                      />
                      <circle
                        cx="113"
                        cy="113"
                        fill="none"
                        r="109"
                        stroke="#6E6E96"
                        strokeWidth="8"
                      />
                    </svg>
                    <div className="tracking-widest mt-4">
                      <span className="text-gray-500 text-xl">
                        There are no matches.
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="pb-10 w-full"></div>
            </div>
          </main>
        </div>
      </div>
      {/*  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center">
            <div className="w-[20em] h-[20em] ">
              <LottieAnimation />
            </div>
            <h2 className="text-2xl font-bold mb-2 ">Congrats!</h2>
            <p className="text-lg "> you earned 20 points</p>
            <p className="text-lg  badge badge-secondary mt-2 p-3">
              {" "}
              0 → 20 pts
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Home;
