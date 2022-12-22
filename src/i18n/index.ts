import { Locales } from "./locales";

import en from "./en.json";
import tr from "./tr.json";
import de from "./de.json";


export const messages = {
  [Locales.EN]: en,
  [Locales.TR]: tr,
  [Locales.DE]: de,
};

export const defaultLocale = navigator.language.split('-')[0];