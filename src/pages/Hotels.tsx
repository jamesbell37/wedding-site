import { hotels } from "@/lib/hotels";
import React from "react";

const Hotels = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 gap-10">
        <div className={"font-bold text-xl px-5"}>Hotels</div>
        <div className="px-1 grid grid-cols-2 gap-1">
          {hotels.map((hotel) => {
            return (
              <a
                key={hotel.url}
                className="relative"
                target="_blank"
                rel="noreferrer"
                href={hotel.url}
              >
                <img src={hotel.image} className="brightness-75 rounded-lg" />
                <span className="absolute top-1/4 w-full text-center text-white">
                  {hotel.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Hotels;
