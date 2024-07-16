import padelImage from "../assets/padel_Image.png";
import basketBall from "../assets/basket_Ball.png";
import VollyBall from "../assets/VollyBall.png";
import { Fade } from "react-awesome-reveal";
import CardCategory from "../components/CardCategory";
function Cardheder() {
  return (
    <>
      <h2 className="text-center text-3xl p-2 tracking-widest  text-[#007955]">
        Browse Stadiums By Sport
      </h2>

      <Fade triggerOnce={true} direction="left">
        <div className=" flex justify-center items-center gap-3 h-min max-md:flex-col py-12 ">
          <CardCategory
            title={"Padel"}
            bgColor={"green-400"}
            img={padelImage}
          />

          <CardCategory
            bgColor={"orange-400"}
            img={basketBall}
            title={"Basket ball"}
          />
          <CardCategory
            bgColor={"cyan-400"}
            img={VollyBall}
            title={"Volly ball"}
          />
        </div>
      </Fade>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
    </>
  );
}

export default Cardheder;
