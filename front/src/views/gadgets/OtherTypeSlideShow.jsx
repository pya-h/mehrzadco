import { useEffect, useState } from "react";

const OtherTypeSlideShow = ({
    children,
    startIndex = 0,
    style = {},
    className = "",
    outerClass = "",
    innerClass = "",
    interval = 3000,
}) => {
    const [imageIndex, setImageIndex] = useState(startIndex);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const changeImage = setInterval(() => {
            setShowAnimation(true);
            setImageIndex((prevIndex) => (prevIndex + 1) % children.length);
            setTimeout(() => setShowAnimation(false), 625);
        }, interval);

        return () => clearInterval(changeImage);
    }, [children, interval]);

    return (
        <div
            className={`col-lg-4 bg d-block p-0 mx-auto ${outerClass} ${className}`}
            style={{
                ...style,
                backgroundImage: `url(${children[imageIndex]?.url})`,
            }}
        >
            {showAnimation && (
                <div
                    className={`sliding-background bg m-0 p-0 ${innerClass} ${className}`}
                    style={{
                        ...style,
                        backgroundImage: `url(${
                            children[
                                imageIndex > 0
                                    ? imageIndex - 1
                                    : children.length - 1
                            ]?.url
                        })`,
                    }}
                />
            )}
        </div>
    );
};

export default OtherTypeSlideShow;
