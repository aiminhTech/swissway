import CatergoryWidget from "@/components/CatergoryWidget";
import ContentWidget from "@/components/ContentWidget";
import { Center } from "@/components/ui/center";
import { ScrollView } from "@/components/ui/scroll-view";
import { CategoryType, InfoTitleType } from "@/models/models";
import { fetchCategories, fetchInfoTitles } from "@/services/api";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function Dashboard() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [infoTitles, setInfoTitles] = useState<InfoTitleType[]>([]);

  useEffect(() => {
    fetchCategories("de")
      .then(setCategories)
      .catch((error) => console.error("Error fetching categories:", error));

    fetchInfoTitles("de")
      .then(setInfoTitles)
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <ScrollView
      style={{ height: "100%", margin: 16 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CatergoryWidget categories={categories} />
      <ContentWidget contentTitles={infoTitles} />

      <Center className="flex-1"></Center>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
