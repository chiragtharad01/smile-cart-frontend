import { NoData } from "neetoui";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute left-1/3 top-1/3">
      <NoData
        title={t("cantBeFound")}
        primaryButtonProps={{
          label: t("backToHome"),
          className: "bg-neutral-800 hover:bg-neutral-950",
          to: "/",
        }}
      />
    </div>
  );
};

export default PageNotFound;
