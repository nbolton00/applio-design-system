import { getShade, aqua, yellow, neutral, success, error } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: getShade(aqua),
  primaryHoverColor: getShade(aqua, 600),
  primaryActiveColor: getShade(aqua, 500),
  textColorOnPrimary: getShade(neutral, 100),
  textColor: getShade(neutral, 600),
  textColorInverted: getShade(neutral, 100),
  formElementBackground: getShade(neutral, 100),
  textOnFormElementBackground: getShade(neutral, 600),
  primaryFont,
  disabled: getShade(neutral, 500),
  status: {
    warningColor: getShade(yellow),
    warningColorHover: getShade(yellow, 500),
    warningColorActive: getShade(yellow, 600),
    errorColor: getShade(error, 100),
    errorColorHover: getShade(error, 200),
    errorColorActive: getShade(error, 300),
    successColor: getShade(success, 100),
    successColorHover: getShade(success, 200),
    successColorActive: getShade(success, 300)
  }
};

export const darkTheme = {
  primaryColor: getShade(neutral,100),
  primaryHoverColor: getShade(neutral, 200),
  primaryActiveColor: getShade(neutral, 300),
  textColorOnPrimary: getShade(neutral, 600),
  textColor: getShade(aqua, 400),
  textColorInverted: getShade(neutral, 100),
  formElementBackground: getShade(neutral, 600),
  textOnFormElementBackground: getShade(neutral, 100),
  primaryFont,
  disabled: getShade(neutral, 500),
  status: {
    warningColor: getShade(yellow),
    warningColorHover: getShade(yellow, 500),
    warningColorActive: getShade(yellow, 600),
    errorColor: getShade(error, 100),
    errorColorHover: getShade(error, 200),
    errorColorActive: getShade(error, 300),
    successColor: getShade(success, 100),
    successColorHover: getShade(success, 200),
    successColorActive: getShade(success, 300)
  }
};