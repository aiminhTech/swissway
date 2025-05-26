import { Colors } from "@/constants/Colors";
import { FetchError } from "@/models/models";
import React from "react";
import { Text } from "react-native";

type ErrorProps = { error: FetchError };

export default function Error({ error }: ErrorProps) {
  return <Text style={{ color: Colors.custom.grey }}>{error.message}</Text>;
}
