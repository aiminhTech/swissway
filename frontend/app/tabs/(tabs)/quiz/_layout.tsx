import { Stack } from "expo-router";

export default function QuizLayout() {
  return (
    <Stack>
      <Stack.Screen name="quiz" options={{ headerShown: false }} />
    </Stack>
  );
}
