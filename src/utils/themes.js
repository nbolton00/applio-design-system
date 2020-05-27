import { getShade, aqua, neutral, success, error } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: getShade(aqua),
  primaryHoverColor: getShade(aqua, 600),
  primaryActiveColor: getShade(aqua, 500),
  textColorOnPrimary: getShade(neutral, 100),
  textColor: getShade(neutral, 600),
  textColorInverted: getShade(neutral, 100),
  successColor: getShade(success, 100),
  errorColor: getShade(error, 100),
  primaryFont,
  disabled: getShade(neutral, 500),
};