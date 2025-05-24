import CatergoryWidget from "@/components/explore/CatergoryWidget";
import InfoTitleWidget from "@/components/explore/ContentWidget";
import { ScrollView } from "@/components/ui/scroll-view";
import { useApiStore } from "@/store/apiStore";
import { useEffect } from "react";

export default function Explore() {
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
      <CatergoryWidget
        categories={categories}
        categoriesError={categoriesError}
      />
      {
        <InfoTitleWidget
          contentTitles={infoTitles}
          infoTitlesError={infoTitlesError}
        />
      }
    </ScrollView>
  );
}
