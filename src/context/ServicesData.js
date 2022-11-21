import iconSupevision from '../assets/img/about/civil.png';
import iconArchitects from '../assets/img/about/architect.png';
import iconPeymankari from '../assets/img/about/peymankari.png';

// import AboutVideo from '../assets/vids/about.mp4';

import iconBazdidProzheh from '../assets/img/services/bazdid-prozheh.png';
import iconBarrasiNiaz from '../assets/img/services/barrasi-niaz.png';
import iconTarrahivaEraeAvvalieh from '../assets/img/services/tarrahi_avvalieh.png';
import iconAghdehGharadad from '../assets/img/services/aghdeh-gharardad.png';
import iconTose_eTakamol from '../assets/img/services/tose-takamol.png';
import iconEraeNaghshehEjarei from '../assets/img/services/erae-naghshe.png';
import iconNezaratEjra from '../assets/img/services/nezarat-ejra.png';

const fieldExpertise = [
    {
        id: 1,
        title: 'مهندسی عمران',
        details: [
            { text: "مدیریت پروژه و ساخت" },
            { text: "انجام محاسبات سازه های بتنی، فولادی و صنعتی" },
            { text: "ارائه نقشه های فاز یک و دو (جزئیات و بزرگنمایی)" },
            { text: "سبک سازی، مقاوم سازی و انجام اصلاحات نقشه های سازه" },

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
            { text: "طراحی نقشه های تاسیسات برقی برای کاربری های مختلف" },
            { text: "طراحی سیستم های هوشمند و کنترل از راه دور ساختمان" },
            { text: "طراحی و اجرای سیستم های نورپردازی برای نما، محوطه و طراحی داخلی" },
            { text: "برنامه نویسی PLC و اتوماسیون صنعتی " },

        ],
        icon: <i class="fa fa-bolt text-dark mt-2" style={{ fontSize: "25px" }} aria-hidden="true"></i>,
        positon: 'left'
    },
    {
        id: 4,
        title: 'مهندسی مکانیک',
        details: [
            { text: "طراحی نقشه های تاسیسات مکانیکی برای کاربری های مختلف" },
            { text: "طراحی و اجرای انواع سیستم های تهویه مطبوع" },
            { text: "بهینه سازی و هوشمند سازی ساختمان جهت جلوگیری از اتلاف انرژی" },

        ],
        positon: 'right',
        icon: <i class="fa fa-cog text-dark mt-2" aria-hidden="true" style={{ fontSize: "25px" }} ></i>
    },
    {
        id: 5,
        title: 'مهندسی کامپیوتر',
        details: [
            { text: "طراحی انواع وب سایت ها با به روزترین ابزارها و تکنیک ها" },
            { text: "طراحی اپلیکیشن و بازی برای انواع پلتفرم ها و دیوایس ها" },
            { text: "برنامه نویسی میکروکنترلرهای آردوئینو، ARM و AVR" },
            { text: "طراحی نرم افزارهای مهندسی و محاسباتی شخصی سازی شده برای حوزه های خاص مهندسی" },
            {
                text: "برنامه نویسی به اغلب زبان ها و فریمورک های مطرح روز دنیا:",
                extra: <p dir="ltr" className='mx-5' style={{ textAlign: "right" }}>C/C++, Assembly , Node.js , React.js , Rust , Go <br />  Python , PHP , C# , ASP.NET , Java , JavaScript <br /> HTML/CSS , Visual Basic (.NET) , Fortran</p>
            },

        ],
        positon: 'right',
        icon: <i class="fa fa-laptop text-dark mt-2" aria-hidden="true" style={{ fontSize: "25px" }} ></i>
    },
];

const generalServices = [
    {
        id: 1,
        title: 'طراحی و معماری',
        details: [
            `این بخش از تخصص ما شامل طراحی و معماری ساختمان های ویلایی و همچنین کاربری های دیگر مانند :
             آپارتمانی مسکونی، ساختمان های اداری ، ساختمان های فرهنگی و تجاری میباشد.`,
            `خدمات ما در رابطه با طراحی و معماری شامل :
             تحلیل سایت، طراحی و معماری حجمی با توجه به شرایط پروژه ، طراحی و معماری پلان ها
              و ارتباطات فضایی، طراحی چیدمان و تقسیمات فضایی ، طراحی نما و نور پردازی و طراحی فضای سبز میباشد.`,

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
            `هر طراحی و معماری برای آنکه با تمام ظرافت به اجرا در بیاید نیازمند نظارت و کنترل اجرا توسط معماران و طراحان آن پروژه میباشد
             که این امر در قالب خدماتی مانند نظارت های جلسه ای طراح، حضور ناظران مقیم در پروژه از طرف دفتر مهندسی و نیز تولید نقشه های دو بعدی و سه بعدی اضافی با توجه به نیاز کارگاه در هر مرحله محقق میشود. ما در طول نظارت ،شرایط پیشرفت و توسعه هر پروژه را به صورت هفتگی
             و ماهانه در اختیار کارفرما قرار میدهیم تا بتوانیم در تمامی مراحل پله به پله خیال شما را آسوده نگه داریم.
             در واقع شما طراحی و معماری خود را با نظارت گروه مهندسی و ساخت مهرزاد در مسیر یک اجرای ظریف و دقیق تضمین میکنید.`,

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
            `ما در گروه مهندسی و ساخت مهرزاد با تشکیل شبکه گسترده ای از حرفه ای ترین پیمانکاران خدمات گسترده ای را در زمینه اجرای طراحی
            و معماری های مختلف ارائه میدهیم که این خدمات شامل اجرای صفر تا صد پروژه های ساختمانی و
             اجرای پروژه های بازسازی و داخلی  و نیز تهیه مدارک اجرایی مورد نیاز در مراحل مختلف هر پروژه میباشد.`,
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
            "تبدیل ملک کلنگی شما به سازه ای خاص و مارک دار تخصص ماست.",
            "با استفاده از نیروهای مجرب و متخصص پروژه های شما را ار مرحله تخریب تا تحویل کلید با بهترین کیفیت مدیریت و اجرا می نماییم."
        ],
        positon: 'right',
        icon: <i class="fa fa-handshake-o text-dark" style={{ fontSize: "25px" }} aria-hidden="true"></i>
    },
];

