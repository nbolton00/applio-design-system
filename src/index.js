import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
    SecondaryButton,
    TertiaryButton
} from "./components/Buttons";


const App = () => (
    <div>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
    </div>
);

ReactDOM.render(<App / >, document.querySelector("#root"));