import { FC } from "react";
import { About } from "widgets/About";
import { Feedback } from "widgets/Feedback";
import { Footer } from "widgets/Footer";
import { Gallery } from "widgets/Gallery";
import { Intro } from "widgets/Intro";
import { Services } from "widgets/Services";

export const Home: FC = () => {
    return (
        <>
            <Intro />
            <About />
            <Services />
            <Gallery />
            <Feedback />
            <Footer />
        </>
    )
}