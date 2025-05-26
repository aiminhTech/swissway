import { StyleSheet, ScrollView, StyleProp, ViewStyle } from "react-native";
import { FetchError, GroupedTitle, InfoTitleType } from "@/models/models";
import Line from "@/components/Line";
import Error from "@/components/Error";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import ContentTitleBox from "./ContentTitleBox";
import { globalStyles } from "@/constants/Styles";

type ContentTitleWidgetProps = {
  heading?: string;
  groupedTitles: GroupedTitle[] | undefined;
  infoTitlesError: FetchError | undefined;
  withLine: boolean;
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean | null | undefined;
  marginRight: number;
};

export default function ContentTitleWidget({
  heading,
  groupedTitles,
  infoTitlesError,
  withLine,
  style,
  horizontal,
  marginRight,
}: ContentTitleWidgetProps) {
  return (
    <Box style={{ marginTop: 24 }}>
      {heading && <Heading style={globalStyles.heading}>{heading}</Heading>}
      {withLine && <Line />}
      {infoTitlesError && <Error error={infoTitlesError} />}
      {groupedTitles && (
        <ScrollView style={{ width: "100%" }} horizontal={horizontal}>
          <Box style={style}>
            {groupedTitles.map((g, idx) => (
              <ContentTitleBox
                key={idx}
                groupedTitles={g}
                marginRight={marginRight}
              />
            ))}
          </Box>
        </ScrollView>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({});
