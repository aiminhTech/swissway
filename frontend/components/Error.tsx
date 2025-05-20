import { FetchError } from "@/models/models";
import React from "react";
import { Text } from "react-native";

type ErrorProps = { error: FetchError };

export default function Error({ error }: ErrorProps) {
  return <Text>{error.message}</Text>;
}
