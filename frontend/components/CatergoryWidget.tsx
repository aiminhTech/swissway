import React, { useState, useMemo } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { CategoryType, FetchError } from "@/models/models";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import Line from "@/components/Line";
import Error from "@/components/Error";
import { useRouter } from "expo-router";

type CategoryBoxProps = {
  category: string;
  description: string;
};

function CategoryBox({ category, description }: CategoryBoxProps) {
  const router = useRouter();

  return (
    <>
      <Box>
        <Line width={310} />
        <Box style={styles.categoryBox}>
          <Box style={styles.titleWrapper}>
            <Text style={styles.title}>{category}</Text>
          </Box>

          <TouchableOpacity
            style={styles.touchBox}
            onPress={() =>
              router.push({
                pathname: "/tabs/(tabs)/explore/[cat]",
                params: { cat: encodeURIComponent(category) },
              })
            }
          >
            <Text style={styles.des}>{description}</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </>
  );
}

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
      <Heading style={styles.heading}>Topics</Heading>

      <TextInput
        style={styles.searchInput}
        placeholder="Search topics..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <ScrollView horizontal contentContainerStyle={{ height: 300 }}>
        {categoriesError && <Error error={categoriesError} />}
        {!categoriesError && filteredCategories?.length === 0 && (
          <Text>No topics found</Text>
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

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    color: Colors.custom.grey,
    fontSize: 22,
  },
  searchInput: {
    height: 40,
    borderColor: Colors.custom.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 12,
    marginRight: 16,
    marginLeft: 4,
    color: "#000",
  },
  categoryBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 320,
    height: 240,
    padding: 10,
  },
  touchBox: {
    backgroundColor: Colors.custom.burgundy,
    marginBottom: 12,
    borderRadius: 15,
    width: 300,
    height: 150,
    opacity: 0.8,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: Colors.custom.burgundy,
    fontSize: 16,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textTransform: "uppercase",
    textAlign: "center",
  },
  des: {
    color: Colors.custom.cream,
    fontSize: 14,
    letterSpacing: 1,
    padding: 16,
    textAlign: "center",
  },
});
