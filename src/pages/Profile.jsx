import React, { useEffect, useState } from 'react';
import BottomNavBar from '../components/BottomNavBar';
import SideBar from '../components/SideBar';
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';
import profile from '../assets/profile.jpg';
import { auth, db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const avatarPlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==';

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

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    document.getElementById('logout_modal').showModal();
  };

  const confirmLogout = async () => {
    try {
      await signOut(auth);
      navigate('../login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  if (!userData) {
    return (
      <div className="h-screen flex justify-center items-center w-full m-auto">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    ); // Show a loading indicator while fetching user data
  }

  const rankImage = getRankImage(userData.points);
  const rank =
    userData.points >= 150
      ? 'Platinum'
      : userData.points >= 100
      ? 'Gold'
      : userData.points >= 50
      ? 'Silver'
      : 'Iron';

  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />

      <BottomNavBar />
      <dialog id="logout_modal" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('logout_modal').close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg flex justify-center items-center">
            Are you sure you want to Logout?
          </h3>
          <div className="flex gap-2 py-4 justify-center items-center">
            <button
              className="border-2 border-red-700 bg-red-700 text-white w-[4em] rounded-lg"
              onClick={() => {
                confirmLogout();
                document.getElementById('logout_modal').close();
              }}
            >
              Yes
            </button>
            <button
              className="border-2 border-[#0c0c0c] w-[4em] rounded-lg"
              onClick={() => document.getElementById('logout_modal').close()}
            >
              No
            </button>
          </div>
        </div>
      </dialog>
      <div className="w-full h-full flex relative flex-col items-center overflow-y-auto overflow-x-hidden">
        <div className="relative w-full">
          <img
            src={profile}
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] object-cover filter "
          />
          <div className="absolute left-[10rem] -bottom-28 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2">
            <img
              src={avatarPlaceholder}
              alt="User Profile"
              className="rounded-full w-40 h-40 border-4 border-white"
            />
            <div className="flex items-center justify-between w-full">
              <h1 className="text-primary text-4xl font-serif mr-4 ">
                {userData.name}
              </h1>

              <div className="flex justify-end w-full ml-[54em] max-sm:w-0 max-sm:ml-[18em]">
                <div
                  draggable="true"
                  role="button"
                  title="Hover chip"
                  onClick={handleLogout}
                  className="h-8 mt-7 px-3 w-max text-primary group badge badge-outline flex gap-2 items-center border-[1px] rounded-full hover:opacity-80 "
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="cursor-pointer text-red-500"
                    title="Logout"
                  />
                  <span className="block text-sm font-medium">Logout</span>
                  <ToastContainer position="bottom-center" autoClose={2000} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-20">
          <div className="md:ms-72 rounded-lg p-4 w-full mt-4">
            <div className="w-full md:w-[80%] my-auto py-14 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-5 justify-center">
                <div className="w-full">
                  <dl className="divide-y text-white divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 md:text-lg text-primary">
                        Joined At
                      </dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full"
                      >
                        <dd className="text-lg font-semibold text-secondary">
                          {userData.joinedAt}
                        </dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 md:text-lg text-primary">Location</dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full"
                      >
                        <dd className="text-lg font-semibold text-secondary">
                          {userData.location}
                        </dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 md:text-lg text-primary">Email</dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full"
                      >
                        <dd className="text-lg font-semibold text-secondary">
                          {userData.email}
                        </dd>
                      </Fade>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="divide-y text-white divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 md:text-lg text-primary">Rank</dt>
                      <Fade triggerOnce={true} direction="right" className="">
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold text-secondary">
                            {rank}
                          </div>
                          <img src={rankImage} alt="Rank" className="w-7 h-7" />
                        </div>
                      </Fade>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 md:text-lg text-primary">Points</dt>
                      <Fade triggerOnce={true} direction="right" className="">
                        <dd className="text-lg font-semibold text-secondary mb-3">
                          {userData.points}
                        </dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 md:text-lg text-primary">
                        Matches Played
                      </dt>
                      <Fade triggerOnce={true} direction="right" className="">
                        <dd className="text-lg font-semibold text-secondary">
                          {userData.matchesPlayed}
                        </dd>
                      </Fade>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
