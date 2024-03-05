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
        className="p-1 gap-2 grid xs:grid-cols-2 xs:w-fit md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center xs:justify-items-start "
      >
        {hotels
          .filter((hotel) => hotel.zone === zone)
          .map((hotel, index) => {
            return (
              <a
                key={index}
                className="relative min-w-[150px] max-w-52 md:max-w-60 transform transition-transform duration-200 hover:scale-105"
                target="_blank"
                rel="noreferrer"
                href={hotel.url}
              >
                <img
                  src={hotel.image}
                  className="brightness-75 rounded-lg w-52 md:w-60 h-[120px] md:h-[150px]"
                />
                <span className="absolute top-1/3 w-full text-center text-white">
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
