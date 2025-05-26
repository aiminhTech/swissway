import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet } from "react-native";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import Line from "@/components/Line";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/constants/Styles";

type CategoryBoxProps = {
  category: string;
  description: string;
};

export function CategoryBox({ category, description }: CategoryBoxProps) {
  const router = useRouter();

  return (
    <Box>
      <Line width={310} />
      <Box style={styles.categoryBox}>
        <Box style={styles.titleWrapper}>
          <Text style={styles.title}>{category}</Text>
        </Box>

        <TouchableOpacity
          style={[
            globalStyles.touchBox,
            {
              width: 300,
              height: 150,
              backgroundColor: Colors.custom.burgundy,
            },
          ]}
          onPress={() =>
            router.push({
              pathname: "/tabs/(tabs)/explore/[cat]",
              params: { cat: encodeURIComponent(category) },
            })
          }
        >
          <Text style={styles.des}>{description}</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  categoryBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 320,
    height: 240,
    padding: 10,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: Colors.custom.burgundy,
    fontSize: 16,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textTransform: "uppercase",
    textAlign: "center",
  },
  des: {
    color: Colors.custom.cream,
    fontSize: 14,
    letterSpacing: 1,
    padding: 16,
    textAlign: "center",
  },
});
