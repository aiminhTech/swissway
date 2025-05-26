import React, { useState, useMemo } from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "@/constants/Styles";
import { CategoryType, FetchError } from "@/models/models";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { CategoryBox } from "@/components/explore/CategoryBox";
import SearchBar from "@/components/SearchBar";
import Error from "@/components/Error";

type CategoryProps = {
  categories: CategoryType[] | undefined;
  categoriesError: FetchError | undefined;
};

export default function CatergoryWidget({
  categories,
  categoriesError,
}: CategoryProps) {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return categories?.filter((cat) =>
      cat.category_name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, categories]);

  return (
    <Box>
      <Heading style={globalStyles.heading}>Topics</Heading>
      <SearchBar query={query} setQuery={setQuery}></SearchBar>

      <ScrollView horizontal contentContainerStyle={{ height: 300 }}>
        {categoriesError && <Error error={categoriesError} />}

        {!categoriesError && filteredCategories?.length === 0 && (
          <Error
            error={{
              message: "No topics found",
            }}
          />
        )}

        {filteredCategories?.map((cat) => (
          <CategoryBox
            key={cat.category_name}
            category={cat.category_name}
            description={cat.category_description}
          />
        ))}
      </ScrollView>
    </Box>
  );
}
