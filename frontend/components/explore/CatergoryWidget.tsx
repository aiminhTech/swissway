import React, { useState, useMemo } from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "@/constants/Styles";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { CategoryBox } from "@/components/explore/CategoryBox";
import SearchBar from "@/components/SearchBar";
import Error from "@/components/Error";
import { useTranslation } from "react-i18next";
import { ApiCategories, ApiError } from "@/models/api-model";

type CategoryProps = {
  categoryState: {
    categories?: ApiCategories;
    error?: ApiError;
  };
};

export default function CatergoryWidget({ categoryState }: CategoryProps) {
  const { t } = useTranslation();
  const { categories, error } = categoryState;
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return categories?.filter((cat) =>
      cat.category_name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, categories]);

  return (
    <Box>
      <Heading style={globalStyles.heading}>{t("explore.topic")}</Heading>
      <SearchBar query={query} setQuery={setQuery}></SearchBar>

      <ScrollView horizontal contentContainerStyle={{ height: 300 }}>
        {error && <Error error={error} />}

        {!error && filteredCategories?.length === 0 && (
          <Error error={ApiError.make({ message: "No topics was found!" })} />
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
