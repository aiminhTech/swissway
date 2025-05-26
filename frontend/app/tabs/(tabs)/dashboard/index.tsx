import ChecklistWidget from "@/components/dashboard/ChecklistWidget";
import ContentTitleWidget from "@/components/explore/ContentTitleWidget";
import Line from "@/components/Line";
import { Heading } from "@/components/ui/heading";
import { globalStyles } from "@/constants/Styles";
import { useApiStore } from "@/store/apiStore";
import { ScrollView } from "react-native";

export default function Dashboard() {
  const { lastSeenTopics } = useApiStore();

  return (
    <ScrollView
      style={[{ height: "100%" }, globalStyles.container]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Heading style={globalStyles.heading}>Dashboard</Heading>
      <Line />
      <Heading style={[globalStyles.heading2, { marginBottom: 6 }]}>
        Last seen topics
      </Heading>
      <ContentTitleWidget
        groupedTitles={lastSeenTopics}
        infoTitlesError={undefined}
        withLine={false}
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        horizontal={true}
        marginRight={32}
      />

      <ChecklistWidget />
    </ScrollView>
  );
}
