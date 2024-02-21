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
        <div className={"font-bold text-xl px-5"}>{t("hotels.title")}</div>
        <HotelGrid title={"Zone 1: Near the Celebration"} zone={1} />
        <HotelGrid title={"Zone 2: In the City"} zone={2} />
        <HotelGrid title={"Zone 3: Near the Mass"} zone={3} />
      </div>
    )
  );
};

export default Hotels;
