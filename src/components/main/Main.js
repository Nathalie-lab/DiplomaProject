import './Main.css';

//импорт иконок
import parfume from './parfume.png';

function Main() {
    return (
        <div className="main">
            <div className="wrap">
                
                {/* Текст со скидкой */}
                <div className="main-content">
                    <h1>
                        СКИДКА 15% <br/>
                        НА ДУХИ
                    </h1>
                    <p>только с 1 по 5 декабря</p>
                </div>

            </div>
        </div>

    )
}

export default Main;