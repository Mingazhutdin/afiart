import { FC, useState } from 'react';
import cls from './Services.module.scss';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { Buttons, ButtonTypes } from '../types/types';
import { useTranslation } from 'react-i18next';

export const buttonData: Buttons[] = [
    { id: 1, title: ButtonTypes.MANICURE, time: "1 hour", price: "30$", description: "Safe e- file or classic manicure including nail shaping, precise cuticles work, cuticle oil and hand lotion massage" },
    { id: 2, title: ButtonTypes.GEL_POLISH_MANICURE, time: "2 hours", price: "55$", description: "Removal gel polish, shaping,  cuticle removal and applying fresh gel polish, design not included. If you have a long nails you should to pick different service named \"Hand gel strengthening\"." },
    { id: 3, title: ButtonTypes.GEL_POLISH_MANICURE_AND_GEL_STRENGTHENING, time: "2:15 hours", price: "65$", description: "Removal gel polish, shaping,  cuticle removal and applying hard gel and gel polish. Design not included." },
    { id: 4, title: ButtonTypes.PEDICURE, time: "1 hour", price: "50$", description: "Removal polish, shaping, cuticle removal,  callus removal, using pododisk, foot scrub, lotion, oil and massage." },
    { id: 5, title: ButtonTypes.PEDICURE_REGULAR_POLISH, time: "1:30 hours", price: "55$", description: "Removal polish,  shaping, cuticle removal,  callus removal,  using pododisk, foot scrub lotion, oil and massage." },
    { id: 6, title: ButtonTypes.GEL_POLISH_PEDICURE, time: "1:30 hours", price: "70$", description: "Removal gel polish,  shaping,  cuticle removal, using pododisk,  foot scrub,  lotion, oil and massage." },
]

interface ServicesTitleProps {
    className?: string;
    setInfo: (prev: Buttons) => void;
}

export const ServicesTitle: FC<ServicesTitleProps> = ({ className, setInfo }) => {
    const [selectedButton, setSelectedButton] = useState<number>(1)
    const { t } = useTranslation()

    const handleClick = (button: Buttons) => {
        setInfo(button);
        setSelectedButton(button.id)
    }

    return (
        <div className={classNames(cls.servicestitle, {}, [className])}>
            {
                buttonData?.map((button) => (
                    <Button
                        key={button.id}
                        className={selectedButton === button.id ? (cls.services__btn_selected) : (cls.services__btn)}
                        onClick={() => handleClick(button)}
                    >
                        {t(button?.title)}
                    </Button>
                ))
            }
            <div className={cls.additional_info}>
                <p className={cls.additional_title}>{t("Additional services")}</p>
                <div className={classNames(cls.d_flex, { [cls.add_info]: true }, [cls.justify_between])}>
                    <p className={cls.sm_title}>{t("French Manicure")}</p>
                    <span className={cls.price}>10 $</span>
                </div>
                <div className={classNames(cls.d_flex, { [cls.add_info]: true }, [cls.justify_between])}>
                    <p className={cls.sm_title}>{t("Design")}</p>
                    <span className={cls.price}>10 $</span>
                </div>
                <div className={classNames(cls.d_flex, { [cls.add_info]: true }, [cls.justify_between])}>
                    <p className={cls.sm_title}>{t("All nails design")}</p>
                    <span className={cls.price}>25 $</span>
                </div>
            </div>
        </div>
    )
}