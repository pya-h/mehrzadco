import iconSupevision from '../assets/img/about/civil.png';
import iconArchitects from '../assets/img/about/architect.png';
import iconPeymankari from '../assets/img/about/peymankari.png';

// import AboutVideo from '../assets/vids/about.mp4'

const fieldExpertise = [
    {
        id: 1,
        title: 'مهندسی عمران',
        details: [
            { text: "انجام محاسبات سازه های بتنی، فلزی و صنعتی" },
            { text: "ارائه نقشه های فاز یک و دو (جزئیات و بزرگنمایی)" },
            { text: "سبک سازی، مقاوم سازی و انجام اصلاحات نقشه های سازه" },
            { text: "تهیه و ارائه دفترچه محاسبات" },

        ],
        icon: <img
            src={iconSupevision}
            width="32"
            height="32"
            className="p-1"
            alt="!"
        />,
        positon: 'left',
        style: 'normal'
    },
    {
        id: 2,
        title: 'مهندسی معماری',
        details: [
            { text: "طراحی پلان معماری برای کاربری های ویلا، آپارتمان مسکونی اداری و تجاری" },
            { text: "ارائه نقشه های فاز یک و دو (جزئیات و بزرگنمایی)" },
            { text: "انجام اصلاحات، بهینه سازی و تغییر کاربری طراحی نقشه آپارتمان" },
            { text: "تهیه نقشه های AS-BUILT برای ساختمان های قدیمی و فاقد نقشه" },

        ],
        icon: <img
            src={iconArchitects}
            width="32"
            height="32"
            className="p-1"
            alt="!"
        />,
        positon: 'right',
        style: 'normal'
    },
    {
        id: 3,
        title: 'مهندسی برق',
        details: [
            { text: "طراحی نقشه های برق برای کاربری های مختلف" },
            { text: "طراحی سیستم های هوشمند و کنترل از راه دور ساختمان" },
            { text: "طراحی و اجرای سیستم های نورپردازی برای نما، محوطه و طراحی داخلی" },

        ],
        icon: <i class="fa fa-bolt text-dark mt-2" style={{ fontSize: "25px" }} aria-hidden="true"></i>,
        positon: 'left'
    },
    {
        id: 4,
        title: 'مهندسی مکانیک',
        details: [
            { text: "طراحی و اجرای انواع سیستم های تهویه مطبوع" },
            { text: "بهینه سازی و هوشمند سازی ساختمان جهت جلوگیری از اتلاف انرژی" },

        ],
        positon: 'right',
        icon: <i class="fa fa-cog text-dark mt-2" aria-hidden="true" style={{ fontSize: "25px" }} ></i>
    },
];

const generalServices = [
    {
        id: 1,
        title: 'طراحی و معماری',
        details: [
            {
                text: `این بخش از تخصص ما شامل طراحی و معماری ساختمان های ویلایی و همچنین کاربری های دیگر مانند :
             آپارتمانی مسکونی، ساختمان های اداری ، ساختمان های فرهنگی و تجاری میباشد. خدمات ما در رابطه با طراحی و معماری در دفتر معماری ایماژ شامل :
             تحلیل سایت، طراحی و معماری حجمی با توجه به شرایط پروژه ، طراحی و معماری پلان ها
              و ارتباطات فضایی، طراحی چیدمان و تقسیمات فضایی ، طراحی نما و نور پردازی و طراحی فضای سبز میباشد.` },

        ],
        icon: <img
            src={iconArchitects}
            width="32"
            height="32"
            className="p-1"
            alt="!"
        />,
        positon: 'left',
        style: 'normal'
    },
    {
        id: 2,
        title: 'نظارت و اجرا',
        details: [
            {
                text: `هر طراحی و معماری برای آنکه با تمام ظرافت به اجرا در بیاید نیازمند نظارت و کنترل اجرا توسط معماران و طراحان آن پروژه میباشد
             که این امر در دفتر معماری ایماژ در قالب خدماتی مانند نظارت های جلسه ای طراح، حضور ناظران مقیم در پروژه از طرف دفتر معماری و نیز تولید نقشه های دو بعدی و سه بعدی اظافی با توجه به نیاز کارگاه در هر مرحله محقق میشود. ما در طول نظارت ،شرایط پیشرفت و توسعه هر پروژه را به صورت هفتگی
             و ماهانه در اختیار کارفرما قرار میدهیم تا بتوانیم در تمامی مراحل پله به پله خیال شما را آسوده نگه داریم.
             در واقع شما طراحی و معماری خود را با نظارت دفتر معماری ایماژ در مسیر یک اجرای ظریف و دقیق تضمین میکنید.` },

        ],
        icon: <img
            src={iconSupevision}
            width="32"
            height="32"
            className="p-1"
            alt="!"
        />,
        positon: 'right',
        style: 'normal'
    },
    {
        id: 3,
        title: 'پیمانکاری و ساخت',
        details: [
            {
                text: `ما در دفتر معماری ایماژ با تشکیل شبکه گسترده ای از حرفه ای ترین پیمانکاران ایران خدمات گسترده ای را در زمینه اجرای طراحی 
            و معماری های مختلف ارائه میدهیم که این خدمات شامل اجرای صفر تا صد پروژه های ساختمانی و
             اجرای پروژه های بازسازی و داخلی  و نیز تهیه مدارک اجرایی مورد نیاز در مراحل مختلف هر پروژه میباشد.` },
        ],
        icon: <img
            src={iconPeymankari}
            width="32"
            height="32"
            className="p-1"
            alt="!"
        />,
        positon: 'left'
    },
    {
        id: 4,
        title: 'مشارکت در ساخت',
        details: [
            { text: `در ساخت مشارکت میکنیم` },
        ],
        positon: 'right',
        icon: <i class="fa fa-handshake-o text-dark" style={{ fontSize: "25px" }} aria-hidden="true"></i>
    },
];


const ServicesData = { fieldExpertise, generalServices, videos: [] };

export default ServicesData;