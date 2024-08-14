import { useEffect, useState } from "react";
import "./video-player.css"; // Ensure to import your CSS file

const VideoPlayer = ({ children, controls = true }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [quality, setQuality] = useState("original");

    useEffect(() => {
        if (children?.length) setSelectedVideo(children[0]);
    }, [children]);

    const handleQualityChange = (selectedQuality) => {
        setQuality(selectedQuality);
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    // Get available qualities based on the selected video
    const availableQualities = Object.keys(selectedVideo?.urls || {}).filter(
        (q) => selectedVideo?.urls[q]
    );

    return (
        <div className="video-player-container">
            {children?.length > 1 && (
                <div className="video-selection">
                    {children.map((video) => (
                        <div
                            key={video.id}
                            className={`video-item ${
                                selectedVideo?.id === video.id ? "active" : ""
                            }`}
                            onClick={() => handleVideoSelect(video)}
                        >
                            <h2 className="video-title">
                                {video.title || "Untitled"}
                            </h2>
                        </div>
                    ))}
                </div>
            )}
            {selectedVideo && (
                <div className="video-player-wrapper">
                    <div className="video-player">
                        <video
                            className="video-about"
                            src={selectedVideo.urls[quality]}
                            controls={controls}
                            width="100%"
                        ></video>
                        <div className="quality-controls">
                            {availableQualities.map((q) => (
                                <button
                                    key={q}
                                    className={`quality-button ${
                                        quality === q ? "active" : ""
                                    } ${q}`}
                                    onClick={() => handleQualityChange(q)}
                                >
                                    {q.charAt(0).toUpperCase() + q.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
