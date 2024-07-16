import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import { MdOutlineLeaderboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function SideBar() {
  return (
    <aside className="h-full w-32 flex flex-col space-y-10 items-start justify-center relative text-white border-gray-400 z-50">
      <div className="h-max ps-1 w-16 flex flex-col space-y-6 items-start justify-center relative bg-primary rounded-r-3xl hover:w-32 group hover:ps-0 hover:bg-white hover:text-gray-800 transition-all duration-300 ease-linear">
        <Link className="w-full" to={"../"}>
          <div className="h-10 w-full flex items-center justify-start pl-2 space-x-2 rounded-tr-3xl cursor-pointer  hover:bg-base-200">
            <IoHomeOutline
              size={25}
              className="group-hover:text-black text-white"
            />

            <span className=" group-hover:text-secondary font-bold hidden group-hover:inline-block">
              Home
            </span>
          </div>
        </Link>
<<<<<<< HEAD
        <Link className="w-full" to={'../Book'}>
=======
        <Link className="w-full" to={"/Book"}>
>>>>>>> Amal
          <div className="h-10 w-full flex items-center justify-start pl-2 space-x-2  cursor-pointer hover:bg-base-200">
            <CiCirclePlus
              size={25}
              className="group-hover:text-black text-white"
            />
            <span className="group-hover:text-secondary font-bold hidden group-hover:inline-block">
              Book
            </span>
          </div>
        </Link>

        <Link className="w-full" to={"../top10"}>
          <div className="h-10 w-full flex items-center justify-start pl-2 space-x-2  cursor-pointer hover:bg-base-200">
            <MdOutlineLeaderboard
              size={25}
              className="group-hover:text-black text-white"
            />
            <span className="group-hover:text-secondary font-bold hidden group-hover:inline-block">
              Top 10
            </span>
          </div>
        </Link>

        <Link className="w-full" to={"../Playes"}>
          <div className="h-10 w-full flex items-center justify-start pl-2 space-x-2 rounded-br-3xl cursor-pointer  hover:bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black group-hover:text-gray-800 group-hover:fill-black"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className=" group-hover:text-secondary font-bold hidden group-hover:inline-block">
              Players
            </span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col-reverse items-center absolute bottom-0 mb-10">
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="text-md font-medium text-center text-black">
            Abdulaziz
          </div>
          <div className="flex justify-around items-center bg-base-300 rounded-md text-black px-2">
            <img className="w-7" src={Platinum_1_Rank} alt="Rank" />
            <div className="text-xs font-regular text-blue-500">190 points</div>
          </div>
        </div>
        <div className="avatar mb-2">
          <div className="w-10 rounded-full">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXY2Nitra2qqqqurq7b29uzs7PIyMjS0tLV1dW8vLzU1NTQ0NDAwMDDw8PHx8fExMS3t7dSrNoXAAAFPklEQVR4nO2d25bqIAxAWxp6r/b/v/aItVpnHC00NzzZL766F5AAhVAUhmEYhmEYhmEYhkLgivS/IOHi1Q91PU3jOE3nemiKbzKFoqk7726Ut99qnobiGyyhqLvq4vWCi6af+rwloRjm13YPy2pqs3WEYqre6q2S85ClI/Td++bbSvr8HKHo9urdHOu8HGGK0Vsc5z4fR2h8VAOujmM2imOKX1CssmhGaJMa8OZ41q8IdbLeVXGWFvgEpPbQO1Uv7fCe+ajgBdW5EUOwdIoVD8SYJ0W12R9JUK0ioAkq7agQNxH9pKgvoh5PEz9opY1+ADWyYOmV9dMGW7B0nS7FCltQWUDFjTJ3RUVDcaAQVDUUCfpowJ2UKNL00auikn6KH0fv6Iin4MkEL7M3absAeq7foiHYUDZhSIrSfmSZYqUSb0TaJtQwEklHYWAWbkSYiQXFG7GnbsKylN3rR1/3vkJSsACiGekW2YRBnCoWJGMNjAyCsvNvhk4q200JVxVb5FYYMPEYlnKG5Ol+wTVShgWPYOnOUoIsuSIgli9OXIZSSyjomATFMiL10nBjKLW+4BIs3UlGsOUahmKnpdhCqdishnwD44FQumA0lEkXbLNSOUOOHYwbTkKQMeH/F4YyvdTa0AxjDK2X0hieGbOFZXwaGGdtQh+7GdcWQjNvpv3ggNSeMN8KeBIyZPlqcTUU+nLBteUtt+nN823tiowgY7oQOxnFcExhQeywAsdX/IDcJ1KuubfgZ26mTzOCZ9uYdr0FzwzxfJuRPPfFtKEoJ8iUL0QPe3N0U+HDiQzRVPiUcEsuKH1Fnz7pi98qIV/oi18qoV4kCp6HWiFuROmD7AV1I6q48UzZiDpK1tBdzlMQSG+QGUrnwhUgm9hU0morVLNT6esyG2iWGDrCzAJNP/XSWlsApfTOMypS4Qb0jUVVJRUC2ENR0yBcwC5uomA++hPcaCN//fcFmBtvalL9M4iKSqajv8BSVFx2D+eIjdIuuoAQUbXXhoThqKD4ztNHjpQvVVR05x0H4o3zTQaC156a5qhvpvY3Kc2YV1FvaGKXU65UUIkmChhiIo4rxyKjBrwB9V5H53L0C0DTfY45zvlTxi9AQHF6+/yDc9WYRZXyd4QnPMIDJS/synlqMm6+DVC09bnz6/srAT93df8Vj7A8CC/ntM1woenbr3pHxzAMwzC+nutbfzS5W/4ZQYB2qKdu9pWvCPDed+O5boRmdlA057lyr+bTqFxnsGPdMlsC/PneH5WnHxn34GAYOe3uktWZ5xHB/TsTBJId/VoZ6j3vGRJKzrSdVbD9Ho6E7Zj4Hh46bqISZCxG8x5XUWyNQy87AJ9xI74gW/nAfTiPPRoJj8gmgnxgSkeIeQbzbG3Ldus+CrxvjY1OwZD+cRR7rYJYikq76ALKsQ22CqVJHB+LfIUvEjl6NoXyqggSx07za5vJvOaIIVvVi0McCai6o8xK+uSGs1bZIZIvf+XRRwOJ/VR9oniQWNuFsRbbYZLOFHPV1kEhqdYZY8FADBLaMI9MsZLQiDmNwkD0DRu+Rw+QiA6n+eTClciCbnp2f3cTexszp1SxELkWzi3OBKJiDWeNZzSiSqBkNZ9ZiXoSirF4LiIxK4wsNi9+E9FJcxyGUXtS2U1oFmIGovR/TWT/BniegSZm4pbZ0vDO/scFGF88QGX3nhtjCWtcdgfTTJNFjGE+24jP7F4FZ5oOzdAMc8AMzVA/ZmiG+jFDM9SPGZqhfszQDPVjhmaoHzM0Q/2YoRnqxwzNUD9m+K2G/wBMuHLbUScvSAAAAABJRU5ErkJggg==" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
