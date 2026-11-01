import './Sectiontwo.css';

import adsData from './adsData.json'; 

import arrowBefore from './arrowBefore.png';
import arrowNext from './arrowNext.png';


function Sectiontwo(){
    const listOfAds = adsData.ads;

    return(
        <div className="section-two">
            <div className="wrap">
                

                <div className="section-header">
    <h2>Спец <br /> предложения</h2> 
    
    <div className="header-arrows">
            <button className="arrow-btn">
                <img src={arrowBefore} alt="Назад" />
            </button>
            <button className="arrow-btn">
                <img src={arrowNext} alt="Вперед" />
            </button>
                    </div>
                </div>


                <div className="ads-grid">
                    {listOfAds.map((ad) => (
                        <div key={ad.id} className="ad-card">
                            <div className="ad-img-container">
                                
                                <img 
                                    src={ad.image} 
                                    alt={ad.title} 
                                />

                            </div>
                            <div className="ad-info">
                                <p className="ad-title">{ad.title}</p>
                                <span className="ad-date">{ad.date}</span>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="more-btn-container">
                    <button className="more-btn">Больше <br/>предложений</button>
                </div>

            </div>
        </div>
    )
}

export default Sectiontwo;