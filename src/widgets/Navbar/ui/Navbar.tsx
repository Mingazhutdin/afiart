import { FC } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib";
import { AppLink } from "shared/ui/AppLink";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher/";
import { useTranslation } from "react-i18next";
import { Container } from "shared/ui/Container";
import { Logo } from "shared/ui/Logo";
import { AppTitle } from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

    const { t } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Container className={cls.container}>
                <Logo className={cls.logo} />
                <nav className={cls.nav}>
                    <AppLink to={AppTitle.HOME} className={cls.link}>{t("AppTitle.HOME")}</AppLink>
                    <AppLink to={AppTitle.ABOUT} className={cls.link}>{t("AppTitle.ABOUT")}</AppLink>
                    <AppLink to={AppTitle.SERVICE} className={cls.link}>{t("AppTitle.SERVICE")}</AppLink>
                    <AppLink to={AppTitle.GALLERY} className={cls.link}>{t("AppTitle.GALLERY")}</AppLink>
                    <AppLink to={AppTitle.CONTACTS} className={cls.link}>{t("AppTitle.CONTACTS")}</AppLink>

                    <LangSwitcher className={cls.lang} />
                    <ThemeSwitcher className={cls.icon} />
                </nav>

            </Container>
        </header>
    );
};