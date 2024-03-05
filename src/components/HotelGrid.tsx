import { hotels } from "@/lib/hotels";

type Props = {
  title: string;
  zone: number;
};
const HotelGrid = ({ title, zone }: Props) => {

  return (
    <div className={"flex flex-col gap-3"}>
      <span className="px-5 text-xl">{title}</span>
      <div className="overflow-scroll">
      <div
        className="p-1 gap-1.5 grid grid-cols-auto min-w-[150px] xs:grid-cols-2 xs:w-fit md:grid-cols-3 lg:grid-cols-6 place-content-center xs:place-content-start w-full"
      >
        {hotels
          .filter((hotel) => hotel.zone === zone)
          .map((hotel, index) => {
            return (
              <a
                key={index}
                className="relative transform transition-transform duration-200 hover:scale-105"
                target="_blank"
                rel="noreferrer"
                href={hotel.url}
              >
                <img
                  src={hotel.image}
                  className="brightness-75 rounded-lg w-52 h-[120px] md:h-[150px]"
                />
                <span className="absolute top-1/3 w-full  text-center text-white">
                  {hotel.name}
                </span>
              </a>
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default HotelGrid;
