import { getShade, navy, royal, aqua, pink, yellow, neutral, success, error } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: getShade(aqua),
  primaryHoverColor: getShade(aqua, 600),
  primaryActiveColor: getShade(navy, 500),
  textColorOnPrimary: getShade(neutral, 100),
  textColor: getShade(neutral, 600),
  textColorInverted: getShade(neutral, 100),
  successColor: getShade(success, 100),
  errorColor: getShade(error, 100),
  primaryFont
};