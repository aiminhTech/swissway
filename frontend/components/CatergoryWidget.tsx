import { Colors } from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { CategoryType } from "@/models/models";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import Line from "@/components/Line";

type CategoryBoxProps = {
  category: string;
  description: string;
};

function CategoryBox({ category, description }: CategoryBoxProps) {
  return (
    <>
      <Box>
        <Line width={350} />
        <Text style={styles.title}>{category}</Text>
        <TouchableOpacity style={styles.touchBox}>
          <Text style={styles.des}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.{description}
          </Text>
        </TouchableOpacity>
      </Box>
    </>
  );
}

type CategoryProps = {
  categories: CategoryType[];
};

export default function CatergoryWidget({ categories }: CategoryProps) {
  return (
    <Box>
      <Heading style={styles.heading}>Topics</Heading>

      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal={true}
      >
        {categories.map((cat, idx) => (
          <CategoryBox
            key={idx}
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
  touchBox: {
    backgroundColor: Colors.custom.burgundy,
    marginTop: 6,
    marginBottom: 12,
    marginRight: 16,
    borderRadius: 15,
    width: 350,
    height: 200,
    opacity: 0.8,
    shadowColor: Colors.custom.grey,
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  title: {
    color: Colors.custom.burgundy,
    fontSize: 16,
    fontFamily: "GeneralSans",
    letterSpacing: 0.75,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 6,
  },
  des: {
    color: Colors.custom.cream,
    fontSize: 14,
    letterSpacing: 1,
    padding: 16,
    textAlign: "center",
  },
});
