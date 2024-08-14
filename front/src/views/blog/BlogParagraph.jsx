import { useEffect, useState } from "react";

function cssStringToReactStyleObject(cssString) {
    const cssObject = {};
    const cssProperties = cssString
        .replace(/[{}\n\r]/g, "")
        .trim()
        .split(";");
    cssProperties.forEach((property) => {
        let [key, value] = property.split(":");
        if (key && value) {
            key = key.trim();
            value = value.trim();
            const camelCaseKey = key.replace(/-([a-z])/g, (match, letter) =>
                letter.toUpperCase()
            );
            cssObject[camelCaseKey] = value;
        }
    });

    return cssObject;
}

const BlogParagraph = ({ children: paragraph }) => {
    const [bodyStyles, setBodyStyles] = useState({});
    const [extraCssStyles, setExtraCssStyles] = useState(null);

    useEffect(() => {
        let styles = {};
        if (paragraph.extraCssStyles?.length) {
            try {
                const styleObject = cssStringToReactStyleObject(
                    paragraph.extraCssStyles
                );
                setExtraCssStyles(
                    Object.keys(styleObject)?.length ? styleObject : null
                );
            } catch (ex) {}
        }

        styles.fontWeight = Boolean(paragraph.isBold) ? "bold" : "normal";

        if (Boolean(paragraph.isUnderlined))
            styles.textDecoration = "underline";

        if (paragraph.fontSize && !isNaN(+paragraph.fontSize))
            styles.fontSize = `${paragraph.fontSize}px`;

        if (paragraph.font?.length) styles.fontFamily = paragraph.font;

        if (paragraph.color?.length) styles.color = paragraph.color;

        if (Object.values(styles).length) setBodyStyles(styles);
    }, [paragraph]);

    return (
        <div style={extraCssStyles ? { ...extraCssStyles } : {}}>
            {paragraph.header?.length && (
                <>
                    <br />
                    <h3
                        style={
                            paragraph.headerColor?.length
                                ? { color: paragraph.headerColor }
                                : {}
                        }
                    >
                        {paragraph.header}
                    </h3>
                    <br />
                </>
            )}

            <p style={bodyStyles ? { ...bodyStyles } : {}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {paragraph.body}
            </p>

            {paragraph.image && (
                <img
                    src={paragraph.image}
                    className="img-fluid"
                    alt={paragraph.header}
                    width="100%"
                    style={{ maxHeight: "14rem" }}
                />
            )}
        </div>
    );
};

export default BlogParagraph;
