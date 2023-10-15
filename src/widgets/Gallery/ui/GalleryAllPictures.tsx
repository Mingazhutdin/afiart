import { FC } from 'react';
import cls from './Gallery.module.scss';
import { classNames } from 'shared/lib';
import { Pictures } from '../types/types';
import m1 from './assets/image/m1.jpg';
import m2 from './assets/image/m2.jpg';
import m3 from './assets/image/m3.jpg';
import m4 from './assets/image/m4.jpg';
import m5 from './assets/image/m5.jpg';
import m6 from './assets/image/m6.jpg';
import m7 from './assets/image/m7.jpg';
import m8 from './assets/image/m8.jpg';
import m9 from './assets/image/m9.jpg';

const pictureArray: Pictures[] = [
    { id: 1, image: m1 },
    { id: 2, image: m2 },
    { id: 3, image: m3 },
    { id: 4, image: m4 },
    { id: 5, image: m5 },
    { id: 6, image: m6 },
    { id: 7, image: m7 },
    { id: 8, image: m8 },
    { id: 9, image: m9 },
];

interface GalleryAllPicturesProps {
    className?: string
}

export const GalleryAllPictures: FC<GalleryAllPicturesProps> = ({ className }) => {
    return (
        <>
            {
                pictureArray?.map((picture) => (
                    <div className={classNames(cls.galleryallpictures, {}, [className])}>
                        <img src={picture.image} alt='picture' key={picture.id} />
                    </div>
                ))
            }
        </>
    )
}