import React, { useState } from "react";

const DataList = ({
    children,
    textSize = "large",
    icon = { inline: false, theme: "transparent" },
    listIndicator,
}) => {
    const [textScale] = useState((textSize || "large").toLowerCase() === "large" ? 100 : 80);

    return (
        <ul style={{ fontSize: `${textScale}%` }} dir="rtl">
            {children?.map((item, i) => (
                <li style={{ textAlign: "right", listStyle: "none" }} key={i}>
                    {!icon?.inline && <div className={`icon bg-${icon.theme || "light"}`}>{item.icon}</div>}
                    <div className="container">
                        <div className="row">
                            <h3
                                style={{ fontSize: `${textScale + 25}%` }}
                                className="text-uppercase text-warning"
                            >
                                <b>{item.title}</b>
                            </h3>
                        </div>
                        <div className="row">
                            {icon.inline && (
                                <div className="col-2">
                                    <div className={`mx-4 icon bg-${icon.theme || "transparent"}`}>{item.icon}</div>
                                </div>
                            )}
                            <div className="col">
                                {item.details instanceof Array &&
                                    item.details.map((x) => (
                                        <p> &nbsp;&nbsp;&nbsp;&nbsp; {listIndicator} {x.text}</p>
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
