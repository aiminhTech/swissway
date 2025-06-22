import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: Colors.custom.burgundy,
        tabBarInactiveTintColor: Colors.custom.grey,
        tabBarStyle: {
          backgroundColor: "#fffff",
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: t("explore.nav"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="explore" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: t("dashboard.nav"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="dashboard" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: t("quiz.nav"),
          tabBarIcon: ({ color }) => <TabBarIcon name="quiz" color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: t("settings.nav"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
