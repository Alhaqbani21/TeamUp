import React from 'react';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';

function NavBar() {
  return (
    <div className="flex bg-base-200 items-center">
      <div className="text-3xl ms-4 cursor-pointer hover:bg-base-300 p-2 rounded-md">
        Logo
      </div>
      <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-base-200">
        <div className="flex flex-shrink-0 items-center space-x-4 text-white">
          <div className="flex flex-col items-end justify-center">
            <div className="text-md font-medium text-center text-black">
              Abdulaziz
            </div>
            <div className="flex justify-around items-center bg-base-300 rounded-md text-black px-2">
              <img className="w-7" src={Platinum_1_Rank} alt="" />
              <div className="text-base font-regular text-blue-500">
                190 points
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
