import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useApiStore } from "@/store/apiStore";
import { useEffect, useState } from "react";
import Error from "@/components/Error";

import { globalStyles } from "@/constants/Styles";
import ContentSection from "@/components/explore/ContentSection";
import BackButton from "@/components/ui/BackButton";
import { Box } from "@/components/ui/box";
import { Colors } from "@/constants/Colors";
import Line from "@/components/Line";

export default function InfoContents() {
  const params = useLocalSearchParams();
  const { detail } = params;

  const { fetchInfoContents, infoContentState, language } = useApiStore();

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
  const { contents, error } = infoContentState;

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Box style={styles.headingWrapper}>
        <BackButton />
        <Text style={styles.heading}>Back</Text>
      </Box>
      <Line></Line>
      {error && <Error error={error} />}
      {contents &&
        contents.map((item, itemIdx) =>
          item.information_contents.map((content, contentIdx) => {
            const topicName = item.information_title.split("///")[1];

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

const styles = StyleSheet.create({
  headingWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    fontSize: 22,
    color: Colors.custom.grey,
    fontWeight: "bold",
  },
});
