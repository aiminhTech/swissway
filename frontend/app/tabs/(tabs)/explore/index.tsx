import CatergoryWidget from "@/components/explore/CatergoryWidget";
import ContentTitleWidget from "@/components/explore/ContentTitleWidget";
import Error from "@/components/Error";
import { ScrollView } from "@/components/ui/scroll-view";
import { groupTitles } from "@/libs/utils";
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

  const groupedTitles = groupTitles(infoTitles ?? []);

  return (
    <ScrollView
      style={{ height: "100%", margin: 16 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CatergoryWidget
        categories={categories}
        categoriesError={categoriesError}
      />
      {infoTitles ? (
        <ContentTitleWidget
          withLine={true}
          infoTitlesError={infoTitlesError}
          groupedTitles={groupedTitles}
          heading={"Essential Content"}
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "95%",
          }}
          marginRight={0}
        />
      ) : (
        <Error error={{ message: "No content found" }} />
      )}
    </ScrollView>
  );
}
