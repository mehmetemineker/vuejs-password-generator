import { Locales } from "./locales";

import en from "./en.json";
import tr from "./tr.json";
import de from "./de.json";
import ar from "./ar.json";
import fr from "./fr.json";
import he from "./he.json";
import it from "./it.json";
import ja from "./ja.json";
import ko from "./ko.json";
import pl from "./pl.json";
import pt from "./pt.json";
import ru from "./ru.json";
import so from "./so.json";
import sr from "./sr.json";
import sv from "./sv.json";
import zh from "./zh.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.TR]: tr,
  [Locales.DE]: de,
  [Locales.AR]: ar,
  [Locales.FR]: fr,
  [Locales.HE]: he,
  [Locales.IT]: it,
  [Locales.JA]: ja,
  [Locales.KO]: ko,
  [Locales.PL]: pl,
  [Locales.PT]: pt,
  [Locales.RU]: ru,
  [Locales.SO]: so,
  [Locales.SR]: sr,
  [Locales.SV]: sv,
  [Locales.ZH]: zh,
};

export const defaultLocale = navigator.language.split('-')[0];