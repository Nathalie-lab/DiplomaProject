import './Bar.css';

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

function Bar(){
    
    const brands = [
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
    ];
    
    function scrolling(direction) {
        const line = document.querySelector('.brendLine');
        
        if (line) {
            if (direction === 'left') {
                line.scrollLeft -= 300;
            } else {
                line.scrollLeft += 300;
            }
        }
    }


    return(
        <div className="bar">
            <div className="wrap">

                {/* Стрелка влево */}
                <button className="leftbtn" onClick={() => scrolling('left')}><img src={rightArrow} alt="Назад" /></button>

                <div className="brendLine">
                    {brands.map((brand) => (
                        <div key={brand.id} className="brendItem">
                            <img src={brand.img} alt={brand.name} />
                        </div>
                    ))}
                </div>

                {/* Стрелка вправо */}
                <button className="rightbtn" onClick={() => scrolling('right')}><img src={leftArrow} alt="Вперед" /></button>

            </div>
        </div>
    )
};

export default Bar;