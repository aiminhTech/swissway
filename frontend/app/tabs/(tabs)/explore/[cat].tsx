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
import { GroupedTitle } from "@/models/model";
import { ApiError } from "@/models/api-model";
import BackButton from "@/components/ui/BackButton";

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

  const { infoTitleState, fetchInfoTitles, language } = useApiStore();

  useEffect(() => {
    if (typeof cat == "string") {
      fetchInfoTitles(language, cat);
    }
  }, []);

  const { titles, error } = infoTitleState;

  const groupedTitles = titles ? groupTitles(titles) : undefined;

  return (
    <ScrollView style={{ margin: 16 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Box style={styles.headingWrapper}>
        <BackButton />
        <Heading
          style={[
            styles.heading,
            { flexShrink: 1, flexGrow: 1, flexWrap: "wrap" },
          ]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {cat}
        </Heading>
      </Box>
      <Line></Line>
      {error && <Error error={error} />}
      <Box>
        {groupedTitles &&
          groupedTitles.map((i, idx) => {
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
  headingWrapper: {
    display: "flex",
    flexDirection: "row",
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
