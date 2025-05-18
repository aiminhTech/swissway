export type CategoryType = {
  locale_code: string;
  category_name: string;
  category_description: string;
};

export type InfoTitleType = {
  code: string; //TODO fix key to locale_code
  category_name: string;
  information_title: string;
};

export type InfoContentType = {
  locale_code: string;
  info_title: string;
  info_content: ContentType[];
};

export type ContentType = {
  topic: string;
  description: string;
  infos: {
    subtitle: string;
    text: string;
  };
};
