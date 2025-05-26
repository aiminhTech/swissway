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
  heading2: {
    fontWeight: "bold",
    color: Colors.custom.burgundy,
    fontSize: 18,
    marginBottom: 12,
  },
  heading3: {
    fontWeight: "bold",
    color: Colors.custom.burgundy,
    fontSize: 18,
    marginBottom: 12,
  },
  touchBox: {
    marginBottom: 12,
    borderRadius: 15,
    opacity: 0.8,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
  },
});
