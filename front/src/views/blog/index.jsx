import { useEffect, useState } from "react";
import CoolTitle from "../gadgets/CoolTitle";
import Blog from "./Blog";
import ApiService from "../../services/api";
import { HttpStatusCode } from "axios";

const BlogsSection = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
            ApiService.get(
                "/api/blogs/"
            ).then(responseData => {
                const { data, status } = responseData;
                if (+status === HttpStatusCode.Ok) setBlogs(data);
            }).catch(ex => {
                console.log(ex);
                // TODO: Toast it 
            })
    }, [])
    
    return <div className="container" data-aos="fade-up" data-aos-duration="1200">
        <CoolTitle front="بلاگ" behind="Blog" />
        <div className="row pb-50">
            <Blog>{blogs}</Blog>
        </div>
    </div>
}

export default BlogsSection;
