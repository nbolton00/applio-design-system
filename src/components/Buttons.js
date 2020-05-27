import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers} from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding:8px 16px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding:16px 24px;
    `,
    warning: ({ props }) => `
        background: none;
        color: ${props.theme.status.warningColor};

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            border: 2px solid ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    primaryButtonWarning: ({ props }) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonWarning: ({ props }) => `
        border: 2px solid ${props.theme.status.warningColor};
    `,
    tertiaryButtonWarning: ({ props }) => `
        border: 2px solid ${props.theme.status.warningColor};
        background:none;
    `,
    error: ({ props }) => `
        background: none;
        color: ${props.theme.status.errorColor};

        &:hover, &:focus {
            background-color: ${props.theme.status.errorColorHover};
        }

        &:active {
            background-color: ${props.theme.status.errorColorActive};
        }
    `,
    primaryButtonError: ({ props }) => `
        background-color: ${props.theme.status.errorColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonError: ({ props }) => `
        border: 2px solid ${props.theme.status.errorColor};
    `,
    tertiaryButtonError: ({ props }) => `
        border: 2px solid ${props.theme.status.errorColor};
        background:none;
    `,
    success: ({ props }) => `
        background: none;
        color: ${props.theme.status.successColor};

        &:hover, &:focus {
            background-color: ${props.theme.status.successColorHover};
            border: 2px solid ${props.theme.status.successColorHover};
        }

        &:active {
            background-color: ${props.theme.status.successColorActive};
        }
    `,
    primaryButtonSuccess: ({ props }) => `
        background-color: ${props.theme.status.successColor};
        color: ${props.theme.textColorInverted};
        border: 2px solid ${props.theme.status.successColor};
    `,
    secondaryButtonSuccess: ({ props }) => `
        border: 2px solid ${props.theme.status.successColor};
    `,
    tertiaryButtonSuccess: ({ props }) => `
        border: none;
    `,
}

const Button = styled.button`
    cursor: pointer;
    border-radius: 25px;
    padding: 12px 20px;
    font-size: ${typeScale.paragraph};
    font-family: ${props => props.theme.primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear, border-color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorInverted};
    }
    &:focus {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorInverted};
        border: 4px solid ${props => props.theme.primaryColor};
        outline:none;
        
    }
    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorInverted};
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColorOnPrimary};
    
    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textColorInverted};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 1px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};

    &:disabled {
        border-color: ${props => props.theme.disabled};
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
        background: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;


export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${props => props.theme.primaryColor};
    
    &:disabled {
        border-color: ${props => props.theme.disabled};
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
        background: none;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;