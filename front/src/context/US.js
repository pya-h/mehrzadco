import avatarJavadMehrzad from '../assets/img/about/javad_mehrzad.jpg';
import avatarFaridMehrzad from '../assets/img/about/farid_mehrzad.jpg';
import avatarFatemehfeizollahi from '../assets/img/about/fatemeh_feizollahi.jpg';
import avatarNaserJafari from '../assets/img/about/naser_jafari.jpg';
import avatarMojtabaHashtrodi from '../assets/img/about/mojtaba_hashtrodi.jpg';
import avatarAnounymous from '../assets/img/about/avatar_anonymous.png';

const AboutData = {
    staff: [
        {
            fullname: "جواد مهرزاد",
            avatar: avatarJavadMehrzad,
            major: "مهندس عمران",
            profession: "کارشناس ارشد سازه"
        },
        {
            fullname: "فرید مهرزاد",
            avatar: avatarFaridMehrzad,
            // { /*label: "ایمیل",*/
            //  value: "farid.mehrzad.68@gmail.com" },
            major: "مهندس عمران",
            profession: "کارشناس ارشد مهندسی و مدیریت ساخت"
        },
        {
            fullname: "پدرام مکان پرست",
            avatar: avatarAnounymous,
            major: "مهندس برق-کنترل",
            profession: "برنامه نویس و طراح سایت"
        },
        {
            fullname: "مهندس مجبتی هشترودی",
            avatar: avatarMojtabaHashtrodi,
            profession: "کارشناس ارشد سازه",
            major: "مهندس عمران"
        },
        {
            fullname: "مهندس فاطمه فیض اللهی",
            avatar: avatarFatemehfeizollahi,
            // { /*label: "ایمیل",*/
            //  value: "fatemeh.feizollahi3167@gmail.com" },
            major: "مهندس معمار"
        },
        {
            fullname: "ناصر جعفری",
            avatar: avatarNaserJafari,
            major: "مهندس مکانیک",
            profession: "کارشناسی ارشد تبدیل انرژی"
        },
    ],
};

const BriefIntro = {
    title: ["Mehrzad", "Construction"],
    descriptions: [`گروه مهندسی و ساخت مهرزاد، مجموعه ای از مجرب ترین و خلاق ترین متخصصین رشته های گوناگون مهندسی می باشند
     که گرد هم آمده اند تا با بهره گیری از تکنیک های خلاقانه ی معماری و دانش و فناوری روز دنیا، اقدام به ساخت سازه های خاص و ماندگار عمرانی کنند. `,
    `هدف این گروه این است که با کنار زدن طرحواره ها و سلیقه های قدیمی، بیش از پیش، زیبایی، خلاقیت و نوآوری را وارد عرصه ساختمان سازی کنند.`]

}
const Socials = [
    {
        iconName: "fa fa-instagram",
        link: "https://www.instagram.com/mehrzadco",
    },
    {
        iconName: "fa fa-youtube",
        link: "https://www.youtube.com/@MehrzadCo",
    },
    { iconName: "fa fa-whatsapp", link: "https://wa.me/989112858020" },
    { iconName: "fa fa-telegram", link: "https://telegram.me/Javad_Mehrzad" },
    { iconName: "fa fa-github", link: "https://github.com/pya-h" },

];

const ContactData = [
    {
        label: "آدرس",
        value: "گیلان، تالش، خیابان طالقانی، جنب اداره ی آبیاری",
        icon: <i className="fa fa-map position-absolute"></i>,
    },
    {
        label: "ایمیل",
        value: "mehrzad.co@yahoo.com",
        href: "mailto:mehrzad.co@yahoo.com",
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
                className="whyus-icon fa fa-line-chart mt-2"
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
                    "گروه مهندسی و ساخت مهرزاد، همگام با دانش روز دنیا و به کار گیری گروه متخصصین، سازه‌هایی اصولی خلق می‌کند",
            },
        ],
        icon: (
            <i
                className="whyus-icon fa fa-book mt-2"
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
                    "جلوه‌های بصری و هنر بکار گرفته شده در سازه‌های اجرایی، چشمان هر بیننده‌ای را مسحور خود می‌کند و ما این توانایی را داریم که مرزهای زیبایی را جابجا کنیم.",
            },
        ],
        icon: (
            <i
                className="whyus-icon fa fa-american-sign-language-interpreting mt-2"
                aria-hidden="true"
            ></i>
        ),
        positon: "left",
    },
];
const US = { ContactData, AboutData, Socials, whyus, BriefIntro };

export default US;
