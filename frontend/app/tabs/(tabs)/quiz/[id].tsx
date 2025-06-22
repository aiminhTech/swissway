import Error from "@/components/Error";
import QuizAnswerOption from "@/components/quiz/QuizAnswerOption";
import QuizButton from "@/components/quiz/QuizButton";
import QuizScore from "@/components/quiz/QuizScore";
import BackButton from "@/components/ui/BackButton";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/constants/Styles";
import { ApiError, ApiQuiz } from "@/models/api-model";
import { FetchError } from "@/models/model";
import { fetchQuizById } from "@/services/api";
import { Either } from "effect";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";

export default function Quiz() {
  const { id } = useLocalSearchParams();
  const { t } = useTranslation();
  const [quiz, setQuiz] = useState<ApiQuiz | undefined>();
  const [error, setError] = useState<FetchError | undefined>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (!id) return;

    const loadQuiz = async () => {
      const result = await fetchQuizById(id as string);

      if (Either.isLeft(result)) {
        setError(result.left);
      } else {
        setQuiz(result.right);
      }
    };

    loadQuiz();
  }, [id]);

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowScore(false);
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
        <Error
          error={ApiError.make({
            message: "No questions available in this quiz.",
          })}
        />
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

    if (currentIndex === questionCnt - 1) {
      setTimeout(() => setShowScore(true), 1000);
    }
  };

  const nextQuestion = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 250);
  };

  const isLast = currentIndex === questionCnt - 1;

  if (isLast && selectedAnswer && showScore) {
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
      <Box style={styles.heading}>
        <BackButton />
        <Text style={globalStyles.heading}>{quiz.title}</Text>
      </Box>
      <Text style={styles.countQuestion}>
        {t("quiz.question")} {currentIndex + 1} / {questionCnt}
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
  heading: {
    display: "flex",
    flexDirection: "row",
  },
  question: {
    marginBottom: 32,
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
