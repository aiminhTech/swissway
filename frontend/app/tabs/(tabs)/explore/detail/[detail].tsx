import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import { useApiStore } from "@/store/apiStore";
import { useEffect } from "react";
import { Box } from "@/components/ui/box";

type InfoTitleProps = {
  title: string;
};

function InfoTitle({ title }: InfoTitleProps) {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.titleBox}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function InfoContents() {
  const params = useLocalSearchParams();
  const { detail } = params;

  const { fetchInfoContents, infoContents } = useApiStore();
  const contents = infoContents ? infoContents[0].info_content : [];

  useEffect(() => {
    if (typeof detail === "string") {
      fetchInfoContents(detail);
    }
  }, []);

  return (
    <ScrollView style={{ margin: 16 }}>
      <Heading style={styles.heading}>{detail}</Heading>
      {contents.map((c, idx) => (
        <Box key={idx}>
          <Text>{c.topic}</Text>
          <Text>{c.description}</Text>
        </Box>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  heading: {
    fontSize: 22,
    color: Colors.custom.grey,
    fontWeight: "bold",
  },
  titleBox: {
    backgroundColor: Colors.custom.cream,
    padding: 16,
    marginBottom: 12,
    borderRadius: 15,
    opacity: 0.9,
    height: 80,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
  },
  title: {
    color: Colors.custom.navy,
    fontWeight: 600,
    fontSize: 16,
  },
});
