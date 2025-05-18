import { Colors } from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { InfoTitleType } from "@/models/models";
import { Heading } from "./ui/heading";
import { Box } from "./ui/box";
import Line from "@/components/Line";

type InfoTitleBoxProps = {
  title: string;
};

function InfoTitleBox({ title }: InfoTitleBoxProps) {
  return (
    <TouchableOpacity style={styles.touchBox}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

type InfoTitleProps = { contentTitles: InfoTitleType[] };

export default function InfoTitleWidget({ contentTitles }: InfoTitleProps) {
  return (
    <Box style={{ marginTop: 24 }}>
      <Heading style={styles.heading}>Essential Content</Heading>
      <Line />
      <ScrollView style={{ width: "100%" }}>
        <Box style={styles.grid}>
          {contentTitles.map((cat, idx) => (
            <InfoTitleBox key={idx} title={cat.information_title} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchBox: {
    backgroundColor: Colors.custom.cream,
    padding: 16,
    marginBottom: 12,
    marginRight: 16,
    borderRadius: 15,
    width: 150,
    height: 150,
    opacity: 0.9,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    color: Colors.custom.grey,
    fontSize: 22,
  },
  title: {
    color: Colors.custom.navy,
    fontSize: 16,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textAlign: "center",
  },
});
