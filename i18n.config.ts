import en from "./locales/en.js";
import th from "./locales/th.js";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "th",
  messages: {
    en,
    th,
  },
}));
