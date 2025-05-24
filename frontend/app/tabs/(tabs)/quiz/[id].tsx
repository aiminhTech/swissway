import Error from "@/components/Error";
import QuizAnswerOption from "@/components/quiz/QuizAnswerOption";
import QuizButton from "@/components/quiz/QuizButton";
import QuizScore from "@/components/quiz/QuizScore";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/constants/Styles";
import { FetchError, QuizType } from "@/models/models";
import { fetchQuizById } from "@/services/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Quiz() {
  const { id } = useLocalSearchParams();

  const [quiz, setQuiz] = useState<QuizType | undefined>();
  const [error, setError] = useState<FetchError | undefined>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!id) return;

    const loadQuiz = async () => {
      const result = await fetchQuizById(id as string);
      if ("message" in result) {
        setError(result);
      } else {
        setQuiz(result);
      }
    };

    loadQuiz();
  }, [id]);

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
  };

  if (error) {
    return (
      <Center className="flex-1">
        <Text style={{ color: "red" }}>{error.message}</Text>
      </Center>
    );
  }

  if (!quiz || quiz.questions.length === 0) {
    return (
      <Center className="flex-1">
        <Error error={{ message: "No questions available in this quiz." }} />
      </Center>
    );
  }

  const questionCnt = quiz.questions.length;
  const questionObj = quiz.questions[currentIndex];
  const questionText = Object.keys(questionObj)[0];
  const answers = questionObj[questionText];

  const handleAnswer = (answerText: string, isCorrect: number) => {
    setSelectedAnswer(answerText);
    setIsCorrect(!!isCorrect);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const isLast = currentIndex === questionCnt - 1;

  if (isLast && selectedAnswer) {
    return (
      <QuizScore
        score={score}
        questionCnt={questionCnt}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <Box style={globalStyles.container}>
      <Text style={globalStyles.heading}>{quiz.title}</Text>
      <Text style={styles.countQuestion}>
        Question {currentIndex + 1} / {questionCnt}
      </Text>
      <Text style={styles.question}>{questionText}</Text>

      {answers.map((ans, idx) => {
        const [text, correct] = Object.entries(ans)[0];

        return (
          <QuizAnswerOption
            key={idx}
            answerText={text}
            isCorrect={correct}
            isSelected={selectedAnswer === text}
            isDisabled={selectedAnswer !== null}
            onSelect={handleAnswer}
          />
        );
      })}

      {selectedAnswer && (
        <QuizButton isLast={isLast} nextQuestion={nextQuestion} />
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  question: {
    marginBottom: 12,
    color: Colors.custom.navy,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  countQuestion: {
    textAlign: "right",
    marginBottom: 32,
    marginTop: 12,
    fontSize: 14,
    color: Colors.custom.burgundy,
    fontWeight: "400",
  },
});
