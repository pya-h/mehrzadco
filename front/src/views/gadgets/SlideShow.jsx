import { useEffect, useState } from "react";

const SlideShow = ({
    children: images,
    style = {},
    className = "",
    outerClass = "",
    interval = 5000,
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(images?.length ? +images.length - 1 : 0);

    useEffect(() => {
        const changeImage = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, interval);

        return () => clearInterval(changeImage);
    }, [images, interval]);

    return (
        <div
            className={`col-lg-4 bg d-block p-0 mx-auto ${outerClass} ${className}`}
            style={{
                backgroundImage: `url(${images[currentImageIndex].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out",
                ...style,
            }}
        />
    );
};

export default SlideShow;
