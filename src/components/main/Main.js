//импорт стилей
import './Main.css';

//импорт иконок
import parfume from './parfume.png';
import parfume2 from './parfume2.png';

import { useState, useEffect } from 'react';

function Main() {

//Отсюда из массива возьму обе фотографии для переключения фоток в баннере и разного текст на этих фото
    const photos = [
        {
            id: 1,
            image: parfume,
            title: <>СКИДКА 15% <br/> НА ДУХИ</>,
            subtitle: 'только с 1 по 5 декабря',
            color: '#000000'
        },
        {
            id: 2,
            image: parfume2,
            title: <>НОВИНКА <br/> СЫВОРОТКА <br/> BEAUTY </>,
            subtitle: '',
            color: '#ffffff'
        }
    ]

    //изменение состояния для смены фотографий
    const [changePhotos, setChangePhotos] = useState(0);

    //В функции возьму смену интервала
    useEffect(() => {
        const changeAround = setInterval(() => {
            setChangePhotos((item) => (item + 1) % photos.length)
        }, 6000);

        return () => clearInterval(changeAround); //очистить
    }, [photos.length]);
    
    return (
        <div className="main">

            {/* Слайдер для перемещения картинок в баннере */}
            <div className="slider" style={{ transform: `translateX(-${changePhotos * 100}%)`}}>

                {photos.map((photo) => (
                    <div className="photoSlide" key={photo.id} style={{ backgroundImage: `url(${photo.image})`}}>
                        <div className="wrap">

                            {/* Текст на фотографиях */}
                            <div className="main-content" style={{color: photo.color}}>
                                <h1>{photo.title}</h1>
                                <p>{photo.subtitle}</p>
                            </div>

                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Main;