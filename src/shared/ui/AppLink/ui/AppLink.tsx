import { FC, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib";
import { Link } from "react-router-dom";


export enum AppTitle {
    HOME = "Home",
    ABOUT = "About Us",
    SERVICE = "Service",
    GALLERY = "Gallery",
    CONTACTS = "Contact Us"
}

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps {
    className?: string;
    to?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
    title?: AppTitle
}


export const AppLink: FC<AppLinkProps> = ({ className, to, children, theme = AppLinkTheme.PRIMARY, title = AppTitle.HOME }) => {
    return (
        <Link to={to} className={classNames(cls.applink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};