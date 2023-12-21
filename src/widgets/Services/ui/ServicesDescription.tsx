import { FC } from 'react';
import cls from './Services.module.scss';
import { classNames } from 'shared/lib';
import { Buttons } from '../types/types';
import Hours from './assets/image/hours.svg';
import Price from './assets/image/price.svg';
import { Button } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';


interface ServicesDescriptionProps {
    className?: string
    info: Buttons
}

export const ServicesDescription: FC<ServicesDescriptionProps> = ({ className, info }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.servicesdescription, {}, [className])}>
            {
                <div className={cls.height}>
                    <div className={cls.top}>
                        <h4 className={cls.md_title}>{t(info?.title)}</h4>
                        <p className={cls.md_description}>{t(info?.description)}</p>

                        <div className={classNames(cls.d_flex, { [cls.align_center]: true }, [cls.justify_between])}>
                            <div className={classNames(cls.d_flex, {}, [cls.align_center])}>
                                <Hours className={cls.svg} />
                                <p className={cls.hours_info}>{t("Working hours")}:</p>
                            </div>
                            <span className={cls.hours_time}>{t(info?.time)}</span>
                        </div>

                        <div className={classNames(cls.d_flex, { [cls.align_center]: true }, [cls.justify_between])}>
                            <div className={classNames(cls.d_flex, {}, [cls.align_center])}>
                                <Price className={cls.svg} />
                                <p className={cls.hours_info}>{t("Price")}:</p>
                            </div>
                            <span className={cls.hours_time}>{info?.price}</span>
                        </div>
                    </div>

                    <div className={classNames(cls.d_flex, {}, [cls.justify_between])}>
                        <Button className={cls.button}>{t("Appointment")}</Button>
                        <Button className={cls.button}>{t("Add to Cart")}</Button>
                    </div>
                </div>
            }
        </div>
    )
}