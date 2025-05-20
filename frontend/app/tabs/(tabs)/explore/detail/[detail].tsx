import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useApiStore } from "@/store/apiStore";
import { useEffect, useState } from "react";

export default function InfoContents() {
  const params = useLocalSearchParams();
  const { detail } = params;
  const { fetchInfoContents, infoContents } = useApiStore();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (typeof detail === "string") {
      fetchInfoContents(detail);
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {infoContents &&
        infoContents[0].info_content.map((c, idx) => (
          <View key={idx} style={styles.topicContainer}>
            <Text style={styles.topic}>{c.topic}</Text>
            <Text style={styles.description}>{c.description}</Text>

            {c.infos.map((info, iIdx) => (
              <View key={iIdx} style={styles.infoCard}>
                <Text style={styles.infoTitle}>{info.title}</Text>
                {info.content.map((item, cIdx) => {
                  return (
                    <Pressable
                      key={cIdx}
                      style={styles.infoContentBlock}
                      onPress={() => setExpanded(!expanded)}
                    >
                      {item.subtitle ? (
                        <>
                          <Text style={styles.subtitle}>
                            {item.subtitle} {expanded ? "▲" : "▼"}
                          </Text>
                          {expanded && (
                            <Text style={styles.text}>{item.text}</Text>
                          )}
                        </>
                      ) : (
                        <Text style={styles.text}>{item.text}</Text>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: Colors.custom.navy,
    fontWeight: "bold",
    marginBottom: 20,
  },
  topicContainer: {
    marginBottom: 24,
  },
  topic: {
    fontSize: 20,
    color: Colors.custom.grey,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: Colors.custom.grey,
    marginBottom: 32,
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: Colors.custom.cream,
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    color: Colors.custom.navy,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContentBlock: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.custom.brown,
    fontWeight: "600",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: Colors.custom.grey,
    lineHeight: 20,
  },
  titleBox: {
    backgroundColor: Colors.custom.cream,
    padding: 6,
    marginBottom: 12,
    borderRadius: 15,
    opacity: 0.9,
    height: 80,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: "center",
  },
  title: {
    color: Colors.custom.navy,
    fontWeight: "600",
    fontSize: 16,
  },
});
