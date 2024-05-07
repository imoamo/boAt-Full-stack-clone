import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Slideshow.module.css';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    marginTop: '3rem',
}

const slideImages = [
    {
        url: 'https://www.boat-lifestyle.com/cdn/shop/files/AB_A_1040_HP_Banner_WEB_1600x.jpg?v=1714287091',
        caption: 'Slide 1'
    },
    {
        url: 'https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352',
        caption: 'Slide 2'
    },
    {
        url: 'https://www.boat-lifestyle.com/cdn/shop/files/Desk_1600x.gif?v=1713960981',
        caption: 'Slide 3'
    },
    {
        url: 'https://www.boat-lifestyle.com/cdn/shop/files/Stone_Majestic_HP_Banner_WEB_1600x.jpg?v=1714287029',
        caption: 'Slide 4'
    },
    {
        url: 'https://www.boat-lifestyle.com/cdn/shop/files/Airdopes_Supreme_Banner_WEB_1515c104-abee-4263-8e44-4511088592de_1600x.jpg?v=1712209151',
        caption: 'Slide 5'
    },
    {
        url: 'https://www.boat-lifestyle.com/cdn/shop/files/IPL_HP_Banner_WEB_1_1440x.jpg?v=1712576793',
        caption: 'Slide 6'
    }
];

const Slideshow = () => {
    return (
        <div className="slide-container" style={divStyle}>
            <Carousel
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    return (
                        <span
                            style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: isSelected ? '#007bff' : '#cccccc',
                                display: 'inline-block',
                                margin: '0 5px',
                                cursor: 'pointer',
                                borderRadius: '50%'
                            }}
                            onClick={onClickHandler}
                        />
                    );
                }}
            >
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <img src={slideImage.url} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Slideshow;
