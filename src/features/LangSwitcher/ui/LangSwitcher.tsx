import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib";
import { Button } from "shared/ui/button";
import { useTranslation } from "react-i18next";
import { ButtonTheme } from "shared/ui/button/ui/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.langswitcher, {}, [className])}
        >
            {t("language")}
        </Button>
    );
};
