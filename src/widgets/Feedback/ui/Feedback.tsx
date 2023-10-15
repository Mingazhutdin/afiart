import { FC } from 'react';
import cls from './Feedback.module.scss';
import { classNames } from 'shared/lib';
import { Container } from 'shared/ui/Container';
import { FeedbackCreator } from './FeedbackCreator';
import Left from './assets/image/Arrow-left.svg';
import Right from './assets/image/Arrow-right.svg';
import Filled from './assets/image/filled.svg';
import Hollow from './assets/image/hollow.svg';
import { useTranslation } from 'react-i18next';

interface FeedbackProps {
    className?: string
}

export const Feedback: FC<FeedbackProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <section className={classNames(cls.feedback, {}, [className])}>
            <Container>
                <h1 className={cls.title}>{t("Feedback")}</h1>
                <div className={classNames(cls.grid, { [cls.grid__gap_30]: true }, [cls.grid__col_4])}>
                    <FeedbackCreator />
                </div>
                <div className={classNames(cls.d_flex, {}, [cls.justify_center])}>
                    <Left className={cls.arrow} />
                    <Filled className={cls.circle} />
                    <Hollow className={cls.circle} />
                    <Hollow className={cls.circle} />
                    <Hollow className={cls.circle} />
                    <Right className={cls.arrow} />
                </div>
            </Container>
        </section>
    )
}