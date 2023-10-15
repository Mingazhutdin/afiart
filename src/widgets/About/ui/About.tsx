import { FC } from 'react';
import cls from './About.module.scss';
import { classNames } from 'shared/lib';
import { Container } from 'shared/ui/Container';
import Manicure from './assets/image/Manicure.png';
import Salon from './assets/image/Salon.png';
import LeftBranch from './assets/image/leftBranch.png';
import RightBranch from './assets/image/rightBranch.png';
import { Button } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';

interface AboutProps {
    className?: string
}

export const About: FC<AboutProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <section className={classNames(cls.about, {}, [className])}>
            <Container>
                <div className={cls.dflex}>
                    <div className={classNames(cls.col6, {}, [cls.leftside])}>
                        <img src={Manicure} className={cls.manicure} alt='manicure' />
                        <img src={Salon} className={cls.salon} alt='salon' />
                        <img src={LeftBranch} className={cls.leftbranch} alt='left-branch' />
                        <img src={RightBranch} className={cls.rightbranch} alt='right-branch' />
                    </div>
                    <div className={cls.col6}>
                        <h2 className={cls.title}>{t("About Us")}</h2>
                        <p className={cls.description}>
                            {t("Welcome to AfiArt")}
                            <br></br>
                            <br></br>
                            {t("AfiArt description")}
                        </p>
                        <Button
                            className={cls.btn}
                            onClick={() => console.log("Button clicked")}
                        >
                            {t("Book online")}
                        </Button>
                    </div>

                </div>
                <div className={classNames(cls.grid, { [cls.grid__gap_30]: true }, [cls.grid__col_4,])}>
                    <div className={cls.footer}>
                        <div className={cls.dflex}>
                            <span className={cls.span}>1</span>
                            <h3 className={cls.sm__title}>{t("Relaxation")}</h3>
                        </div>
                        <p className={cls.sm__description}>{t("relaxation-description")}.</p>
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.dflex}>
                            <span className={cls.span}>2</span>
                            <h3 className={cls.sm__title}>{t("Health benefits")}</h3>
                        </div>
                        <p className={cls.sm__description}>{t("benefits description")}</p>
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.dflex}>
                            <span className={cls.span}>3</span>
                            <h3 className={cls.sm__title}>{t("Aesthetic Appeal")}</h3>
                        </div>
                        <p className={cls.sm__description}>{t("Appeal description")}</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}