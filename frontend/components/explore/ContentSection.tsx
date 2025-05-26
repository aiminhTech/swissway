import { View, Text, StyleSheet } from "react-native";
import InfoCard from "./InfoCard";
import { Colors } from "@/constants/Colors";
import { InfoContent } from "@/models/models";

type ContentSectionProps = {
  contents: InfoContent;
  topic: string;
  index: number;
  expandedItems: { [key: string]: boolean };
  setExpandedItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
};

export default function ContentSection({
  contents,
  topic,
  index,
  expandedItems,
  setExpandedItems,
}: ContentSectionProps) {
  return (
    <View style={styles.topicContainer}>
      {topic && <Text style={styles.topic}>{topic}</Text>}
      {contents.infos.map((info, idx) => (
        <InfoCard
          key={idx}
          info={info}
          parentIndex={`${index}-${idx}`}
          expandedItems={expandedItems}
          setExpandedItems={setExpandedItems}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  topicContainer: {
    marginBottom: 24,
  },
  topic: {
    fontSize: 20,
    color: Colors.custom.grey,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
});
