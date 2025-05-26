import { Colors } from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { globalStyles } from "@/constants/Styles";

type ContentTitleBoxProps = {
  title: string;
};

export default function ContentTitleBox({ title }: ContentTitleBoxProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[globalStyles.touchBox, styles.touchBox]}
      onPress={() =>
        router.push({
          pathname: "/tabs/(tabs)/explore/detail/[detail]",
          params: { detail: encodeURIComponent(title) },
        })
      }
    >
      <Text style={styles.title}>{title}</Text>
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
    fontSize: 16,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textAlign: "center",
  },
});
