export interface SelectOption {
  label: string;
  value: string;
}

export const convertEnumToSelectOptions = (
  enumObject: Record<string, string>
): SelectOption[] => {
  const options: SelectOption[] = [];

  for (const key in enumObject) {
    if (enumObject.hasOwnProperty(key)) {
      options.push({ label: key, value: enumObject[key] });
    }
  }

  return options;
};
