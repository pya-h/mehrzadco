import { Fragment, useEffect, useRef, useState } from "react";

const VideoPlayer = ({ children = [], customVideo = !children || children.length === 0, controls = true }) => {
    const [idxVideo, setVideoIndex] = useState(0);
    const [src, setSrc] = useState(children.length > 0 ? children[idxVideo] : null);
    const refFileInput = useRef();

    useEffect(() => {
        setSrc(children[idxVideo]);
    }, [idxVideo, children]);

    const handleChange = (event) => {
        try {
            // Get the uploaded file
            const file = event.target.files[0];
            // Transform file into blob URL
            setSrc(URL.createObjectURL(file));
        } catch (error) {
            console.error(error);
        }
    };

    const openFileDialog = () => {
        refFileInput.current.click();
    };

    return (
        <Fragment>
            <video className="video-about"
                src={src}
                controls={controls}
                width="100%"
            >

            </video>

            {customVideo && (
                <div className="text-center">
                    <input
                        ref={refFileInput}
                        onChange={handleChange}
                        dir="ltr"
                        hidden
                        className="form-control form-control-sm text-secondary bg-transparent btn"
                        id="customVideoSelect"
                        type="file"
                    />
                    <button
                        className="button btn-file-in"
                        onClick={openFileDialog}
                    >
                        <span className="button-text">انتخاب ویدیو دلخواه</span>
                        <span class="btn-video-icon fa fa-video-camera"></span>
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default VideoPlayer;
