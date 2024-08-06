// Carousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './carousel.css';

const GalleryCarousel = ({ children: items }) => {
    const [imageClasses, setImageClasses] = useState([]);

    useEffect(() => {
        const imageClasses = items.map((item) => {
            const img = new Image();
            img.src = item;
            if (img.width > img.height) {
                return "landscape";
            } else {
                return "portrait";
            }
        });
        setImageClasses(imageClasses);
    }, [items]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            src={item}
                            alt={item.alt}
                            className={imageClasses[index]}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GalleryCarousel;
