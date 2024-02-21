import { useTranslation } from "react-i18next";

const RSVPButton = () => {
  const { t } = useTranslation();

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://forms.gle/Sz7Y9maYZpvYmHUy7"
      className="text-white font-medium rounded-xl p-2 w-fit bg-gradient-to-r from-[#A175FF] to-[#7331FF]"
    >
      {t("common.rsvp")}
    </a>
  );
};

export default RSVPButton;
