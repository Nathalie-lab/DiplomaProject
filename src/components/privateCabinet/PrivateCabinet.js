import { Link } from 'react-router-dom';
import { useState } from 'react';

//испортирую стили
import './PrivateCabinet.css';

// НЕ ЗАБУДЬ пропсы через деструктуризацию
function PrivateCabinet({ name, surname, email, exitCabinet}) {
    
    //Состояние для регистрации
    const [welcome, setWelcome] = useState(true);
    
    //Состояние для телефона
    const [phoneNumber, setPhoneNumber] = useState('');

    //Состояние для адреса
    const [address, setAddress] = useState('');

    //Состояние для редактирования личного кабинета
    const [changeCabinet, setChangeCabinet] = useState(true);

    //Режим редактирования
    function saveChanges(e) {
        e.preventDefault();
        setChangeCabinet(false);
    }

    /* ПОМЕНЯТЬ БОНУСНУЮ КАРТУ - УБИРАТЬ ИЛИ ДОБАВЛЯТЬ ИСТОРИЮ НАЧИСЛЕНИЙ */
    const bonusHistory = [
        { id: 1, title: 'Регистрация на сайте', points: 500, date: new Date().toLocaleDateString() },
        { id: 2, title: 'Заказ на сумму от 10 000 рублей', points: 1500, date: '09.11.26'},
        { id: 3, title: 'Пройденный опрос', points: 100, date: '10.11.26' },
        { id: 4, title: 'Оставленный отзыв', points: 1000, date: '11.11.26'},
        { id: 5, title: 'Заказ на сумму от 5 000 рублей', points: 700, date: '12.11.26' }
    ];

    //Общая сумма бонусов
    const totalBonuses = bonusHistory.reduce((sum, point) => sum + point.points, 0);

    //Состояние для скрытия истории начислений бонусов, иначе всё растягивается вниз
    const [showHistory, setShowHistory] = useState(false);

    //Делаю три видимых пункта
    const visibleHistory = showHistory ? bonusHistory : bonusHistory.slice(0, 3);

    return (
        
        <div className="cabinet">
            
            {/* Перенесла сюда сообщение об успешной регистрации */}
            {welcome && (
                <div className="success-welcome">
                    <span>Добро пожаловать, {name}! Вы успешно зарегистрировались с почтой {email}.</span>
                    <button onClick={() => setWelcome(false)} className="close-welcome">✕</button>
                </div>
            )}

            {/* Шапка кабинета с именем и кнопкой выхода */}
            <div className="cabinet-header">

                <div>
                    <h1 className="cabinet-title">{name} {surname}</h1>
                    <p className="cabinet-email">{email}</p>
                </div>
                
                {/* Выход через функцию - НЕ ЗАБЫТЬ ПЕРЕДАТЬ В ПРОПСЫ */}
                <button className="exit-button" onClick={exitCabinet}>
                    Выйти
                </button>

            </div>

            {/* Разделы личного кабинета */}
            <div className="cabinet-information">
                
                <div className="cabinet-card">
                    <h3>Мои данные</h3>
                    <p><strong>Имя:</strong> {name}</p>
                    <p><strong>Фамилия:</strong> {surname}</p>
                    <p><strong>Почта:</strong> {email}</p>
    

                    {changeCabinet ? (
                            /* Форма для ввода телефона и адреса */
                            <form className="contact-form" onSubmit={saveChanges}>
                                <input 
                                    type="tel" 
                                    placeholder="+7 (999) 000-00-00" 
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                                <input 
                                    type="text" 
                                    placeholder="Город, улица, дом, квартира" 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                                <button type="submit" className="save-button">
                                    Сохранить данные
                                </button>
                            </form>
                        ) : (
                            /* Режим просмотра после сохранения */
                            <div className="check-contact-form">
                                <p><strong>Телефон:</strong> {phoneNumber}</p>
                                <p><strong>Адрес доставки:</strong> {address}</p>
                                <button 
                                    type="button" 
                                    className="check-button" 
                                    onClick={() => setChangeCabinet(true)}
                                > Изменить </button>
                            </div>
                        )}
                </div>

                {/* БОНУСНАЯ КАРТА */}        
                <div className="cabinet-card">
                    <h3>Бонусная карта</h3>
                    <p className="bonus-counter">{totalBonuses}</p>

                    <div className="bonus-history">
                        <span className="history-title">История начислений:</span>
                        {visibleHistory.map((point) => (
                            <div key={point.id} className="history-point">
                                <div>
                                    <p className="history-point-title">{point.title}</p>
                                    <span className="history-point-date">{point.date}</span>
                                </div> 
                                <span className="total-history-points">+{point.points}</span>
                            </div>
                        ))}

                {/* Развернуть всю историю начислений */}
                        {bonusHistory.length > 3 && (
                            <button 
                                type="button" 
                                className="show-full-history"
                                onClick={() => setShowHistory(!showHistory)}
                            >
                                {showHistory ? 'Скрыть' : `Показать все (${bonusHistory.length})`}
                            </button>
                         )}
                    </div>          
                </div>

                <div className="cabinet-card">
                    <h3>Мои заказы</h3>
                    <p className="no-orders">У вас пока нет оформленных заказов.</p>
                    <Link to="/" className="catalog">Перейти в каталог</Link>
                </div>

            </div>
        </div>
    );
};

export default PrivateCabinet;