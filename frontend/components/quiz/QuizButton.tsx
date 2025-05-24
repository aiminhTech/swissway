import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/Colors";

type QuizButtonProps = {
  isLast: boolean;
  nextQuestion: () => void;
};

export default function QuizButton({ isLast, nextQuestion }: QuizButtonProps) {
  return (
    <TouchableOpacity
      onPress={isLast ? () => {} : nextQuestion}
      style={styles.quizButton}
    >
      <Text style={styles.quizButtonText}>{isLast ? "Finish" : "Next"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  quizButton: {
    marginTop: 24,
    backgroundColor: Colors.custom.navy,
    padding: 12,
    borderRadius: 8,
  },
  quizButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
