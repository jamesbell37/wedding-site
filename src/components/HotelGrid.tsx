import useIsMobile from "@/hooks/useIsMobile";
import { hotels } from "@/lib/hotels";
import classNames from "classnames";

type Props = {
  title: string;
  zone: number;
};
const HotelGrid = ({ title, zone }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div className={"flex flex-col gap-3"}>
      <span className="px-5">{title}</span>
      <div
        className={classNames(`px-1 gap-1`, {
          "grid grid-cols-2": isMobile,
          "grid grid-cols-4": !isMobile,
        })}
      >
        {hotels
          .filter((hotel) => hotel.zone === zone)
          .map((hotel, index) => {
            return (
              <a
                key={index}
                className="relative"
                target="_blank"
                rel="noreferrer"
                href={hotel.url}
              >
                <img
                  src={hotel.image}
                  className="brightness-50 rounded-lg h-[120px] w-full"
                />
                <span className="absolute top-1/3 w-full text-center text-white">
                  {hotel.name}
                </span>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default HotelGrid;
