import { FC } from 'react';
import ReactComponent from './assets/Logo.svg';

interface SVGProps {
    className?: string
}

export const Logo: FC<SVGProps> = ({ className }) => {
    return (
        <ReactComponent className={className} />
    )
}