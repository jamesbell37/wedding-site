import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile";
import HotelGrid from "@/components/HotelGrid";

const Hotels = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  console.log(isMobile);

  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 gap-10 bg-off-white h-screen">
        <div className={"font-bold  px-5 pt-5 text-2xl"}>
          {t("hotels.title")}
        </div>
        <HotelGrid title={t("hotels.zone1")} zone={1} />
        <HotelGrid title={t("hotels.zone2")} zone={2} />
        <HotelGrid title={t("hotels.zone3")} zone={3} />
      </div>
    )
  );
};

export default Hotels;
