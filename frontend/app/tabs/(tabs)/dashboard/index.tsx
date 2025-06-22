import ChecklistWidget from "@/components/dashboard/ChecklistWidget";
import ContentTitleWidget from "@/components/explore/ContentTitleWidget";
import Line from "@/components/Line";
import { Heading } from "@/components/ui/heading";
import { globalStyles } from "@/constants/Styles";
import { useApiStore } from "@/store/apiStore";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";

export default function Dashboard() {
  const { t } = useTranslation();

  const { lastSeenTopics } = useApiStore();

  return (
    <ScrollView
      style={[{ height: "100%" }, globalStyles.container]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Heading style={globalStyles.heading}>{t("dashboard.nav")}</Heading>
      <Line />
      <Heading style={[globalStyles.heading2, { marginBottom: 6 }]}>
        {t("dashboard.last_seen")}
      </Heading>
      <ContentTitleWidget
        groupedTitles={lastSeenTopics}
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
