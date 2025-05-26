import { ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useApiStore } from "@/store/apiStore";
import { useEffect, useState } from "react";
import Error from "@/components/Error";
import ContentSection from "@/components/explore/ContentSection";

import { globalStyles } from "@/constants/Styles";

export default function InfoContents() {
  const params = useLocalSearchParams();
  const { detail } = params;

  const { fetchInfoContents, infoContents, contentsError, language } =
    useApiStore();

  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    if (typeof detail === "string") {
      const { base, variations } = JSON.parse(detail);

      if (variations.length === 0) {
        fetchInfoContents(language, base);
      } else {
        fetchInfoContents(language, base + "///");
      }
    }
  }, [language]);

  if (contentsError && !infoContents) {
    return <Error error={contentsError} />;
  }

  if (!infoContents || infoContents.length === 0) {
    return (
      <Error
        error={{
          message: "No content available.",
        }}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      {infoContents.map((item, itemIdx) =>
        item.info_contents?.map((content, contentIdx) => {
          const topicName = item.info_title.split("///")[1];

          return (
            <View key={`${itemIdx}-${contentIdx}`}>
              <ContentSection
                index={contentIdx}
                contents={content}
                topic={topicName}
                expandedItems={expandedItems}
                setExpandedItems={setExpandedItems}
              />
            </View>
          );
        })
      )}
    </ScrollView>
  );
}
