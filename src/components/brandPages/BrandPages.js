import './BrandPages.css';

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../section/parfumes.json';

function BrandPages() {
    // 1. Получаем имя бренда из адресной строки (например, 'gucci' или 'dior')
    const { brandName } = useParams();
    
    // 2. Стейт для хранения текста, который пользователь вводит в поиск
    const [searchQuery, setSearchQuery] = useState('');

    // Получаем весь массив духов из JSON
    const allParfumes = data.parfumes;

    // 3. ФИЛЬТРАЦИЯ: Оставляем только духи этого бренда И соответствующие поиску
    const filteredParfumes = allParfumes.filter((item) => {
        // Проверяем, совпадает ли бренд (приводим к нижнему регистру, чтобы не было ошибок из-за пробелов)
        const matchesBrand = item.brand.toLowerCase().replace(' ', '-') === brandName.toLowerCase();
        
        // Проверяем, есть ли поисковый запрос в названии аромата
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesBrand && matchesSearch;
    });

    return (
        <div className="brand-page">
            <div className="wrap">
                
                {/* Кнопка возврата на главную */}
                <div className="back-link-container">
                    <Link to="/" className="back-link">← Назад на главную</Link>
                </div>

                {/* Заголовок страницы с именем текущего бренда */}
                <h1 className="brand-page-title">Бренд: {brandName}</h1>

                {/* СТРОКА ПОИСКА */}
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Поиск по названию аромата..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="brand-search-input"
                    />
                    {searchQuery && (
                        <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
                    )}
                </div>

                {/* СЕТКА С ФИЛЬТРОВАННЫМИ ТОВАРАМИ */}
                {filteredParfumes.length > 0 ? (
                    <div className="products-grid">
                        {filteredParfumes.map((item, index) => (
                            <div key={index} className="product-card">
                                <div className="product-img">
                                    <img src={item.image} alt={`${item.brand} ${item.name}`} />
                                </div>
                                <div className="product-info">
                                    <span className="brand">{item.brand}</span>
                                    <span className="name">{item.name}</span>
                                    <div className="stars">{item.feedback}</div>
                                    <span className="price">{item.price.toLocaleString()} ₽</span>
                                </div>
                                <button className="add-to-cart-btn">В корзину</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Если ничего не нашлось по поиску или такого бренда нет
                    <div className="no-products-message">
                        <p>Ничего не найдено. Попробуйте изменить запрос.</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default BrandPages;