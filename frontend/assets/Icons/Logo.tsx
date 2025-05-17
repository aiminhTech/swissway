import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);

export default function AnimatedSwissway() {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);
  const rotate = useSharedValue(-10);

  useEffect(() => {
    const timeout = setTimeout(() => {
      translateY.value = withSpring(0, { damping: 7, stiffness: 50 });
      opacity.value = withSpring(1, { duration: 1200 });
      rotate.value = withSpring(0, { damping: 15, stiffness: 100 });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
    fontFamily: "GeneralSans",
    letterSpacing: 1
  }));

  return (
    <Box className="w-full items-center py-4">
      <AnimatedText
        className="text-5xl uppercase text-typography-white"
        style={animatedStyle}
      >
        swissway
      </AnimatedText>
      <AnimatedText
        className="text-xl uppercase text-typography-white mt-4"
        style={animatedStyle}
      >
        From arrival to Belonging
      </AnimatedText>
    </Box>
  );
}
