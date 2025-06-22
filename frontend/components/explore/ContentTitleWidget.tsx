import { ScrollView, StyleProp, ViewStyle } from "react-native";
import Line from "@/components/Line";
import Error from "@/components/Error";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import ContentTitleBox from "./ContentTitleBox";
import { globalStyles } from "@/constants/Styles";
import { ApiError } from "@/models/api-model";
import { GroupedTitle } from "@/models/model";

type ContentTitleWidgetProps = {
  groupedTitles?: GroupedTitle[];
  error?: ApiError;
  heading?: string;
  withLine: boolean;
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean | null | undefined;
  marginRight: number;
};

export default function ContentTitleWidget({
  groupedTitles,
  error,
  heading,
  withLine,
  style,
  horizontal,
  marginRight,
}: ContentTitleWidgetProps) {
  return (
    <Box style={{ marginTop: 24 }}>
      {heading && <Heading style={globalStyles.heading}>{heading}</Heading>}
      {withLine && <Line />}
      {error && <Error error={error} />}
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
