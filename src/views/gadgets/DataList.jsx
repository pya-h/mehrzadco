import React, { useState } from "react";

const DataList = ({
    children,
    textSize = "large",
    icon = { inline: false, theme: "transparent", drawColor: "dark" },
    listIndicator,
    lineBreaks = false,
    indenting = false,
}) => {
    const [textScale] = useState(
        (textSize || "large").toLowerCase() === "large" ? 100 : 80
    );

    return (
        <ul style={{ fontSize: `${textScale}%` }} dir="rtl">
            {children?.map((item, i) => (
                <li style={{ textAlign: "right", listStyle: "none" }} key={i}>
                    {!icon?.inline && (
                        <div className={`icon bg-${icon.theme || "light"} text-${icon.drawColor || "light"}`}>
                            {item.icon}
                        </div>
                    )}
                    <div className="container">
                        <div className="row">
                            {icon.inline && (
                                <div className="col-2 col-md-3 mx-lg-3 mx-md-4 mx-sm-5 mx-5">
                                    <div
                                        className={`mx-4 icon bg-${
                                            icon.theme || "transparent  mx-auto"
                                        } text-${icon.drawColor || "light"}`}
                                    >
                                        {item.icon}
                                    </div>
                                </div>
                            )}
                            <div className="col">
                                <h3
                                    style={{ fontSize: `${textScale + 25}%` }}
                                    className="text-uppercase text-warning"
                                >
                                    <b>{item.title}</b>
                                </h3>
                                {item.details instanceof Array &&
                                    item.details.map((x) => (
                                        <>
                                            <p>
                                                {indenting ? (
                                                    <span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                                {listIndicator} {x.text}
                                            </p>
                                            {Boolean(x.extra) && x.extra}
                                            {lineBreaks && <hr />}
                                        </>
                                    ))}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
export default DataList;
