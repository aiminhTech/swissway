import { TouchableOpacity } from "react-native";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/Colors";

type QuizAnswerOptionProps = {
  answerText: string;
  isCorrect: number;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: (text: string, isCorrect: number) => void;
};

export default function QuizAnswerOption({
  answerText,
  isCorrect,
  isSelected,
  isDisabled,
  onSelect,
}: QuizAnswerOptionProps) {
  const backgroundColor = isSelected
    ? isCorrect
      ? Colors.custom.darkgreen
      : Colors.custom.burgundy
    : Colors.custom.cream;

  const textColor = isSelected
    ? isCorrect
      ? Colors.custom.cream
      : Colors.custom.cream
    : Colors.custom.brown;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => onSelect(answerText, isCorrect)}
      style={{
        backgroundColor,
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontSize: 16, color: textColor, fontWeight: "500" }}>
        {answerText}
      </Text>
    </TouchableOpacity>
  );
}
