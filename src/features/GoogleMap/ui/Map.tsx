import { FC, useState, memo } from 'react';
import cls from './Map.module.scss';
import { classNames } from 'shared/lib';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

const containerStyle = {
    width: '450px',
    height: '194.5px'
};

interface MapProps {
    className?: string
}

const infoWindowContent = [
    <div>
        <h1 className={cls.title}>AfiArt Salon</h1>
        <p className={cls.description}>371 E Dundee rd Wheeling, IL 60090</p>
    </div>
]

const Map: FC<MapProps> = ({ className }) => {
    const [showWindow, setShowWindow] = useState(false);

    const handleClick = () => {
        setShowWindow(prev => !prev);
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map',
        googleMapsApiKey: API_KEY
    })

    return isLoaded ? (
        <div className={classNames(cls.map, {}, [className])}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    lat: 42.139290,
                    lng: -87.905890
                }}
                zoom={13}
                options={{
                    streetViewControl: false,

                }}
            >
                <Marker
                    position={{ lat: 42.139290, lng: -87.905891 }}
                    onClick={() => handleClick()}
                >
                    {
                        showWindow && (
                            <InfoWindow>
                                <>
                                    {infoWindowContent}
                                </>
                            </InfoWindow>
                        )
                    }
                </Marker>

            </GoogleMap>
        </div>
    ) : <></>
}

export default memo(Map);





