// Carousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./carousel.css";

const GalleryCarousel = ({
    children: items,
    autoplaySpeed = 4000,
    speed = 1000,
    borderRadius = 20,
    slidesToShow = 1,
    slidesToScroll = 1,
}) => {
    const [imageClasses, setImageClasses] = useState([]);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        setSettings({
            dots: true,
            infinite: true,
            speed,
            slidesToShow,
            slidesToScroll,
            autoplay: Boolean(autoplaySpeed),
            autoplaySpeed,
        });
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
    }, [
        items,
        autoplaySpeed,
        borderRadius,
        slidesToShow,
        slidesToScroll,
        speed,
    ]);

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            src={item}
                            alt={item.alt}
                            onClick={(e) => e.preventDefault()}
                            style={{ cursor: "default" }}
                            className={imageClasses[index]}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GalleryCarousel;
