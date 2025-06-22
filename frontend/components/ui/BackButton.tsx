import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable style={styles.button} onPress={router.back}>
      <Ionicons name="arrow-back" size={24} color={Colors.custom.navy} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 16,
  },
});
