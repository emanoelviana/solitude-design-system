import { dictionary } from "../i18n";

export function useI18n({ location = "us" }) {
  return dictionary[location];
}
