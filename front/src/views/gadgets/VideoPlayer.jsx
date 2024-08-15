import { useEffect, useState } from "react";
import "./video-player.css";

const VideoPlayer = ({ children }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [quality, setQuality] = useState("original");
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // State to track current video index
    const [showNavButtons, setShowNavButtons] = useState(false); // State to toggle nav buttons visibility

    useEffect(() => {
        if (children?.length) {
            setSelectedVideo(children[0]);
            setCurrentIndex(0); // Initialize currentIndex
        }
    }, [children]);

    const handleQualityChange = (selectedQuality) => {
        setQuality(selectedQuality);
        setShowDropdown(false); // Hide dropdown after selection
    };

    const handleNextVideo = () => {
        if (children.length > 1) {
            const nextIndex = (currentIndex + 1) % children.length;
            setSelectedVideo(children[nextIndex]);
            setCurrentIndex(nextIndex);
        }
    };

    const handlePreviousVideo = () => {
        if (children.length > 1) {
            const prevIndex =
                (currentIndex - 1 + children.length) % children.length;
            setSelectedVideo(children[prevIndex]);
            setCurrentIndex(prevIndex);
        }
    };

    // Get available qualities based on the selected video
    const availableQualities = Object.keys(selectedVideo?.urls || {}).filter(
        (q) => selectedVideo?.urls[q]
    );

    return (
        <div className="video-player-container">
            {selectedVideo && (
                <div className="video-player-wrapper">
                    <div
                        className="video-player"
                        onMouseEnter={() => setShowNavButtons(true)}
                        onMouseLeave={() => setShowNavButtons(false)}
                    >
                        <video
                            className="video-about"
                            src={selectedVideo.urls[quality]}
                            controls
                            width="100%"
                        ></video>
                        {availableQualities?.length > 1 && (
                            <div className="custom-controls">
                                <div className="quality-dropdown">
                                    <button
                                        className="quality-button"
                                        onClick={() =>
                                            setShowDropdown(!showDropdown)
                                        }
                                    >
                                        <i className="fa fa-cog"></i>
                                    </button>
                                    {showDropdown && (
                                        <div className="dropdown-content">
                                            {availableQualities.map((q) => (
                                                <div
                                                    key={q}
                                                    className={`dropdown-item ${
                                                        quality === q
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleQualityChange(q)
                                                    }
                                                >
                                                    <span
                                                        className={`quality-text ${
                                                            quality === q
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                    >
                                                        {q
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            q.slice(1)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {children.length > 1 && showNavButtons && (
                            <div className={`navigation-controls`}>
                                <button
                                    className="nav-button next-button"
                                    onClick={handleNextVideo}
                                >
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                <button
                                    className="nav-button prev-button"
                                    onClick={handlePreviousVideo}
                                >
                                    <i className="fa fa-chevron-left"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
