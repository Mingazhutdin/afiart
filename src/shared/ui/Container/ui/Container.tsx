import { FC, ReactNode } from 'react';
import cls from './Container.module.scss';
import { classNames } from 'shared/lib';

interface ContainerProps {
    className?: string,
    children?: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={classNames(cls.container, {}, [className])}>
            {
                children
            }
        </div>
    )
}