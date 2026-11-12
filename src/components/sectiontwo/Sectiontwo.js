//импорт стилей
import './Sectiontwo.css';

//мой JSON c объявлениями
import adsData from './adsData.json';

//стрелку импортирую одну, потом стилях переверну на 180
import arrows from './arrows.png';

import { useState } from 'react';

function Sectiontwo() {
    //сюда свой JSON файл для работы сохраняю
    const listOfAds= adsData.ads;

    //изменение состояния пермещения картинок в слайдере
    const [ads, setAds] = useState(listOfAds);

    function changeAds(direction) {
        if (direction === 'right') {
            //Берем последний элемент и ставим его в начало массива
            setAds((prevAds) => {
                const updated = [...prevAds];
                const lastItem = updated.pop(); // удаляем с конца
                updated.unshift(lastItem);     // добавляем в начало
                return updated;
            });
        } else {
            //Берем первый элемент и ставим его в конец массива
            setAds((prevAds) => {
                const updated = [...prevAds];
                const firstItem = updated.shift(); // удаляем с начала
                updated.push(firstItem);          // добавляем в конец
                return updated;
            });
        }
    }

    return (
        <div className="section-two">
            <div className="wrap">


                <div className="section-header">
                    <h2>Спец <br /> предложения</h2>

                    {/* Стрелочки для перелистывания */}
                    <div className="header-arrows">

                        <button className="arrow-btn left-btn" onClick={() => changeAds('left')}>
                            <img src={arrows} alt="Назад" />
                        </button>

                        <button className="arrow-btn" onClick={() => changeAds('right')}>
                            <img src={arrows} alt="Вперед" />
                        </button>

                    </div>
                </div>


                <div className="ads-grid">
                    {ads.slice(0, 4).map((ad) => (
                        <div key={ad.id} className="ad-card">

                            <div className="ad-img-container">
                                <img 
                                    src={ad.image} 
                                    alt={ad.title} 
                                />
                            </div>

                            <div className="ad-info">
                                <p className="ad-title">{ad.title}</p>
                                <span className="ad-date">{ad.date}</span>
                            </div>

                        </div>
                    ))}
                </div>


                <div className="more-btn-container">
                    <button className="more-btn">Больше <br />предложений</button>
                </div>

            </div>
        </div>
    )
}

export default Sectiontwo;