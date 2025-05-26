import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Info, Link } from "@/models/models";
import InfoLink from "./InfoLink";

type InfoCardProps = {
  info: Info;
  parentIndex: string;
  expandedItems: { [key: string]: boolean };
  setExpandedItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
};

export default function InfoCard({
  info,
  parentIndex,
  expandedItems,
  setExpandedItems,
}: InfoCardProps) {
  const handleOnPressed = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>{info.title}</Text>
      {info.contents.map((item, cIdx) => {
        const key = `${parentIndex}-${cIdx}`;
        const isExpanded = expandedItems[key];
        return (
          <Pressable
            key={cIdx}
            style={styles.infoContentBlock}
            onPress={() => handleOnPressed(key)}
          >
            {item.subtitle ? (
              <>
                <Text style={styles.subtitle}>
                  {item.subtitle} {isExpanded ? "▲" : "▼"}
                </Text>
                {isExpanded && (
                  <TextSection text={item.text} links={item.links} />
                )}
              </>
            ) : (
              <TextSection text={item.text} links={item.links} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

type TextSectionProps = { text: string; links: Link[] | undefined };

function TextSection({ text, links }: TextSectionProps) {
  return (
    <>
      <Text style={styles.text}>{text}</Text>
      <InfoLink links={links} />
    </>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    backgroundColor: Colors.custom.cream,
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    color: Colors.custom.navy,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContentBlock: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.custom.brown,
    fontWeight: "600",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: Colors.custom.grey,
    lineHeight: 20,
  },
});
