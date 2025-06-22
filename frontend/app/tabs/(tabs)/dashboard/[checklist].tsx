import { globalStyles } from "@/constants/Styles";
import { ScrollView } from "react-native";
import Error from "@/components/Error";

import { useLocalSearchParams } from "expo-router";
import { useApiStore } from "@/store/apiStore";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import BackButton from "@/components/ui/BackButton";
import Line from "@/components/Line";

export default function Checklist() {
  const params = useLocalSearchParams();
  const { checklist } = params;

  const { checkedChecklist, toggleChecklistItem, checklistState } =
    useApiStore();

  const { checklists, error } = checklistState;
  const items = checklists?.find((c) =>
    c.checklist_title
      .toLowerCase()
      .includes((checklist as string).toLowerCase())
  )?.checklist_items;

  return (
    <ScrollView
      style={[{ height: "100%", width: "95%" }, globalStyles.container]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {error && <Error error={error} />}
      <Box>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <BackButton></BackButton>
          <Heading
            style={[
              globalStyles.heading,
              { flexShrink: 1, flexGrow: 1, flexWrap: "wrap" },
            ]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {checklist}
          </Heading>
        </Box>
        <Line></Line>

        {items &&
          items.map((i, idx) => {
            const isChecked =
              checkedChecklist?.[checklist as string]?.includes(i) ?? false;
            return (
              <Checkbox
                key={idx}
                size="md"
                value={i}
                style={{ marginBottom: 24 }}
                isChecked={isChecked}
                onChange={() => toggleChecklistItem(checklist as string, i)}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>{i}</CheckboxLabel>
              </Checkbox>
            );
          })}
      </Box>
    </ScrollView>
  );
}
