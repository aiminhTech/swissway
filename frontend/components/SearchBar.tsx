import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search topics..."
      placeholderTextColor="#888"
      value={query}
      onChangeText={setQuery}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}

const styles = StyleSheet.create({
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
});
