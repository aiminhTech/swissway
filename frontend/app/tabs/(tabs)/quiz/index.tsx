import Line from "@/components/Line";
import QuizCategory from "@/components/quiz/QuizCategory";
import SearchBar from "@/components/SearchBar";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { globalStyles } from "@/constants/Styles";
import { useApiStore } from "@/store/apiStore";
import { useMemo, useState } from "react";
import { ScrollView } from "react-native";

export default function Quiz() {
  const [query, setQuery] = useState("");
  const { categories } = useApiStore();

  const filteredCategories = useMemo(() => {
    return categories?.filter((cat) =>
      cat.category_name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, categories]);

  return (
    <Box style={[globalStyles.container, { flex: 1 }]}>
      <Heading style={globalStyles.heading}>Quiz Time!</Heading>
      <Line />
      <SearchBar query={query} setQuery={setQuery} />

      {filteredCategories?.length === 0 && <Text>No topics found</Text>}

      <ScrollView style={{ flex: 1 }}>
        {filteredCategories?.map((c, idx) => (
          <QuizCategory key={idx} categoryName={c.category_name} />
        ))}
      </ScrollView>
    </Box>
  );
}
