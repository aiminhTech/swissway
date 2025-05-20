import { Stack } from "expo-router";

export default function ExploreLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[cat]" options={{ headerShown: false }} />
      <Stack.Screen name="detail/[detail]" options={{ headerShown: false }} />
    </Stack>
  );
}
