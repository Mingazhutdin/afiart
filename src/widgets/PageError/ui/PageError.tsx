import { FC } from "react";
import cls from "./PageError.module.scss";
import { classNames } from "shared/lib";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {

    const { t } = useTranslation();

    const handleReload = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.pageerror, {}, [className])}>
            <h1>{t("error page")}</h1>
            <Button onClick={handleReload}>{t("reload")}</Button>
        </div>
    );
};