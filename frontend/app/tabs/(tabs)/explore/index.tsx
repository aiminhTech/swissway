import CatergoryWidget from "@/components/CatergoryWidget";
import InfoTitleWidget from "@/components/ContentWidget";
import Error from "@/components/Error";
import { ScrollView } from "@/components/ui/scroll-view";
import { useApiStore } from "@/store/apiStore";
import { useEffect } from "react";

export default function Dashboard() {
  const {
    fetchCategories,
    categories,
    categoriesError,
    fetchInfoTitles,
    infoTitles,
    infoTitlesError,
    language,
  } = useApiStore();

  useEffect(() => {
    fetchCategories(language);
    fetchInfoTitles(language, "Health");
  }, [language]);

  return (
    <ScrollView
      style={{ height: "100%", margin: 16 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {categories && <CatergoryWidget categories={categories} />}
      {
        <InfoTitleWidget
          contentTitles={infoTitles}
          infoTitlesError={infoTitlesError}
        />
      }
    </ScrollView>
  );
}
