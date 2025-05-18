import CatergoryWidget from "@/components/CatergoryWidget";
import InfoTitleWidget from "@/components/ContentWidget";
import { ScrollView } from "@/components/ui/scroll-view";
import { useApiStore } from "@/store/apiStore";
import { useEffect } from "react";

export default function Dashboard() {
  const { fetchCategories, categories, fetchInfoTitles, infoTitles } =
    useApiStore();

  useEffect(() => {
    fetchCategories("de");
    fetchInfoTitles("de", "Arbeiten");
  }, []);

  return (
    <ScrollView
      style={{ height: "100%", margin: 16 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {categories && <CatergoryWidget categories={categories} />}
      {infoTitles && <InfoTitleWidget contentTitles={infoTitles} />}
    </ScrollView>
  );
}
