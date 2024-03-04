import { useTranslation } from "react-i18next";
import HotelGrid from "@/components/HotelGrid";

const Hotels = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();

  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 gap-5 bg-off-white">
        <div className={"font-bold  px-5 pt-5 text-2xl"}>
          {t("hotels.title")}
        </div>
        <div className="text-sm px-5">{t("hotels.info")}</div>
        <HotelGrid title={t("hotels.zone2")} zone={2} />
        <HotelGrid title={t("hotels.zone3")} zone={3} />
      </div>
    )
  );
};

export default Hotels;
