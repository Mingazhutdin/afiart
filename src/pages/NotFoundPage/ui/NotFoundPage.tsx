import { FC } from "react";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.notfoundpage, {}, [className])}>
            <h1>{t("not_found")}</h1>
        </div>
    );
};