import { Text } from "react-native";
import { ExternalLink } from "@/components/ExternalLink";
import { Colors } from "@/constants/Colors";
import { Link } from "@/models/model";

type InfoLinkProps = {
  links?: Link[];
};

export default function InfoLink({ links }: InfoLinkProps) {
  if (!links || links.length === 0) return null;

  return (
    <>
      {links.map((link, idx) => (
        <ExternalLink
          key={idx}
          href={link.url}
          style={{
            paddingTop: 6,
            paddingBottom: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              color: Colors.custom.navy,
            }}
          >
            • {link.text ? link.text : link.url}
          </Text>
        </ExternalLink>
      ))}
    </>
  );
}
