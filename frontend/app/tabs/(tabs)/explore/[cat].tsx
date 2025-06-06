import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useApiStore } from "@/store/apiStore";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import Line from "@/components/Line";
import { useEffect } from "react";
import Error from "@/components/Error";
import { groupTitles } from "@/libs/utils";
import { GroupedTitle } from "@/models/models";

type InfoTitleProps = {
  title: string;
  groupedTitles: GroupedTitle;
};

function InfoTitle({ title, groupedTitles }: InfoTitleProps) {
  const router = useRouter();
  const { setLastSeenTopics } = useApiStore();
  return (
    <TouchableOpacity
      style={styles.titleBox}
      onPress={() => {
        setLastSeenTopics(groupedTitles);
        router.push({
          pathname: "/tabs/(tabs)/explore/detail/[detail]",
          params: { detail: encodeURI(JSON.stringify(groupedTitles)) },
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

  useEffect(() => {
    if (typeof cat == "string") {
      fetchInfoTitles(language, cat);
    }
  }, []);

  if (!infoTitles || infoTitles.length < 0) {
    return <Error error={{ message: "No content found" }} />;
  }

  const groupedTitles = groupTitles(infoTitles);

  return (
    <ScrollView style={{ margin: 16 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Heading style={styles.heading}>{cat}</Heading>
      <Line></Line>
      {infoTitlesError && <Error error={infoTitlesError} />}

      <Box>
        {groupedTitles.map((i, idx) => {
          return (
            <InfoTitle
              key={idx}
              title={i.base}
              groupedTitles={groupedTitles[idx]}
            />
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
