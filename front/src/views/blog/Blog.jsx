import React from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import GetContext from "../../context/GetContext";
import blogQuote from "../../assets/img/blog/quote.svg";
import CoolTitle from "../gadgets/CoolTitle";

Modal.setAppElement("#root");

const Blog = () => {
    const { blog, isOpen, setIsOpen, blogsData, openBlog } = GetContext();
    const handleModle = (id) => {
        openBlog(id);
    };
    return (
        <div className="container">
            <div className="row">
                {blogsData.map((item) => (
                    <div 
                    key={item.id}
                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
                    >
                        <article
                            className="post-container"
                            onClick={() => handleModle(item?.id)}
                        >
                            <div className="post-thumb">
                                <div className="d-block position-relative overflow-hidden">
                                    <img
                                        src={item?.img}
                                        className="img-fluid"
                                        alt="item.title"
                                        width="100%"
                                        style={{maxHeight: "14rem"}}
                                    />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="entry-header">
                                    <h3>{item?.title}</h3>
                                </div>
                                <div className="entry-content open-sans-font">
                                    {item?.descriptions instanceof Array && (
                                        <p>
                                            {item?.descriptions[0].slice(
                                                0,
                                                120
                                            )}...
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>

                        <Modal
                            isOpen={isOpen}
                            onRequestClose={() => setIsOpen(false)}
                            contentLabel="My dialog"
                            className="custom-modal dark"
                            overlayClassName="custom-overlay dark"
                            closeTimeoutMS={500}
                        >
                            <div>
                                <button
                                    className="close-modal"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <img src={cancelImg} alt="close icon" />
                                </button>

                                <div className="box_inner blog-post">
                                    <article >
                                        <CoolTitle front={blog?.title} behind="پست ها" />
                                        <div className="meta open-sans-font">
                                            <span className="date">
                                                <i className="fa fa-calendar"></i>
                                                &nbsp;{blog.date}
                                            </span>
                                            <span>
                                                <i className="fa fa-tags"></i>
                                                &nbsp;{blog.tag}
                                            </span>
                                        </div>

                                        <div className="mx-auto text-center my-5">
                                            <img
                                                src={blog?.img}
                                                className="img-fluid mx-auto"
                                                alt="Blog"
                                            />
                                        </div>
                                        {/* <div className="quotebox">
                                            <div className="icon">
                                                <img
                                                    src={blogQuote}
                                                    alt="blogs quote"
                                                />
                                            </div>
                                            <p>
                                                {blogs?.description2}
                                            </p>
                                        </div> */}
                                        <div className="blog-excerpt pb-5">
                                            {blog.descriptions instanceof
                                                Array &&
                                                blog.descriptions.map((d) => (
                                                    <p>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        {d}
                                                    </p>
                                                ))}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
