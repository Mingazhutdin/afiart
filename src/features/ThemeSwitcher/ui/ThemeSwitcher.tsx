import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib";
import { Button } from "shared/ui/button";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import ThemeLight from "features/assets/icons/theme-light.svg";
import ThemeDark from "features/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeswitcher, { }, [className])}>
            {
                theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />
            }
        </Button>
    );
};

