import { Link } from "react-router-dom";
import { useState } from "react";

//Импорт стилей
import './Map.css';

function Map(){
    
    const cities = [
        {name: "Москва", id: 1, link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577322.4387781183!2d37.38523765!3d55.5817222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1793987339607!5m2!1sru!2sru" },
        {name: "Санкт-Петербург", id: 2, link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255811.37353882435!2d29.76436949183679!3d59.94000124230742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1793988607291!5m2!1sru!2sru"},
        {name: "Владимир", id: 3, link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142240.38618859975!2d40.25765174341366!3d56.14835484605316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414c796abd574431%3A0xa5192737744ddb02!2z0JLQu9Cw0LTQuNC80LjRgCwg0JLQu9Cw0LTQuNC80LjRgNGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1793988676206!5m2!1sru!2sru"}
    ]
    
    const [chooseCity, setChooseCity] = useState(0);
    const currentCity = cities[chooseCity];

    return(
        <div className="map-page">
            <div className="wrap">

                {/* Ссылка возврата на главную страницу */}
                <div className="back-page">
                    <Link to="/" className="back-title">Назад на главную</Link>
                </div>

                {/* Здесь можно подумать, как подставлять название города в зависимости от точки выбора. Сделано! */}
                <h1 className="map-title">Наши торговые точки в г. {currentCity.name}</h1>

                {/* Выпадающий список с городами. При нажатии карта меняется */}        
                <div className="choose-city-list">
                    <label htmlFor="city-list">Выберите город:</label>
                    <div>
                        <select 
                            id="city-list" 
                            value={chooseCity} 
                            onChange={(e) => setChooseCity(Number(e.target.value))}>
                            {cities.map((city, index) => (
                                <option key={index} value={index}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>  

                {/* Открыть карту в интернете - Поделиться - Встраивание карт. С Яндекс картами не получилось  */}
                <div className="map-iframe">
                    <iframe 
                        src={currentCity.link}
                        width="100%" 
                        height="500"
                        allowFullScreen={true}
                        title={`Карта торговых точек в г. ${currentCity.name}`}
                        style={{ position: 'relative', 
                                 border: '1px solid gray',
                                 borderRadius: "20px"
                        }}
                    ></iframe>
                </div>      

            </div>
        </div>
    )
};

export default Map;