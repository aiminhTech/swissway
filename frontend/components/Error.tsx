import { Colors } from "@/constants/Colors";
import { ApiError } from "@/models/api-model";
import React from "react";
import { Text } from "react-native";

type ErrorProps = { error: ApiError };

export default function Error({ error }: ErrorProps) {
  return <Text style={{ color: Colors.custom.grey }}>{error.message}</Text>;
}
