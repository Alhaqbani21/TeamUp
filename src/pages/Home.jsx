// import React from 'react';
// import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import CardCategory from '../components/CardCategory';
import padelImage from '../assets/padel_Image.png';
import basketBall from '../assets/basket_Ball.png';
import VollyBall from '../assets/VollyBall.png';
import MatchCard from '../components/MatchCard';
import { Fade } from 'react-awesome-reveal';
import moment from 'moment';
import basketBallImage from '../assets/basketBallImage.png';
import BottomNavBar from '../components/BottomNavBar';

function Home() {
  const ImageUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==';
  const backgroundImage =
    'https://champs-sportsclub.com/wp-content/uploads/2024/05/Playing-Tennis-padel-1.jpg';

  const backgroundImageVolly = 'https://images.alphacoders.com/134/1349291.png';
  const backgroundImageBasket = basketBallImage;
  function isWithinTwoHours(date, time) {
    const matchTime = moment(`${date} ${time.split('-')[0]}`, 'DD MMM h:mmA');
    const now = moment();
    return matchTime.diff(now, 'hours') <= 2;
  }
  const matches = [
    {
      id: 1,
      title: 'Basket ball - Full',
      distance: '423.5',
      price: 'SAR 220',
      date: '15 Jul',
      time: '5:00PM-6:30PM',
      status: 'Upcoming',
      teamA: [
        { name: 'Abdulaziz', img: ImageUrl, points: 190 },
        { name: 'Omar', img: ImageUrl, points: 50 },
        { name: 'Omar', img: ImageUrl, points: 50 },
        { name: 'Omar', img: ImageUrl, points: 50 },
        { name: '', img: ImageUrl, points: null },
      ],
      teamB: [
        { name: 'Ahmed', img: ImageUrl, points: 110 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
        { name: '', img: ImageUrl, points: null },
      ],
      court: 'Court 1',
      players: '2v2',
      matchFee: '50 SAR',
      category: 'Vollyball',
      backgroundImage: backgroundImageBasket,
      isWithinTwoHours: isWithinTwoHours('15 Jul', '5:00PM'),
    },
    {
      id: 2,
      title: 'VollyBall - Full',
      distance: '423.5',
      price: 'SAR 220',
      date: '15 Jul',
      time: '5:00PM-6:30PM',
      status: 'Upcoming',
      teamA: [
        { name: 'Abdulaziz', img: ImageUrl, points: 190 },
        { name: 'Omar', img: ImageUrl, points: 50 },
        { name: 'Omar', img: ImageUrl, points: 50 },
        { name: 'Omar', img: ImageUrl, points: 50 },
        { name: '', img: ImageUrl, points: null },
        { name: '', img: ImageUrl, points: null },
      ],
      teamB: [
        { name: 'Ahmed', img: ImageUrl, points: 110 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
        { name: '', img: ImageUrl, points: null },
        { name: '', img: ImageUrl, points: null },
      ],
      court: 'Court 1',
      players: '2v2',
      matchFee: '50 SAR',
      category: 'Vollyball',
      backgroundImage: backgroundImageVolly,
      isWithinTwoHours: isWithinTwoHours('15 Jul', '5:00PM'),
    },

    {
      id: 3,
      title: 'Padel Art - 3/4',
      distance: '423.5',
      price: 'SAR 200',
      date: '15 Jul',
      time: '4:00PM-5:30PM', // Within 2 hours
      status: 'Upcoming',
      teamA: [
        { name: 'Abdulaziz', img: ImageUrl, points: 190 },
        { name: '', img: ImageUrl, points: null },
      ],
      teamB: [
        { name: 'Ahmed', img: ImageUrl, points: 110 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
      ],
      court: 'Court 1',
      players: '2v2',
      matchFee: '50 SAR',
      backgroundImage,
      category: 'Padel',
      isWithinTwoHours: isWithinTwoHours('15 Jul', '4:00PM'),
    },
    {
      id: 4,
      title: 'Padel Art - 2/4',
      distance: '423.5',
      price: 'SAR 200',
      date: '17 Jul',
      time: '5:00PM-6:30PM',
      status: 'Upcoming',
      teamA: [
        { name: 'Abdulaziz', img: ImageUrl, points: 190 },
        { name: '', img: ImageUrl, points: null },
      ],
      teamB: [
        { name: 'Ahmed', img: ImageUrl, points: 110 },
        { name: '', img: ImageUrl, points: null },
      ],
      court: 'Court 3',
      players: '2v2',
      matchFee: '50 SAR',
      backgroundImage,
      category: 'Padel',
      isWithinTwoHours: isWithinTwoHours('17 Jul', '5:00PM'),
    },
    {
      id: 6,
      title: 'Padel Art - 1/4',
      distance: '423.5',
      price: 'SAR 200',
      date: '18 Jul',
      time: '6:00PM-7:30PM', // Within 2 hours
      status: 'Upcoming',
      teamA: [
        { name: 'Abdulaziz', img: ImageUrl, points: 190 },
        { name: '', img: ImageUrl, points: null },
      ],
      teamB: [
        { name: '', img: ImageUrl, points: null },
        { name: '', img: ImageUrl, points: null },
      ],
      court: 'Court 4',
      players: '2v2',
      matchFee: '50 SAR',
      category: 'Padel',
      backgroundImage,
      isWithinTwoHours: isWithinTwoHours('18 Jul', '6:00PM'),
    },
    {
      id: 2,
      title: 'Padel Art - Full',
      distance: '423.5',
      price: 'SAR 200',
      date: '15 Jul',
      time: '5:00PM-6:30PM',
      status: 'Upcoming',
      teamA: [
        { name: 'Abdulaziz', img: ImageUrl, points: 190 },
        { name: 'Omar', img: ImageUrl, points: 50 },
      ],
      teamB: [
        { name: 'Ahmed', img: ImageUrl, points: 110 },
        { name: 'Khalid', img: ImageUrl, points: 120 },
      ],
      court: 'Court 1',
      players: '2v2',
      matchFee: '50 SAR',
      category: 'Padel',
      backgroundImage,
      isWithinTwoHours: isWithinTwoHours('15 Jul', '5:00PM'),
    },
  ];

  const handleRequestJoin = (team, index, matchId) => {
    console.log(
      `Request to join team ${team} at index ${index} for match ${matchId}`
    );
    // Add your logic here to handle the request to join
  };
  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />
      <BottomNavBar />
      <div className="w-full h-full flex flex-col justify-between">
        {/* <NavBar /> */}
        <main className="max-w-full h-full flex relative overflow-y-auto">
          <div className="flex flex-col w-full my-4">
            <div className="text-center text-5xl p-2 tracking-widest text-secondary">
              Sports
            </div>
            <Fade triggerOnce={true} direction="left">
              <div className="bg-base-100 flex justify-center items-center gap-3 h-min max-md:flex-col py-12 ">
                <CardCategory
                  title={'Padel'}
                  bgColor={'green-400'}
                  img={padelImage}
                />

                <CardCategory
                  bgColor={'orange-400'}
                  img={basketBall}
                  title={'Basket ball'}
                />
                <CardCategory
                  bgColor={'cyan-400'}
                  img={VollyBall}
                  title={'Volly ball'}
                />
              </div>
            </Fade>
            <div className="flex w-full flex-col">
              <div className="divider"></div>
            </div>

            <div className="py-8 flex flex-col justify-center items-center w-full gap-1">
              {/* Search Input */}
              <div className="text-center text-5xl p-2 tracking-widest text-secondary">
                Matches
              </div>

              <div className="form-control p-0 flex-row w-full justify-center mb-4">
                <input
                  type="text"
                  placeholder="Search for match"
                  className="px-3  w-[30%] input rounded-none rounded-s-lg
            input-bordered focus:outline-none  shadow-2xl max-md:w-[70%]"
                  onChange={(e) => 'setsearchInput(e.target.value)'}
                  onKeyDown={(e) => (e.key === 'Enter' ? null : null)}
                />

                <button
                  onClick={() => {}}
                  className="w-10 bg-blue-400 rounded-r-lg"
                >
                  {' '}
                  <svg
                    className=" m-auto
        text-slate-200 "
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

              {/* Matches */}

              {matches.map((match) => (
                <MatchCard
                  key={match.id}
                  title={match.title}
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
                  matchFee={match.matchFee}
                  backgroundImage={match.backgroundImage}
                  onRequestJoin={handleRequestJoin}
                  matchId={match.id}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
