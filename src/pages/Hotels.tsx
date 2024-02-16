import { hotels } from "@/lib/hotels";
import { useTranslation } from "react-i18next";

const Hotels = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 gap-10">
        <div className={"font-bold text-xl px-5"}>{t("hotels.title")}</div>
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
                <img
                  src={hotel.image}
                  className="brightness-75 rounded-lg h-[120px] w-full"
                />
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
