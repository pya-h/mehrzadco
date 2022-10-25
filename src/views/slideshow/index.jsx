import { useEffect, useState } from "react";
import './slideshow.css';

const SlideShow = ({ children, startIndex = 0 }) => {
    const [imageIndex, setImageIndex] = useState(startIndex);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => {
            setShowAnimation(true);
            setTimeout(() => setShowAnimation(false), [2000]);
            setImageIndex((i) => {
                return (i + 1) % children.length;
            });
        }, [10000]);

        return () => {
            clearInterval(timerID);
        };
    }, [children.length]);
    return (
        <div
            className="col-lg-4 bg position-fixed d-none d-lg-block"
            style={{
                backgroundImage: `url(${children[imageIndex]})`,
            }}
        >
            {showAnimation && (
                <div
                    className="sliding-background bg"
                    style={{
                        borderRadius: "10px",
                        backgroundImage: `url(${
                            children[
                                imageIndex > 0
                                    ? imageIndex - 1
                                    : children.length - 1
                            ]
                        })`,
                    }}
                />
            )}
        </div>
    );
};

export default SlideShow;
