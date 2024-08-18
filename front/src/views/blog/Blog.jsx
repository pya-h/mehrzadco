import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import CoolTitle from "../gadgets/CoolTitle";
import ApiService from "../../services/api";
import { HttpStatusCode } from "axios";
import BlogParagraph from "./BlogParagraph";
import Toaster from "../gadgets/toast";
import { logException } from "../gadgets/logger";

Modal.setAppElement("#root");

const stringifyCategory = (categories) =>
    categories?.map((cat) => cat.title).join(", ");

const Blog = ({ children }) => {
    const [openedBlog, setOpenedBlog] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openBlog = (blogId) => {
        ApiService.get(`/api/blogs/${blogId}/`)
            .then((res) => {
                const { status, data } = res;
                if (+status === HttpStatusCode.Ok) {
                    setOpenedBlog(data);
                    setIsOpen(true);
                } else throw new Error("Get Failure");
            })
            .catch((ex) => {
                setOpenedBlog(null);
                setIsOpen(false);
                Toaster.error(
                    "متاسفانه دریافت محتوای این بلاگ با خطا مواجه شد. لطفا لحظاتی دیگر، پس از بررسی اتصال اینترنت خود، دوباره تلاش کنید ..."
                );
                logException(ex);
            });
    };

    const handleModle = (id) => {
        openBlog(id);
    };

    return (
        <div className="container">
            <div className="row">
                {children instanceof Array &&
                    children.map((blogItem) => (
                        <div
                            key={blogItem.id}
                            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
                        >
                            <article
                                className="post-container"
                                onClick={() => handleModle(blogItem?.id)}
                            >
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img
                                            src={blogItem?.image}
                                            className="img-fluid"
                                            alt={blogItem?.title}
                                            width="100%"
                                            style={{ maxHeight: "14rem" }}
                                        />
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>{blogItem?.title}</h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        {blogItem?.firstParagraph?.body && (
                                            <p>
                                                {blogItem.firstParagraph.body.slice(
                                                    0,
                                                    120
                                                )}
                                                ...
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
                                        <article>
                                            <CoolTitle
                                                front={openedBlog?.title}
                                                behind="پست ها"
                                            />
                                            <div className="meta open-sans-font">
                                                <span className="date">
                                                    <i className="fa fa-calendar"></i>
                                                    &nbsp;
                                                    {new Date(
                                                        openedBlog?.date
                                                    ).toDateString()}
                                                </span>
                                                <span>
                                                    <i className="fa fa-tags"></i>
                                                    &nbsp;
                                                    {stringifyCategory(
                                                        openedBlog?.categories
                                                    )}
                                                </span>
                                                <span>
                                                    <i className="fa fa-tags"></i>
                                                    &nbsp;{openedBlog?.author}
                                                </span>
                                            </div>

                                            <div className="mx-auto text-center my-5">
                                                <img
                                                    src={openedBlog?.image}
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
                                                {openedBlog?.paragraphs instanceof
                                                    Array &&
                                                    openedBlog.paragraphs.map(
                                                        (paragraph) => (
                                                            <BlogParagraph>
                                                                {paragraph}
                                                            </BlogParagraph>
                                                        )
                                                    )}
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
