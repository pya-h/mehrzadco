const AboutData = {
    staff: [
        [
            { label: "نام", value: "جواد مهرزاد" },
            { label: "شماره تماس", value: "09113384825" },
            { label: "ایمیل", value: "javad.m.navi@gmail.com" },
            { label: "سمت", value: "مهندس عمران" },

        ],
        [
            { label: "نام", value: "فرید مهرزاد" },
            { label: "شماره تماس", value: "09112858020" },
            { label: "ایمیل", value: "farid.mehrzad.68@gmail.com" },
            { label: "سمت", value: "مهندس عمران" },
        ],
        [
            { label: "نام", value: "پدرام مکان پرست" },
            { label: "شماره تماس", value: "09118839554" },
            { label: "ایمیل", value: "p4ya.py@gmail.com" },
            { label: "سمت", value: "برنامه نویس و طراح سایت" },
        ],
    ],
};

const ContactData = [
    {
        label: "آدرس",
        value: "گیلان، تالش، خیابان طالقانی، جنب اداره ی آبیاری",
        icon: <i className="fa fa-map position-absolute"></i>,
    },
    {
        label: "ایمیل",
        value: "mehrzad.construction.co@mail.com",
        href: "mailto:mehrzad.construction.co@gmail.com",
        icon: <i className="fa fa-envelope-open position-absolute"></i>,
    },
    {
        label: "دفتر مرکزی",
        value: "0134 423 6833",
        href: "Tel: +98 134 4236 833",
        icon: <i className="fa fa-phone-square position-absolute"></i>,
    },
    {
        label: "دفتر فروش",
        value: "0912 004 8520",
        href: "Tel: +98 912 004 8520",
        icon: <i className="fa fa-mobile px-2 position-absolute"></i>,
    },
    {
        label: "روابط عمومی",
        value: "0911 285 8020",
        href: "Tel: +98 911 285 8020",
        icon: <i className="fa fa-volume-control-phone position-absolute"></i>,
    },
];

const whyus = [
    {
        id: 1,
        title: "بی حد و مرز",
        details: [
            {
                text:
                    "در سازه‌های مهندسی ما، هیچ حد و مرزی برای متریال به کار رفته و استحکام بنا، وجود ندارد.",
            },
        ],
        icon: (
            <i
                class="fa fa-bolt text-light mt-2"
                style={{ fontSize: "25px" }}
                aria-hidden="true"
            ></i>
        ),

        positon: "left",
        style: "normal",
    },
    {
        id: 2,
        title: "دانش روز دنیا",
        details: [
            {
                text:
                    "پارسا سازه صدر، همگام با دانش روز دنیا و به کار گیری گروه متخصصین، سازه‌هایی اصولی خلق می‌کند",
            },
        ],
        icon: (
            <i
                class="fa fa-bolt text-light mt-2"
                style={{ fontSize: "25px" }}
                aria-hidden="true"
            ></i>
        ),

        positon: "right",
        style: "normal",
    },
    {
        id: 3,
        title: "تلفیق هنر و معماری",
        details: [
            {
                text:
                    "جلوه‌های بصری و هنر بکار گرفته شده در سازه‌های اجرایی، چشمان هر بیننده‌ای را مسحور خود می‌کند",
            },
            {
                text:
                    "جلوه‌های بصری و هنر بکار گرفته شده در سازه‌های اجرایی، چشمان هر بیننده‌ای را مسحور خود می‌کند و ما این توانایی را داریم که مرزهای زیبایی را جابجا کنیم.",
            },
        ],
        icon: (
            <i
                class="fa fa-bolt text-light mt-2"
                style={{ fontSize: "25px" }}
                aria-hidden="true"
            ></i>
        ),
        positon: "left",
    },
];
const US = { ContactData, AboutData, whyus };

export default US;
