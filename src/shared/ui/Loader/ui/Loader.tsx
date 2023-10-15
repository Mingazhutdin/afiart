import { FC } from "react";
import "./Loader.scss";
import { classNames } from "shared/lib";

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={classNames("loadingio-spinner-rolling-tn1a6bukwem", {}, [className])}>
            <div className="ldio-fm5xs4p3rt" >
                <div></div>
            </div>
        </div >
    );
};