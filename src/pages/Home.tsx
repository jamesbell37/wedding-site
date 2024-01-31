import Carousel from "../components/Carousel";
import React from "react";
import HotelImage from "../assets/hotel.jpeg";
import { Link } from "react-router-dom";

type Props = {
  isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
  return (
    !isMenuOpen && (
      <main className="flex flex-col gap-10 flex-1">
        <Carousel />
        <div className="flex flex-col gap-4 px-5">
          <h2 className="text-center text-2xl">
            We are extremely excited for you to join us on this special day!
          </h2>
          <p>
            We will see you on <strong>Friday, July 5th</strong> at 5PM at
            Iglesia de Galizano and afterwards at the celebration in{" "}
            <strong>Finca de San Juan, Castañeda</strong>
          </p>
        </div>
        <span className={"px-5 relative"}>
          <Link to={"/hotels"}>
            <img src={HotelImage} className="rounded-lg brightness-50" />
            <span className="absolute top-1/2 self-center text-white text-lg w-full text-center">
              Hotel recommendations
            </span>
          </Link>
        </span>
      </main>
    )
  );
};

export default Home;
