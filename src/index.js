import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
    SecondaryButton,
    TertiaryButton
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <PrimaryButton disabled>Primary</PrimaryButton>
        <SecondaryButton disabled>Secondary</SecondaryButton>
        <TertiaryButton disabled>Tertiary</TertiaryButton>
        <GlobalStyle />
    </div>
);

ReactDOM.render(<App / >, document.querySelector("#root"));