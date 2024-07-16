import React from 'react';
import BottomNavBar from '../components/BottomNavBar';
import SideBar from '../components/SideBar';
import { Fade } from 'react-awesome-reveal';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';

const avatarPlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==';

const user = {
  name: 'Abdulaziz',
  points: 190,
  joinedAt: 'January 1, 2021',
  matchesPlayed: 50,
  location: 'Saudi Arabia, Riyadh',
  number: '0552161197',
  email: 'alhaqbani21@gmail.com',
};

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

const rankImage = getRankImage(user.points);
const rank =
  user.points >= 150
    ? 'Platinum'
    : user.points >= 100
    ? 'Gold'
    : user.points >= 50
    ? 'Silver'
    : 'Iron';

function Profile() {
  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />
      <BottomNavBar />
      <div className="w-full h-full flex relative flex-col items-center bg-primary">
        <div className="relative w-full">
          <img
            src="https://media.istockphoto.com/id/1363976548/photo/paddle-tennis-racket-and-balls-on-the-blue-paddle-court.jpg?s=612x612&w=0&k=20&c=yxbb5H6rbALy_YG5awOHCRyn7Ge02SQL8SwAcbeKIwA="
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] object-cover filter blur-sm"
          />
          <div className="absolute left-10 -bottom-24">
            <img
              src={avatarPlaceholder}
              alt="User Profile"
              className="rounded-full w-40 h-40 border-4 border-white"
            />
            <h1 className="text-white text-4xl font-serif">{user.name}</h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-20">
          <div className="bg-primary rounded-lg p-4 w-full mt-4">
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className=" divide-y  text-white divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Joined At
                      </dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full "
                      >
                        <dd className="text-lg font-semibold">
                          {user.joinedAt}
                        </dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Location
                      </dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full "
                      >
                        <dd className="text-lg font-semibold">
                          {user.location}
                        </dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full "
                      >
                        <dd className="text-lg font-semibold">{user.number}</dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <Fade
                        triggerOnce={true}
                        direction="left"
                        className="w-full "
                      >
                        <dd className="text-lg font-semibold">{user.email}</dd>
                      </Fade>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className=" divide-y  text-white divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1  md:text-lg text-gray-400">Rank</dt>
                      <Fade triggerOnce={true} direction="right" className="">
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold">{rank} </div>
                          <img src={rankImage} alt="Rank" className="w-7 h-7" />
                        </div>
                      </Fade>
                    </div>
                    <div className="flex flex-col pt-3 ">
                      <dt className="mb-1 md:text-lg text-gray-400">Points</dt>
                      <Fade triggerOnce={true} direction="right" className="">
                        <dd className="text-lg font-semibold">{user.points}</dd>
                      </Fade>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 md:text-lg text-gray-400">
                        Matches Played
                      </dt>
                      <Fade triggerOnce={true} direction="right" className="">
                        <dd className="text-lg font-semibold">
                          {user.matchesPlayed}
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
