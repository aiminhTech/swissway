import React, { useEffect } from "react";
import Gradient from "@/assets/Icons/Gradient";
import Logo from "@/assets/Icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";

import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/tabs");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box className="flex-1 bg-black h-[100vh]">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
          <Gradient />
        </Box>

        <Box className="flex flex-1 items-center my-16 mx-5 lg:my-24 lg:mx-32">
          <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
            <Logo />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
