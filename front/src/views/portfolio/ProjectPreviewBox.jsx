
const ProjectPreviewBox = ({children, select}) =>

    <div
        key={children.id}
        data-aos="fade-right"
        data-aos-delay={children.delayAnimation}
    >
        <div
            className="tab-content"
            onClick={() => select(children)}
        >
            <img src={children?.image} alt="مشکل در بار گذاری تصویر" />
            <h3>
                <span className="content-title">{children?.name}</span>
            </h3>
        </div>
    </div>;

export default ProjectPreviewBox;