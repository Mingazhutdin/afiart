import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib";

export enum ButtonTheme {
    ACTIVE = "active",
    DISABLED = "disabled",
    CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({ className, children, onClick, theme = ButtonTheme.ACTIVE }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(cls.button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};


