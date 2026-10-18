//импорт файла со стилями
import './Header.css';
//импорт иконок
import map from './map.png';
import iconOne from './iconOne.png'
import iconTwo from './iconTwo.png'
import iconThree from './iconThree.png'

//import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="wrap">

                {/* Верхняя строка меню */}
                <div className="menuUp">

                    <div className="map">
                        <img src={map} alt="Иконка локации" />
                        <span>Москва</span>
                    </div>

                    <div className="brandName">
                        <p>YOU</p>
                    </div>

                    <div className="signs">
                        <a href="#"><img src={iconOne} alt="" /></a>
                        <a href="#"><img src={iconTwo} alt="" /></a>
                        <a href="#"><img src={iconThree} alt="" /></a>
                    </div>
                </div>


                {/* Нижняя строка */}
                <nav className="menuDown">
                    <a href="#">каталог</a>
                    <a href="#">бренды</a>
                    <a href="#">акции</a>
                    <a href="#">магазины</a>
                    <a href="#">новинки</a>
                </nav>


            </div>
        </div>

    )
}

export default Header;