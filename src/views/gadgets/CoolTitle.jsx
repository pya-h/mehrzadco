const CoolTitle = ({ front, behind }) => (
    <center>
        <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="title-section text-left text-sm-center">
            <h1>
                {front?.split(" ").map((x, i) => (!i ? x : <span> {x}</span>))}
            </h1>
            <span className="title-bg">{behind}</span>
        </div>
        <hr className="separator" />
    </center>
);

export default CoolTitle;
