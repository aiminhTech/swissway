import { Colors } from "@/constants/Colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TextInput } from "react-native";

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const { t } = useTranslation();

  return (
    <TextInput
      style={styles.searchInput}
      placeholder={`${t("searchfield")}...`}
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
    color: "#000",
    width: "95%",
    marginBottom: 16,
  },
});
