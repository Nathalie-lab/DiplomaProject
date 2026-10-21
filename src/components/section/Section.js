//импортирую стили для части с карточками духов
import './Section.css';

//импортирую данные из JSON-объекта
import parfumes from './parfumes.json';

function Section() {
    //Получить данные из массива JSON из ключа parfumes
    const listOfParfumes = parfumes.parfumes;

    return (
        <div className="section">
            <div className="wrap">
                
                <h2 className="section-title">Новинки</h2>

                <div className="products">
                    {listOfParfumes.map((item, index) => (
                        <div key={index} className="product-card">
                            
                            <div className="image-parfumes">
                                <img src={item.image} alt={item.name} />          
                            </div>

                            <div className="information">
                                <span className="brand">{item.brand}</span>
                                <span className="name">{item.name}</span>
                                <span className="volume">{item.volume} ml</span>
                                <div className="stars">{item.feedback}</div>
                                <span className="price">{item.price.toLocaleString()} ₽</span>
                            </div>

                            <button className="shopCart">В корзину</button>
                        </div>
                    ))}
                </div>

                <div className="buttonForNews">
                    <button className="news">Еще больше новинок</button>
                </div>

            </div>
        </div>
    );
}

export default Section;