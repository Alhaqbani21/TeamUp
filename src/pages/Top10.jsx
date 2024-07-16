import React from 'react';
import SideBar from '../components/SideBar';
import TopThree from '../components/TopThree';
import LeaderboardTable from '../components/LeaderboardTable';
import RankSteps from '../components/RankSteps';
import { Fade } from 'react-awesome-reveal';
import crownImage from '../assets/crown.png';
import trophyImage from '../assets/trophyImage.png';

function Top10() {
  const playerImagePlaceholder =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==';

  const topPlayers = [
    { rank: 1, name: 'Player 1', points: 1000, img: playerImagePlaceholder },
    { rank: 2, name: 'Player 2', points: 900, img: playerImagePlaceholder },
    { rank: 3, name: 'Player 3', points: 800, img: playerImagePlaceholder },
    { rank: 4, name: 'Player 4', points: 700, img: playerImagePlaceholder },
    { rank: 5, name: 'Player 5', points: 600, img: playerImagePlaceholder },
    { rank: 6, name: 'Player 6', points: 500, img: playerImagePlaceholder },
    { rank: 7, name: 'Player 7', points: 400, img: playerImagePlaceholder },
    { rank: 8, name: 'Player 8', points: 300, img: playerImagePlaceholder },
    { rank: 9, name: 'Player 9', points: 200, img: playerImagePlaceholder },
    { rank: 10, name: 'Player 10', points: 100, img: playerImagePlaceholder },
  ];

  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />
      <div className="w-full h-full flex flex-col justify-between">
        <main className="max-w-full h-full flex relative overflow-y-auto">
          <div className="flex flex-col w-full my-4">
            <div className="text-center flex justify-center max-md:mb-4 gap-4 items-center text-5xl p-2 tracking-widest text-primary">
              <img className="max-md:hidden w-24" src={trophyImage} alt="" />
              Leaderboard
              <img className="w-24 max-md:hidden" src={trophyImage} alt="" />
            </div>
            <RankSteps />
            <span className="text-center text-3xl mb-3 tracking-wider font-bold text-primary">
              Top 3
            </span>{' '}
            <div className="flex flex-col items-center">
              <Fade
                triggerOnce={true}
                direction="right"
                className="w-full flex flex-col items-center"
              >
                <TopThree players={topPlayers.slice(0, 3)} crown={crownImage} />
              </Fade>
              <div className="flex w-[50%] flex-col">
                <div className="divider"></div>
              </div>
              <Fade
                className="w-full flex flex-col items-center"
                triggerOnce={true}
                direction="left"
              >
                <LeaderboardTable players={topPlayers.slice(3)} />
              </Fade>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Top10;
