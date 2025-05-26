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

export default function Checklist() {
  const params = useLocalSearchParams();
  const { checklist } = params;

  const { checklists, checkedChecklist, toggleChecklistItem } = useApiStore();

  const items = checklists?.find((c) =>
    c.title.toLowerCase().includes((checklist as string).toLowerCase())
  )?.items;

  if (!items || items.length === 0) {
    return <Error error={{ message: "No contents found" }} />;
  }

  return (
    <ScrollView
      style={[{ height: "100%", width: "95%" }, globalStyles.container]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Box>
        <Heading style={[globalStyles.heading, { marginBottom: 32 }]}>
          {checklist}
        </Heading>
        {items.map((i, idx) => {
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
