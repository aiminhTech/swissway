import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/constants/Styles";
import { useApiStore } from "@/store/apiStore";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Error from "@/components/Error";
import { useRouter } from "expo-router";

export default function ChecklistWidget() {
  const router = useRouter();
  const { language, fetchChecklist, checklistState } = useApiStore();

  useEffect(() => {
    fetchChecklist(language);
  }, [language]);

  const { checklists, error } = checklistState;

  return (
    <Box>
      <Heading style={globalStyles.heading2}>
        Checklist of necessary administrative documents
      </Heading>
      {error && <Error error={error} />}
      {checklists &&
        checklists.map((c, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => {
                router.push({
                  pathname: "/tabs/(tabs)/dashboard/[checklist]",
                  params: { checklist: encodeURI(c.checklist_title) },
                });
              }}
              style={[
                globalStyles.touchBox,
                {
                  width: "95%",
                  height: 100,
                  backgroundColor: Colors.custom.cream,
                },
              ]}
            >
              <Text
                style={{
                  color: Colors.custom.navy,
                  fontSize: 14,
                  fontFamily: "GeneralSans",
                  letterSpacing: 0.75,
                  textAlign: "center",
                  padding: 12,
                }}
              >
                {c.checklist_title}
              </Text>
            </TouchableOpacity>
          );
        })}
    </Box>
  );
}
