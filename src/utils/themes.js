import { brand, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: brand[100],
  primaryHoverColor: brand[200],
  primaryActiveColor: brand[300],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont
};