import { FC, useState } from 'react';
import cls from './Services.module.scss';
import { classNames } from 'shared/lib';
import { Buttons } from '../types/types';
import { ServicesTitle, buttonData } from './ServicesTitle';
import { Container } from 'shared/ui/Container';
import { ServicesDescription } from './ServicesDescription';
import ManicureImg from './assets/image/service-img.png';
import { useTranslation } from 'react-i18next';

interface ServicesProps {
    className?: string
}

export const Services: FC<ServicesProps> = ({ className }) => {
    const [info, setInfo] = useState<Buttons>(buttonData[0])
    const { t } = useTranslation()

    return (
        <section className={classNames(cls.services, {}, [className])}>
            <Container>
                <h2 className={cls.title}>{t("Services")}</h2>
                <div className={classNames(cls.grid, { [cls.grid__gap_30]: true }, [className, cls.grid__col_4, cls.before])}>
                    <ServicesTitle setInfo={setInfo} />
                    <ServicesDescription info={info} />
                    <div className={cls.right_side}>
                        <img src={ManicureImg} alt='img' />
                    </div>
                </div>

            </Container>
        </section >
    )
}