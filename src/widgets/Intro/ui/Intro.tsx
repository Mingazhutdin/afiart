import { FC } from 'react';
import cls from './Intro.module.scss';
import { classNames } from 'shared/lib';
import { Container } from 'shared/ui/Container';
import { Logo } from 'shared/ui/Logo';
import { useTranslation } from 'react-i18next';

interface IntroProps {
    className?: string
}

export const Intro: FC<IntroProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <section className={classNames(cls.intro, {}, [className])}>
            <Container className={cls.container}>
                <div className={cls.aside}>
                    <h1 className={cls.description}>{t("The Nail Salon")}</h1>
                </div>
                <Logo className={cls.logo} />
            </Container>

        </section>
    )
}