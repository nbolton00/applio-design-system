import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
cursor: pointer;
border-radius: 2px;
padding: 12px 24px;
font-size: ${typeScale.paragraph};
font-family: ${defaultTheme.primaryFont};
`;

const PrimaryButton = styled(Button)`
background-color: ${defaultTheme.primaryColor};
border: none;
color: ${defaultTheme.textColorOnPrimary};
`;

export const SecondaryButton = styled(Button)`
background: none;
border: 1px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};
`;


export const TertiaryButton = styled(Button)`
background: none;
border: none;
color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;