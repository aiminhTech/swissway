import { useApiStore } from "@/store/apiStore";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import Error from "@/components/Error";
import { Colors } from "@/constants/Colors";

type QuizCategoryProps = {
  categoryName: string;
};

export default function QuizCategory({ categoryName }: QuizCategoryProps) {
  const fetchQuizzes = useApiStore((state) => state.fetchQuizzes);
  const quizzes = useApiStore((state) => state.quizzes[categoryName]);
  const error = useApiStore((state) => state.quizzesError[categoryName]);
  const router = useRouter();

  useEffect(() => {
    fetchQuizzes(categoryName);
  }, [categoryName, fetchQuizzes]);

  return (
    <Box style={{ marginBottom: 16 }}>
      <Text style={styles.quizType}>{categoryName}</Text>

      {error && <Error error={error} />}

      <ScrollView horizontal>
        {quizzes &&
          quizzes.length > 0 &&
          quizzes.map((quiz, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.touchBox}
              onPress={() => {
                router.push({
                  pathname: "/tabs/(tabs)/quiz/[id]",
                  params: { id: quiz.quiz_id },
                });
              }}
            >
              <Text style={styles.quizTitle}>{quiz.title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  quizType: {
    fontSize: 16,
    color: Colors.custom.burgundy,
    fontWeight: "bold",
    marginBottom: 12,
  },
  touchBox: {
    backgroundColor: Colors.custom.cream,
    marginBottom: 12,
    marginRight: 16,
    borderRadius: 15,
    padding: 4,
    width: 250,
    height: 100,
    opacity: 0.9,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  quizTitle: {
    color: Colors.custom.navy,
    fontSize: 14,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textAlign: "center",
  },
});
