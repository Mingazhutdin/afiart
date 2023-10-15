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
                    <AppLink to={AppTitle.HOME} className={cls.link}>{t("main_link")}</AppLink>
                    <AppLink to={AppTitle.ABOUT} className={cls.link}>{t("about_link")}</AppLink>
                    <AppLink to={AppTitle.SERVICE} className={cls.link}>{t("service_link")}</AppLink>
                    <AppLink to={AppTitle.GALLERY} className={cls.link}>{t("gallery_link")}</AppLink>
                    <AppLink to={AppTitle.CONTACTS} className={cls.link}>{t("contacts_link")}</AppLink>

                    <LangSwitcher className={cls.lang} />
                    <ThemeSwitcher className={cls.icon} />
                </nav>

            </Container>
        </header>
    );
};