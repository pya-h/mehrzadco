
const ProjectList = ({children, select, index}) =>

    <div
        key={children.id}
        data-aos="fade-right"
        data-aos-delay={children.delayAnimation}
    >
        <div
            className="tab-content"
            onClick={() => select(children.id, index)}
        >
            <img src={children.image[index]} alt="مشکل در بار گذاری تصویر" />
            <h3>
                <span className="content-title">{children.title?.fa}</span>
            </h3>
        </div>
    </div>;

export default ProjectList;