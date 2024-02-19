import { useTranslation } from "react-i18next";

const Taxis = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === "en" ? "+34 " : "";
  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 gap-5 px-5 bg-off-white h-screen">
        <div className="text-xl font-bold">Taxis</div>
        <div className={"text-md"}>{t("taxis.title")}</div>
        <ul className="list-disc px-5">
          <li>Pide Taxi Cantabria ({prefix}942333333)</li>
          <li>Taxis Torrelavega ({prefix}942888888)</li>
          <li>Taxis Santander ({prefix}942343434)</li>
          <li>Taxis Somo/Langre ({prefix}669557476)</li>
        </ul>
      </div>
    )
  );
};

export default Taxis;
