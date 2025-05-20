import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useApiStore } from "@/store/apiStore";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import Line from "@/components/Line";
import { useEffect } from "react";
import Error from "@/components/Error";

type InfoTitleProps = {
  title: string;
  infoTitle: string;
};

function InfoTitle({ title, infoTitle }: InfoTitleProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.titleBox}
      onPress={() => {
        router.push({
          pathname: "/tabs/(tabs)/explore/detail/[detail]",
          params: { detail: encodeURI(infoTitle) },
        });
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Infos() {
  const params = useLocalSearchParams();
  const { cat } = params;

  const { infoTitles, fetchInfoTitles, infoTitlesError, language } =
    useApiStore();
  const infos = infoTitles?.filter((t) => t.category_name === cat).sort() || [];

  useEffect(() => {
    if (typeof cat == "string") {
      fetchInfoTitles(language, cat);
    }
  }, []);
  return (
    <ScrollView style={{ margin: 16 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Heading style={styles.heading}>{cat}</Heading>
      <Line></Line>
      {infoTitlesError && <Error error={infoTitlesError} />}
      <Box>
        {infos.map((i, idx) => {
          const title = i.information_title.split("/");
          return (
            <InfoTitle
              key={idx}
              title={title[0]}
              infoTitle={i.information_title}
            ></InfoTitle>
          );
        })}
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
