import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import CardCatigory from '../components/CardCatigory';
import padelImage from '../assets/padel_Image.png';
import basketBall from '../assets/basket_Ball.png';
import VollyBall from '../assets/VollyBall.png';
import MatchCard from '../components/MatchCard';

function Home() {
  const ImageUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==';

  const teamA = [
    { name: 'Abdulaziz', img: ImageUrl, points: 190 },
    { name: 'Omar', img: ImageUrl, points: 50 },
  ];

  const teamB = [
    { name: 'Ahmed', img: ImageUrl, points: 110 },
    { name: '', img: ImageUrl, points: null },
  ];
  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      {/* <SideBar /> */}
      <div className="w-full h-full flex flex-col justify-between">
        <NavBar />
        <main className="max-w-full h-full flex relative overflow-y-auto">
          <div>
            {/* <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
          </div> */}
          </div>

          <div className="flex flex-col w-full my-4">
            <div className="text-center text-5xl p-2">Sports</div>
            <div className="bg-base-100 flex justify-center items-center gap-3 h-min max-md:flex-col py-12">
              <CardCatigory
                title={'Padel'}
                bgColor={'green-400'}
                img={padelImage}
              />
              <CardCatigory
                bgColor={'orange-400'}
                img={basketBall}
                title={'Basket ball'}
              />
              <CardCatigory
                bgColor={'cyan-400'}
                img={VollyBall}
                title={'Volly ball'}
              />
            </div>
            <div className="flex w-full flex-col">
              <div className="divider"></div>
            </div>
            <div className="py-8 flex flex-col justify-center items-center w-full gap-1">
              <MatchCard
                title="Padel Art"
                distance="423.5"
                price="SAR 200"
                date="15 Jul"
                time="5:00PM-6:30PM"
                status="Upcoming"
                teamA={teamA}
                teamB={teamB}
                court="Court 2"
                players="2v2"
                matchStatus="Match is full!"
                matchFee="50 SAR"
              />
              <MatchCard
                title="Padel Art"
                distance="423.5"
                price="SAR 200"
                date="15 Jul"
                time="5:00PM-6:30PM"
                status="Upcoming"
                teamA={teamA}
                teamB={teamB}
                court="Court 2"
                players="2v2"
                matchStatus="Match is full!"
                matchFee="50 SAR"
              />
              <MatchCard
                title="Padel Art"
                distance="423.5"
                price="SAR 200"
                date="15 Jul"
                time="5:00PM-6:30PM"
                status="Upcoming"
                teamA={teamA}
                teamB={teamB}
                court="Court 2"
                players="2v2"
                matchStatus="Match is full!"
                matchFee="50 SAR"
              />
              <MatchCard
                title="Padel Art"
                distance="423.5"
                price="SAR 200"
                date="15 Jul"
                time="5:00PM-6:30PM"
                status="Upcoming"
                teamA={teamA}
                teamB={teamB}
                court="Court 2"
                players="2v2"
                matchStatus="Match is full!"
                matchFee="50 SAR"
              />
              <MatchCard
                title="Padel Art"
                distance="423.5"
                price="SAR 200"
                date="15 Jul"
                time="5:00PM-6:30PM"
                status="Upcoming"
                teamA={teamA}
                teamB={teamB}
                court="Court 2"
                players="2v2"
                matchStatus="Match is full!"
                matchFee="50 SAR"
              />
              <MatchCard
                title="Padel Art"
                distance="423.5"
                price="SAR 200"
                date="15 Jul"
                time="5:00PM-6:30PM"
                status="Upcoming"
                teamA={teamA}
                teamB={teamB}
                court="Court 2"
                players="2v2"
                matchStatus="Match is full!"
                matchFee="50 SAR"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
