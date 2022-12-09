import { createContext, useState } from "react";
import { Action, Theme } from "./types";

const initalState: Theme = Theme.Light;

const ThemeContext = createContext<Theme | null>(null);

export default function ThemeProvider({ children }: { children: JSX.Element }) {
    const [theme, setTheme] = useState<Theme>(Theme.Light);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

function themeReduer(state = initalState, action: Action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return state;
        default:
            throw new Error("Unsupported action type");
    }
}