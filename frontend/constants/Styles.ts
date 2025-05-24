import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontWeight: "bold",
    color: Colors.custom.grey,
    fontSize: 22,
    marginBottom: 12,
  },
});
