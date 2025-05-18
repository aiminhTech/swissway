import { Colors } from "@/constants/Colors";
import { Divider } from "./ui/divider";

type LineProps = {
  width?: number;
  color?: string;
};

export default function Line({ width, color }: LineProps) {
  return (
    <Divider
      style={{
        width: width ? width : "95%",
        backgroundColor: color ? color : Colors.custom.lightgrey,
        marginTop: 8,
        marginBottom: 16,
      }}
    />
  );
}
