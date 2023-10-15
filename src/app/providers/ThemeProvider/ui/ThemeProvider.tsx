import { FC, PropsWithChildren, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../model/ThemeContext";


const defaultKey = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(defaultKey);

    const defaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

