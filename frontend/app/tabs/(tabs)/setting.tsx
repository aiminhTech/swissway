import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
import Line from "@/components/Line";
import Error from "@/components/Error";
import i18n from "@/assets/i18n/i18n";
import { Locales } from "@/models/api-model";

export default function Setting() {
  const { t } = useTranslation();
  const { localeState, fetchLocales, language, setLanguage } = useApiStore();

  const [selectedLang, setSelectedLang] = useState<string | undefined>();

  const { locales, error } = localeState;

  useEffect(() => {
    if (!locales) {
      fetchLocales();
    }
  }, []);

  useEffect(() => {
    if (language) {
      setSelectedLang(language);
    }
  }, [language]);

  useEffect(() => {
    if (selectedLang && selectedLang !== language) {
      setLanguage(selectedLang as Locales);
      i18n.changeLanguage(selectedLang);
    }
  }, [selectedLang]);

  return (
    <Box style={globalStyles.container}>
      <Heading style={globalStyles.heading}>{t("settings.nav")}</Heading>
      <Line />
      <Text style={globalStyles.heading2}>{t("settings.language")}</Text>

      <Select
        selectedValue={selectedLang?.toUpperCase()}
        onValueChange={setSelectedLang}
        style={{ width: "95%" }}
      >
        <SelectTrigger variant="outline" size="lg">
          <SelectInput placeholder={t("select_language")} />
          <SelectIcon as={ChevronDownIcon} />
        </SelectTrigger>

        <SelectPortal>
          <SelectBackdrop />
          <SelectContent className="rounded-none p-6">
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            {locales &&
              locales.map((lang) => (
                <SelectItem
                  key={lang.id}
                  label={lang.code.toUpperCase()}
                  value={lang.code}
                />
              ))}

            {error && <Error error={error} />}
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
}
