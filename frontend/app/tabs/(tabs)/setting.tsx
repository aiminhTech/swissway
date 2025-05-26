import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { ChevronDownIcon } from "@/components/ui/icon";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { globalStyles } from "@/constants/Styles";
import { useApiStore } from "@/store/apiStore";
import { useEffect, useState } from "react";
import { LanguageEnum } from "@/models/models";
import Line from "@/components/Line";
import Error from "@/components/Error";

export default function Setting() {
  const { languages, fetchLanguages, languagesError, language, setLanguage } =
    useApiStore();
  const [selectedLang, setSelectedLang] = useState<string | undefined>();

  useEffect(() => {
    if (!languages) {
      fetchLanguages();
    }
    if (selectedLang && selectedLang !== language) {
      setLanguage(selectedLang as LanguageEnum);
    }
  }, [selectedLang]);

  return (
    <Box style={globalStyles.container}>
      <Heading style={globalStyles.heading}>Setting</Heading>
      <Line />
      <Text style={globalStyles.heading2}>Language</Text>
      <Select
        selectedValue={selectedLang}
        onValueChange={setSelectedLang}
        defaultValue={language.toUpperCase()}
        style={{ width: "95%" }}
      >
        <SelectTrigger variant="outline" size="lg">
          <SelectInput placeholder="Select Language" />
          <SelectIcon as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent className="rounded-none p-6">
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            {languages?.map((lang) => (
              <SelectItem
                key={lang.id}
                label={lang.code.toUpperCase()}
                value={lang.code}
              />
            ))}

            {languagesError && <Error error={languagesError} />}
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
}
