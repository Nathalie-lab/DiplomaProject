import { useState } from 'react';
import { Link } from 'react-router-dom';

//испортирую стили для профиля
import './Profile.css';

//присоединяю отдельный компонент с личным кабинетом
import PrivateCabinet from '../privateCabinet/PrivateCabinet';

function Profile(){

    //Состояния полей формы
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Состояние - нажата ли кнопка "Зарегистрироваться"
    const [isRegistered, setIsRegistered] = useState(false);

    //Состояние для ошибок в написании в полях формы
    const [error, setError] = useState('');

    function registration(e) {
        e.preventDefault(); //Отменяем перезагрузку страницы, иначе все сбрасывается
        
        //СДЕЛАТЬ ШАБЛОН РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
        const exp = /^[А-ЯЁA-Z]/;

        const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Первая часть ^[^\s@]+ в начале идут любые символы, кроме пробела и знака @, потом делаем обязательный символ собачки, после должно идти название почты [^\s@]+, обязательная точка \. и потом еще кусочек ru или com или другие варианты [^\s@]+$
        //Моя почта Nikandra191999 @ yandex . ru

        const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
        //(?=.*[a-z]) наличие хотя бы одной маленькой латинской буквы (a–z), заьем (?=.*[A-Z]) наличие хотя бы одной заглавной латинской буквы (A–Z). Хотя бы одна цифра (?=.*\d). Хотя бы один специальный символ(?=.*[^A-Za-z0-9]). И делаем от 6 символов длину .{6,}

        //Проверка имени с большой буквы
        if(!exp.test(name.trim())){
            setError('Ошибка! Имя должно быть с заглавной буквы!');
            return;
        }

        //Проверка фамилии с большой буквы
        if (!exp.test(surname.trim())) {
            setError('Ошибка! Фамилия должна начинаться с заглавной буквы!');
            return;
        }
        
        //Проверка электронной почты
        if (!emailExp.test(email.trim())) {
            setError('Ошибка! Введите корректный Email (например, name@mail.ru)!');
            return;
        }

        //Проверка пароля
        if (!passwordExp.test(password)) {
            setError('Ошибка! Пароль должен быть от 6 символов и содержать заглавную и строчную латинские буквы, цифру и спецсимвол!');
            return;
        }

        setError('');
        setIsRegistered(true); // Успешная регистрация, когда меняем на true
    };

    //Выход из личного кабинета
    function exitCabinet(){
        setIsRegistered(false);
        setPassword('');
    };

    return(
        <div className="profile-page">
            <div className="wrap">

                {/* Кнопка возврата на главную страницу */}
                <div className="back-page">
                    <Link to="/" className="back-title">Назад на главную</Link>
                </div>

                {/* НЕ ЗАБЫТЬ! Нужно выводить либо анкету, либо успешная регистрация - попробовать через функция "если" */}
                
                {isRegistered ? 
                    (
                        <PrivateCabinet
                            name={name} 
                            surname={surname} 
                            email={email} 
                            exitCabinet={exitCabinet}  
                        />
                    ) : (
                        <div className="profile-page-form">
                            <h1 className='profile-title'>Регистрация</h1>

                            <form className="profile-form" onSubmit={registration}>
                                <input 
                                    type="text" 
                                    placeholder="Имя" 
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setError('');
                                    }}
                                    required
                                />
                                <input 
                                    type="text" 
                                    placeholder="Фамилия" 
                                    value={surname}
                                    onChange={(e) => {
                                        setSurname(e.target.value);
                                        setError('');
                                    }}
                                    required
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError('');
                                    }}
                                    required
                                />
                                <input 
                                    type="password" 
                                    placeholder="Пароль" 
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError('');
                                    }}
                                    required
                                />

                                {/* ЕСЛИ БУДЕТ ОШИБКА В НАПИСАНИИ */}
                                {error && <p className="error-text">{error}</p>}     

                                <button type="submit">Зарегистрироваться</button>
                            </form>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
};

export default Profile;