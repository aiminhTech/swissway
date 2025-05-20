import Line from "@/components/Line";
import SearchBar from "@/components/SearchBar";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useApiStore } from "@/store/apiStore";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Quiz() {
  const [query, setQuery] = useState("");
  const { categories } = useApiStore();

  return (
    <Box style={styles.container}>
      <Heading className="font-bold text-2xl">Quiz Time!</Heading>
      <Line />
      <SearchBar query={query} setQuery={setQuery} />
      {/*   {categories?.map(() => )} */}
      <Text>{JSON.stringify(categories)}</Text>
      <Text className="p-4">Example below to use gluestack-ui components.</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
