import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
    cursor: pointer;
    border-radius: 2px;
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    font-family: ${defaultTheme.primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorInverted};
    }
    &:focus {
        outline: 3px solid ${defaultTheme.primaryHoverColor};
        outline-offset: 2px;
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorInverted};
    }
    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorInverted};
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};
    
    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textColorInverted};
        cursor: not-allowed;
    }
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 1px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:disabled {
        border-color: ${defaultTheme.disabled};
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
        background: none;
    }
`;


export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor};
    
    &:disabled {
        border-color: ${defaultTheme.disabled};
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
        background: none;
    }
`;

export default PrimaryButton;