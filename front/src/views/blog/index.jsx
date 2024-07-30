import CoolTitle from "../gadgets/CoolTitle";
import Blog from "./Blog";

const BlogsSection = () => (
    <div className="container" data-aos="fade-up" data-aos-duration="1200">
        <CoolTitle front="بلاگ" behind="Blog" />
        <div className="row pb-50">
            <Blog />
        </div>
    </div>
);

export default BlogsSection;
