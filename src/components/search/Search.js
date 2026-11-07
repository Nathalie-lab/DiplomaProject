import { Link } from 'react-router-dom';
import { useState } from 'react';

//импорт стилей
import './Search.css';

//Все свои бренды для алфавита для простоты файла перенесла в JSON
import allBrandsData from './brands.json'

function Search(){

const allBrands = allBrandsData.brands;

//Состояние для поиска брендов    
const [searchBrands, setSearchBrands] = useState('');
//Новое состояние для выделения избранных брендов
const [favouriteBrands, setFavouriteBrands] = useState(false);
//Новое состояние для строки алфавита и поиска по алфавиту
const [alphabetBrands, setAlphabetBrands] = useState('');


const filteredBrands = allBrands.filter((brand) => {
    const filteredBrandsName = brand.name.toLowerCase().includes(searchBrands.toLowerCase());
    const filteredBrandsLike = favouriteBrands ? brand.like : true;
    const filteredBrandsLetter = alphabetBrands ? brand.name.toUpperCase().startsWith(alphabetBrands) : true;

    return filteredBrandsName && filteredBrandsLike && filteredBrandsLetter;
});


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9', 'А-Я'];


    return(
        <div className="search-page">
            <div className="wrap">

                {/* Возврат на главную страницу */}
                <div className="back-page">
                    <Link to="/" className="back-title">Назад на главную</Link>
                </div>

                {/* Заголовок и счетчик количества */}
                <h1 className="search-title">
                    Бренды <span className='counter'>({filteredBrands.length})</span>
                </h1>

                {/* Строка поиска */}
                <div className="search-input">
                    <input 
                        type="text" 
                        placeholder='Поиск по названию'
                        value={searchBrands}
                        onChange={(e) => {
                            setSearchBrands(e.target.value);
                            setAlphabetBrands('');}  
                        }     
                    />
                </div>

                {/* Кнопки - Всё и Избранное */}
                <div className="search-buttons">
                    <button className={!favouriteBrands ? 'active' : ''} onClick={() => setFavouriteBrands(false)}>Все</button>
                    <button className={favouriteBrands ? 'active' : ''} onClick={() => setFavouriteBrands(true)}>Избранные</button>
                </div>


                {/* Строка с английским алфавитом */}
                <div className="search-alphabet">
                    {alphabet.map((letter) => (
                        <button key={letter} className={alphabetBrands === letter ? 'active' : ''} onClick={() => setAlphabetBrands(alphabetBrands === letter ? '' : letter)}>
                            {letter}
                        </button>
                    ))}
                </div>

                {/* Список брендов в алфавитном порядке */}
                <div className="search-brands">
                    {alphabet.map((letter) =>{

                        /* Из отфильтрованных брендов отбираем те, которые начинаются на нашу выбранную букву */
                        const chosenBrandsLetter = filteredBrands.filter((brand)=> brand.name.toUpperCase().startsWith(letter));

                        if (chosenBrandsLetter.length === 0) return null;

                        return(
                            <div className="search-brands-alphabet" key={letter}>
                                {/* Большая серая буква */}
                                <div className="big-letter">
                                    {letter}
                                </div>

                                {/* Колонки с брендами */}
                                <div className="letters-columns">
                                    {chosenBrandsLetter.map((brand, index) => (
                                        <Link key={index} to={`/brand/${brand.name.toLowerCase().replace(' ', '-')}`}>
                                            {brand.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )

                    })}

                </div>
            </div>
        </div>
    )
};

export default Search;