const implementationProcess = [{
        title: "بازدید پروژه و مشاوره",
        icon: <img
            src={iconBazdidProzheh}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `ما قبل از هر کاری به بازدید تخصصی هر پروژه میپردازیم تا با انجام دادن بررسی های گوناگون و امکان سنجی پروژه بتوانیم
        به خوبی و با دقت بالا به شما در رابطه با هزینه و نکات مثبت و منفی طراحی و معماری آن پروژه مشاوره لازم را بدهیم.`
    },
    {
        title: "بررسی نیازهای موجود",
        icon: <img
            src={iconBarrasiNiaz}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `پس از تایید اولیه کارفرما تیم فاز صفر ما در دفتر گروه مهندسی مهرزاد جهت بررسی نیاز ها و سلیقه کارفرما  و همچنین وضع موجود ، محل قرار گیری پروژه، تحلیل سایت ،
         تحلیل دسترسی و ارتباطات ، تحلیل اقلیمی  و تاریخی پروژه کار را دست میگیرد تا با تحلیل تمامی موارد اطلاعات  و خوراک مناسب را در قالب یک دفترچه برای تیم طراحی و معماری آماده کند.`
    },
    {
        title: "طراحی و ارائه اولیه",
        icon: <img
            src={iconTarrahivaEraeAvvalieh}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `تیم طراحی و معماری با در دست داشتن دفترچه فاز صفر آماده است تا طراحی را مطابق با نیاز های پروژه و نیاز های کارفرما در قالب چند آلترناتیو شروع کند
         و پس از حل شدن روابط فضایی و ترکیب حجمی پروژه طرح را به تیم پرزانته دفتر گروه مهندسی مهرزاد بسپارد  تا متخصصین
          ما در این بخش طرح ها را به صورت سه بعدی و انیمیشن برای ارایه آماده کنند.`
    },{
        title: "عقد قرارداد",
        icon: <img
            src={iconAghdehGharadad}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `این حق شما است که بدانید هزینه طراحی معماری، اجرا و نظارت پروژه تان با توجه به طراحی چه میزان است و شرایط آسان پرداخت آن به چه گونه میباشد.
        پس از تایید کلی طرح توسط کارفرما جهت پیش برد و توسعه طراحی زمان آن میرسد که ما این اطلاعات را در قالب یک قرارداد دو طرفه به اطلاع شما برسانیم
         و با این کار تعهد خود به هزینه و زمان را بیش از هر زمان تایید کنیم.`
    },{
        title: "توسعه و تکامل طرح",
        icon: <img
            src={iconTose_eTakamol}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `طبیعی است که هر پروژه برای آنکه به کمال خود برسد نیاز به بازنگری و توسعه دارد که این فرآیند در چند رفت و برگشت میان طراحان ما در دفتر گروه مهندسی مهرزاد و کارفرما انجام میشود.
         در این بخش ضمن توسعه و تکامل طرح ، طراحی و معماری تمامی جزییات و ریز فضا ها نیز کامل شده و به اتمام میرسد تا آنکه طرح ها برای اجرای هر چه بهتر و سریعتر به دست متخصصین فاز دو دفتر برسد.`
    },{
        title: "ارائه نقشه‌های اجرایی",
        icon: <img
            src={iconEraeNaghshehEjarei}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `پس از تکمیل و ارائه کامل طراحی و معماری زمان تولید نقشه های فنی و اجرایی توسط تیم فاز دو دفتر گروه مهندسی مهرزاد فرا میرسد . در این مرحله تیم فاز دو تمامی نقشه های اجرایی
         و جزییات اجرایی ساختمان را برای اجرای هر چه بهتر با هزینه کمتر در قالب یک دفترچه به بخش اجرایی تحویل میدهد . اما کار بخش فنی و فاز دو دفتر تا زمان اتمام پروژه همگام و همراه با
          تیم اجرایی ادامه میابد تا بتواند در روند ساخت پاسخگوی تغیرات و مشکلات اجرایی باشد.`
    },{
        title: "نظارت و اجرا",
        icon: <img
            src={iconNezaratEjra}
            width="64"
            height="64"
            className="p-1 text-white"
            alt="!"
        />,
        topic: `یک پروژه زمانی پایدار میشود که بتواند تمام حس ها و ظرافت های فضایی که در زمان طراحی و معماری بوجود آمده اند را به واقعییت پیوند بزند
         و به مرحله اجرا برساند که طبیعتا هیچ کس به اندازه معمار و طراح آن پروژه بر روی این ظرافت ها مسلط نیست. در این مرحله ناظرین و مجریان معتمد دفتر گروه مهندسی مهرزاد
          در کارگاه پلی میان طراح و مجری را برقرار میسازند تا تمام جزییات به آن گونه که طراحی و ارائه شده اند ساخته شوند.`
    },

];

const ServicesData = { fieldExpertise, generalServices, implementationProcess, videos: [] };

export default ServicesData;
