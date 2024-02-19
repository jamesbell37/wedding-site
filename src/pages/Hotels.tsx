import { hotels } from "@/lib/hotels";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile";
import classNames from "classnames";

const Hotels = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  console.log(isMobile);

  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 gap-10 bg-off-white h-screen">
        <div className={"font-bold text-xl px-5"}>{t("hotels.title")}</div>
        <div
          className={classNames(`px-1 gap-1`, {
            "grid grid-cols-2": isMobile,
            "grid grid-cols-4": !isMobile,
          })}
        >
          {hotels.map((hotel, index) => {
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
