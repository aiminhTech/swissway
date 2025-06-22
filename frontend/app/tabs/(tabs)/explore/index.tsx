import CatergoryWidget from "@/components/explore/CatergoryWidget";
import ContentTitleWidget from "@/components/explore/ContentTitleWidget";
import { ScrollView } from "@/components/ui/scroll-view";
import { groupTitles } from "@/libs/utils";
import { useApiStore } from "@/store/apiStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Explore() {
  const { t } = useTranslation();

  const {
    language,
    fetchCategories,
    fetchInfoEssentialTitles,
    categoryState,
    infoEssentialTitleState,
  } = useApiStore();

  useEffect(() => {
    fetchCategories(language);
    fetchInfoEssentialTitles(language);
  }, [language]);

  const { titles, error } = infoEssentialTitleState;
  const groupedTitles = titles ? groupTitles(titles) : undefined;
  return (
    <ScrollView
      style={{ height: "100%", margin: 16 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CatergoryWidget categoryState={categoryState} />
      <ContentTitleWidget
        groupedTitles={groupedTitles}
        error={error}
        withLine={true}
        heading={t("explore.essential_content")}
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "95%",
        }}
        marginRight={0}
      />
    </ScrollView>
  );
}
