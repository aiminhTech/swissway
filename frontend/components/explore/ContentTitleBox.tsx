import { Colors } from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { globalStyles } from "@/constants/Styles";
import { GroupedTitle } from "@/models/model";

type ContentTitleBoxProps = {
  groupedTitles: GroupedTitle;
  marginRight: number;
};

export default function ContentTitleBox({
  groupedTitles,
  marginRight,
}: ContentTitleBoxProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[globalStyles.touchBox, styles.touchBox, { marginRight }]}
      onPress={() =>
        router.push({
          pathname: "/tabs/(tabs)/explore/detail/[detail]",
          params: { detail: encodeURI(JSON.stringify(groupedTitles)) },
        })
      }
    >
      <Text style={styles.title}>{groupedTitles.base}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchBox: {
    backgroundColor: Colors.custom.cream,
    padding: 12,
    width: 150,
    height: 150,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.custom.navy,
    fontSize: 14,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textAlign: "center",
  },
});
