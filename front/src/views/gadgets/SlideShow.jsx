import { useEffect, useState } from "react";

const SlideShow = ({ children, startIndex = 0, style = {}, className = "", outerClass = "", innerClass = "", delay = 10000 }) => {
    const [imageIndex, setImageIndex] = useState(startIndex);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => {
            setShowAnimation(true);
            setTimeout(() => setShowAnimation(false), [700]);
            setImageIndex((i) => {
                return (i + 1) % children.length;
            });
        }, [delay]);

        return () => {
            clearInterval(timerID);
        };
    }, [children.length, delay]);
    return (
        <div
            className={`col-lg-4 bg d-block p-0 mx-auto ${outerClass} ${className}`}
            style={{ ...style,
                backgroundImage: `url(${children[imageIndex]})`,
            }}
        >
            {showAnimation && (
                <div
                    className={`sliding-background bg m-0 p-0 ${innerClass} ${className}`}
                    style={{ ...style,
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
