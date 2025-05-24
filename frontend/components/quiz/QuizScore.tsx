import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

type QuizButtonProps = {
  score: number;
  questionCnt: number;
  restartQuiz: () => void;
};

export default function QuizButton({
  score,
  questionCnt,
  restartQuiz,
}: QuizButtonProps) {
  const router = useRouter();

  return (
    <Center style={styles.center}>
      <Text style={styles.scoreText}>You have completed the quiz!</Text>
      <Text style={styles.score}>
        Correted answers: {score} / {questionCnt}
      </Text>

      <Box style={styles.btns}>
        <TouchableOpacity style={styles.button} onPress={restartQuiz}>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.push("/tabs/(tabs)/quiz")}
        >
          <Text style={styles.buttonText}>Back to Quiz List</Text>
        </TouchableOpacity>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  scoreText: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.custom.burgundy,
    textAlign: "center",
    padding: 12,
  },
  center: {
    height: "100%",
  },
  score: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 32,
    color: Colors.custom.grey,
  },
  button: {
    backgroundColor: Colors.custom.navy,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 150,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 32,
  },
});
