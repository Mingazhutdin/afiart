import { FC } from 'react';
import cls from './Feedback.module.scss';
import { classNames } from 'shared/lib';
import { Feedback } from '../types/types';

const feedbackArray: Feedback[] = [
    { id: 1, rating: 4.4, name: 'Minga', message: 'The staff was incredibly friendly and accommodating. The salon was spotlessly clean and the atmosphere was so relaxing. ' },
    { id: 2, rating: 4.8, name: 'Kate', message: 'The staff was incredibly friendly and accommodating. The salon was spotlessly clean and the atmosphere was so relaxing. ' },
    { id: 3, rating: 4.7, name: 'Megan', message: 'The staff was incredibly friendly and accommodating. The salon was spotlessly clean and the atmosphere was so relaxing. ' }
]

interface FeedbackCreatorProps {
    className?: string
}

export const FeedbackCreator: FC<FeedbackCreatorProps> = ({ className }) => {
    return (
        <>
            {
                feedbackArray?.map((user) => (
                    <div className={classNames(cls.feedbackcreator, {}, [className])}>
                        <p className={cls.name}>{user?.name}</p>
                        <p className={cls.rating}>{user?.rating}</p>
                        <p className={cls.message}>{user?.message}</p>
                    </div>
                ))
            }
        </>
    )
}