import './Bar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* импорт логотипов */
import tomFord from '../bar/logos/tomFord.png';
import gucci from '../bar/logos/gucci.svg';
import nars from '../bar/logos/nars.png';
import paco from '../bar/logos/paco.png';
import moschino from '../bar/logos/moschino.png';
import dior from '../bar/logos/dior.svg';
import chanel from '../bar/logos/chanel.svg';
import versace from '../bar/logos/versace.svg';
import givenchy from '../bar/logos/givenchy.svg';
import lacoste from '../bar/logos/lacoste.svg';

/* импорт стрелочек */
import leftArrow from '../bar/logos/leftArrow.png';
import rightArrow from '../bar/logos/rightArrow.png';


function Bar() {

    //Массив брендов через useState
    const [brands, setBrands] = useState([
        { id: 1, name: 'Lacoste', img: lacoste },
        { id: 2, name: 'Gucci', img: gucci },
        { id: 3, name: 'Nars', img: nars },
        { id: 4, name: 'Paco Rabanne', img: paco },
        { id: 5, name: 'Moschino', img: moschino },
        { id: 6, name: 'Dior', img: dior },
        { id: 7, name: 'Chanel', img: chanel },
        { id: 8, name: 'Versace', img: versace },
        { id: 9, name: 'Givenchy', img: givenchy },
        { id: 10, name: 'Tom Ford', img: tomFord },
    ]);

    //Функция для цикла перелистывания через изменение состояния (useState)
    function scrolling(direction) {

        if (direction === 'left') {
            //Берем последний элемент и ставим его в начало массива
            setBrands((prevBrands) => {
                const updated = [...prevBrands];
                const lastItem = updated.pop(); // удаляем с конца
                updated.unshift(lastItem);     // добавляем в начало
                return updated;
            });
        } else {
            //Берем первый элемент и ставим его в конец массива
            setBrands((prevBrands) => {
                const updated = [...prevBrands];
                const firstItem = updated.shift(); // удаляем с начала
                updated.push(firstItem);          // добавляем в конец
                return updated;
            });
        }
    }

    return (
        <div className="bar">
            <div className="wrap">

                {/* стрелка назад */}
                <button className="leftbtn" onClick={() => scrolling('left')}><img src={leftArrow} alt="Назад"/></button>

                <div className="brandLine">
                    {brands.map((brand) => (
                        
            <div key={brand.id} className="brendItem">
                <Link to={`/brand/${brand.name.toLowerCase().replace(' ', '-')}`}>
                    <img src={brand.img} alt={brand.name} />
                </Link>
            </div>
                    ))}
                </div>

                {/* Стрелка вправо */}
                <button className="rightbtn" onClick={() => scrolling('right')}><img src={rightArrow} alt="Вперед"/></button>

            </div>
        </div>
    )
};

export default Bar;