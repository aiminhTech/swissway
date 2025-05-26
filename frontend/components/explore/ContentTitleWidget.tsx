import { StyleSheet, ScrollView } from "react-native";
import { FetchError, InfoTitleType } from "@/models/models";
import Line from "@/components/Line";
import Error from "@/components/Error";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import ContentTitleBox from "./ContentTitleBox";
import { globalStyles } from "@/constants/Styles";

type ContentTitleWidgetProps = {
  contentTitles: InfoTitleType[] | undefined;
  infoTitlesError: FetchError | undefined;
};

export default function ContentTitleWidget({
  contentTitles,
  infoTitlesError,
}: ContentTitleWidgetProps) {
  return (
    <Box style={{ marginTop: 24 }}>
      <Heading style={globalStyles.heading}>Essential Content</Heading>
      <Line />
      {infoTitlesError && <Error error={infoTitlesError} />}
      {contentTitles && (
        <ScrollView style={{ width: "100%" }}>
          <Box style={styles.grid}>
            {contentTitles.map((cat, idx) => (
              <ContentTitleBox key={idx} title={cat.information_title} />
            ))}
          </Box>
        </ScrollView>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "95%",
  },
});
