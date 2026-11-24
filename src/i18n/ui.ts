export const LOCALES = ['tr', 'en', 'ru', 'ar', 'fa'] as const;
export type Locale = (typeof LOCALES)[number];

export const RTL_LOCALES: Locale[] = ['ar', 'fa'];

export const LOCALE_META: Record<Locale, { hrefLang: string; description: string }> = {
  tr: {
    hrefLang: 'tr',
    description:
      'Arres Mühendislik Makine: Tuft halı makineleri, kapitone makineleri, özel makine imalatı, robotik otomasyon, talaşlı imalat ve revizyon çözümleri. İstanbul Halı İhracatçıları Birliği üyesi.',
  },
  en: {
    hrefLang: 'en',
    description:
      'Arres Engineering Machinery: Tufting carpet machines, quilting machines, custom industrial machinery, robotic automation, CNC machining, and overhaul solutions in Istanbul.',
  },
  ru: {
    hrefLang: 'ru',
    description:
      'Arres Mühendislik Makine: тафтинговые и стегальные машины, специальное машиностроение, роботизация, механообработка и модернизация оборудования.',
  },
  ar: {
    hrefLang: 'ar',
    description:
      'Arres Mühendislik Makine: ماكينات السجاد التافتنج وماكينات اللحف وتصنيع الماكينات الخاصة والأتمتة والتشغيل الآلي في إسطنبول.',
  },
  fa: {
    hrefLang: 'fa',
    description:
      'Arres Mühendislik Makine: ماشین‌آلات فرش تافتینگ و لحاف‌دوزی، ساخت ماشین‌آلات ویژه، اتوماسیون و ماشین‌کاری صنعتی در استانبول.',
  },
};

export const UI_STRINGS: Record<Locale, {
  siteTitle: string;
  heroBadge: string;
  featuredSpotlight: string;
  heroSubtitle: string;
  groupLabel: string;
  ctaText: string;
  nav: { home: string; news: string; contact: string };
  groups: { id: string; title: string; items: string[] }[];
}> = {
  tr: {
    siteTitle: 'Arres Mühendislik Makine',
    heroBadge: 'İstanbul Halı İhracatçıları Birliği Üyesi • CFE 2027 Salon 2 Stand 205',
    featuredSpotlight: 'Tuft Halı Makineleri & Kapitone Sistemleri',
    heroSubtitle:
      'Halı ve tekstil makinelerinden özel endüstriyel makinelere, robotik otomasyondan CNC talaşlı imalat ve revizyona kadar anahtar teslim mühendislik çözümleri.',
    groupLabel: 'Çalışma Grubu',
    ctaText: 'Teklif / İletişim',
    nav: { home: 'Anasayfa', news: 'Haberler', contact: 'İletişim' },
    groups: [
      {
        id: 'carpet-textile',
        title: 'Halı, Tuft ve Tekstil Makineleri',
        items: [
          'Tuft Halı Makineleri',
          'Kapitone Makineleri',
          'Basınçlı Çorap Dikim Makineleri',
        ],
      },
      {
        id: 'special-machines',
        title: 'Özel Makine İmalatı',
        items: [
          'Plazma kesme, lazer kesme makineleri',
          'Boru Bükme Makineleri',
          'Lastik Kaplama Makineleri',
          'Transfer Tezgahları',
        ],
      },
      {
        id: 'automation-control',
        title: 'Robotik, Otomasyon ve Kontrol',
        items: [
          'Punta Kaynak Robotları',
          'Yükleme Kaynak Robotları',
          'Makine Otomasyonu',
          '3, 4, 5 Eksen Kontrol Sistemi ve Pano İmalatı',
        ],
      },
      {
        id: 'machining-revision',
        title: 'Talaşlı İmalat, Kalıp ve Revizyon',
        items: [
          'CNC ve üniversal Freze, CNC ve üniversal torna revizyon',
          'Plazma/Lazer kesim sonrası yan sanayi & Talaşlı İmalat',
          'CNC Dik İşlem Merkezi',
          'İmalat ve Sanayi Makine Parça Revizyon ve İmalatı',
          'Kaynak Fikstürü İmalatı',
          'Kalıp İmalatı',
        ],
      },
    ],
  },
  en: {
    siteTitle: 'Arres Engineering Machinery',
    heroBadge: 'Carpet Exporters Association Member • CFE 2027 Hall 2 Booth 205',
    featuredSpotlight: 'Tufting Carpet Machines & Quilting Systems',
    heroSubtitle:
      'Industrial engineering solutions spanning carpet and tufting machinery, custom machines, robotic automation, and precision CNC machining & overhaul.',
    groupLabel: 'Division',
    ctaText: 'Request Quote / Contact',
    nav: { home: 'Home', news: 'News', contact: 'Contact' },
    groups: [
      {
        id: 'carpet-textile',
        title: 'Carpet, Tuft & Textile Machinery',
        items: [
          'Tufting Carpet Machines',
          'Quilting Machines',
          'Compression Sock Sewing Machines',
        ],
      },
      {
        id: 'special-machines',
        title: 'Custom Industrial Machinery',
        items: [
          'Plasma & Laser Cutting Machines',
          'Pipe Bending Machines',
          'Rubber Coating Machines',
          'Transfer Machines',
        ],
      },
      {
        id: 'automation-control',
        title: 'Robotics, Automation & Control',
        items: [
          'Spot Welding Robots',
          'Loading Welding Robots',
          'Machine Automation',
          '3, 4, 5-Axis Control Systems & Panel Manufacturing',
        ],
      },
      {
        id: 'machining-revision',
        title: 'Machining, Tooling & Overhaul',
        items: [
          'CNC & Universal Milling / Lathe Overhaul',
          'Machining',
          'CNC Vertical Machining Center',
          'Industrial Machine Parts Overhaul & Manufacturing',
          'Welding Fixture Manufacturing',
          'Mold & Die Manufacturing',
        ],
      },
    ],
  },
  ru: {
    siteTitle: 'Arres Mühendislik Makine',
    heroBadge: 'CFE Carpet & Flooring Expo 2027 • Зал 2, Стенд 205',
    featuredSpotlight: 'Тафтинговые и стегальные машины',
    heroSubtitle:
      'Промышленные решения от коврового и текстильного оборудования до спецмашин, роботизации, ЧПУ-обработки и модернизации.',
    groupLabel: 'Направление',
    ctaText: 'Запрос / Контакты',
    nav: { home: 'Главная', news: 'Новости', contact: 'Контакты' },
    groups: [
      {
        id: 'carpet-textile',
        title: 'Оборудование для ковров и текстиля',
        items: [
          'Тафтинговые ковровые машины',
          'Стегальные машины',
          'Машины для пошива компрессионных носков',
        ],
      },
      {
        id: 'special-machines',
        title: 'Специальное машиностроение',
        items: [
          'Станки плазменной и лазерной резки',
          'Трубогибочные станки',
          'Машины для гуммирования (обрезинивания)',
          'Агрегатные (трансферные) станки',
        ],
      },
      {
        id: 'automation-control',
        title: 'Робототехника, автоматизация и управление',
        items: [
          'Роботы для точечной сварки',
          'Сварочные роботы с автоматической загрузкой',
          'Промышленная автоматизация машин',
          '3-, 4- и 5-осевые системы управления и производство шкафов',
        ],
      },
      {
        id: 'machining-revision',
        title: 'Механообработка, оснастка и модернизация',
        items: [
          'Капитальный ремонт и модернизация фрезерных и токарных станков (ЧПУ и универсальных)',
          'Субподрядная металлообработка после плазменной/лазерной резки и механообработка',
          'Вертикальные обрабатывающие центры с ЧПУ',
          'Изготовление и восстановление деталей промышленного оборудования',
          'Изготовление сварочных кондукторов и приспособлений',
          'Проектирование и изготовление пресс-форм и штампов',
        ],
      },
    ],
  },
  ar: {
    siteTitle: 'Arres Mühendislik Makine',
    heroBadge: 'معرض CFE 2027 • القاعة 2 - الجناح 205',
    featuredSpotlight: 'ماكينات السجاد التافتنج وماكينات اللحف',
    heroSubtitle:
      'حلول هندسية صناعية تشمل ماكينات السجاد والنسيج، الماكينات الخاصة، الأتمتة الروبوتية، والتشغيل الآلي وإعادة التأهيل.',
    groupLabel: 'القسم',
    ctaText: 'طلب عرض / تواصل',
    nav: { home: 'الرئيسية', news: 'الأخبار', contact: 'اتصل بنا' },
    groups: [
      {
        id: 'carpet-textile',
        title: 'ماكينات السجاد والتافتنج والنسيج',
        items: [
          'ماكينات السجاد التافتنج',
          'ماكينات اللحف (الكابيتونيه)',
          'ماكينات خياطة الجوارب الضاغطة',
        ],
      },
      {
        id: 'special-machines',
        title: 'تصنيع الماكينات الخاصة',
        items: [
          'ماكينات القطع بالبلازما والليزر',
          'ماكينات ثني الأنابيب',
          'ماكينات التغليف بالمطاط',
          'ماكينات النقل والتشغيل المتعدد (Transfer)',
        ],
      },
      {
        id: 'automation-control',
        title: 'الروبوتات والأتمتة وأنظمة التحكم',
        items: [
          'روبوتات اللحام النقطي',
          'روبوتات اللحام والتحميل الآلي',
          'أتمتة الماكينات الصناعية',
          'أنظمة التحكم ثلاثية ورباعية وخماسية المحاور وتصنيع اللوحات الكهربائية',
        ],
      },
      {
        id: 'machining-revision',
        title: 'التشغيل الآلي والقوالب وإعادة التأهيل',
        items: [
          'إعادة تأهيل وتحديث الفريزة والمخارط (CNC والتقليدية)',
          'الصناعات المغذية والتشغيل الآلي بعد القطع بالبلازما والليزر',
          'مراكز التشغيل العمودية CNC',
          'تصنيع وإعادة تأهيل قطع غيار الماكينات الصناعية',
          'تصنيع مثبتات اللحام (الفيكستشر)',
          'تصنيع القوالب الصناعية',
        ],
      },
    ],
  },
  fa: {
    siteTitle: 'Arres Mühendislik Makine',
    heroBadge: 'نمایشگاه CFE 2027 • سالن 2 - غرفه 205',
    featuredSpotlight: 'ماشین‌آلات فرش تافتینگ و لحاف‌دوزی',
    heroSubtitle:
      'راهکارهای مهندسی صنعتی از ماشین‌آلات فرش و نساجی تا ماشین‌سازی ویژه، اتوماسیون رباتیک و ماشین‌کاری و بازسازی دقیق.',
    groupLabel: 'بخش تخصصی',
    ctaText: 'درخواست پیش‌فاکتور / تماس',
    nav: { home: 'صفحه اصلی', news: 'اخبار', contact: 'تماس با ما' },
    groups: [
      {
        id: 'carpet-textile',
        title: 'ماشین‌آلات فرش، تافتینگ و نساجی',
        items: [
          'ماشین‌آلات فرش تافتینگ',
          'ماشین‌آلات لحاف‌دوزی (کاپیتونه)',
          'ماشین‌آلات دوخت جوراب‌های فشاری',
        ],
      },
      {
        id: 'special-machines',
        title: 'ساخت ماشین‌آلات صنعتی ویژه',
        items: [
          'دستگاه‌های برش پلاسما و برش لیزر',
          'ماشین‌آلات خم‌کن لوله',
          'ماشین‌آلات روکش لاستیک',
          'ماشین‌های ترانسفر صنعتی',
        ],
      },
      {
        id: 'automation-control',
        title: 'رباتیک، اتوماسیون و تابلوهای کنترل',
        items: [
          'ربات‌های جوش نقطه‌ای',
          'ربات‌های جوشکاری و بارگذاری',
          'اتوماسیون ماشین‌آلات صنعتی',
          'سیستم‌های کنترل ۳، ۴ و ۵ محور و ساخت تابلو برق',
        ],
      },
      {
        id: 'machining-revision',
        title: 'ماشین‌کاری، قالب‌سازی و بازسازی',
        items: [
          'بازسازی و اورهال فرز و تراش CNC و یونیورسال',
          'قطعات جانبی پس از برش پلاسما/لیزر و ماشین‌کاری',
          'مراکز ماشین‌کاری عمودی CNC',
          'ساخت و بازسازی قطعات ماشین‌آلات صنعتی',
          'ساخت فیکسچرهای جوشکاری',
          'قالب‌سازی صنعتی',
        ],
      },
    ],
  },
};

export const CONTACT_INFO = {
  companyLegalName:
    'Arres Mühendislik Makine İmalat İthalat İhracat Sanayi Ticaret Limited Şirketi',
  address:
    'Yakacık Çarşı Mah. Kartal Cad. Kastelli Sanayi Sitesi C Blok No:64 İç Kapı No:59 Kartal / İstanbul',
  phoneDisplay: '+90 532 785 05 76',
  phoneTel: '+905327850576',
  email: 'info@arres.com.tr',
} as const;

export const CONTACT_UI: Record<
  Locale,
  {
    subtitle: string;
    detailsHeading: string;
    departmentsHeading: string;
    domesticTitle: string;
    domesticSubtitle: string;
    exportTitle: string;
    exportSubtitle: string;
    formHeading: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    departmentLabel: string;
    departments: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
  }
> = {
  tr: {
    subtitle:
      'Tuft halı makineleri, kapitone sistemleri, özel makine imalatı, robotik otomasyon, CNC talaşlı imalat ve revizyon talepleriniz için bizimle iletişime geçebilirsiniz.',
    detailsHeading: 'Kurumsal İletişim Bilgileri',
    departmentsHeading: 'Birimler ve İhracat',
    domesticTitle: 'Satış & Destek, Muhasebe, Yedek Parça İmalat',
    domesticSubtitle: 'Yurt içi proje, servis, yedek parça ve mali işler',
    exportTitle: 'Export Sales',
    exportSubtitle: 'Uluslararası satış, ihracat ve fuar (CFE 2027) görüşmeleri',
    formHeading: 'Teklif ve Bilgi Formu',
    formSubtitle: 'Teknik talebinizi veya makine ihtiyacınızı bırakın, ekibimiz en kısa sürede dönüş yapsın.',
    nameLabel: 'Ad Soyad / Firma',
    namePlaceholder: 'Örn. Mehmet Yılmaz — Örnek Tekstil A.Ş.',
    emailLabel: 'E-posta Adresi',
    emailPlaceholder: 'ornek@firma.com',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+90 5XX XXX XX XX',
    departmentLabel: 'İlgili Birim',
    departments: [
      { value: 'sales-support-spare-parts', label: 'Satış & Destek / Yedek Parça İmalat' },
      { value: 'export-sales', label: 'Export Sales (İhracat)' },
      { value: 'accounting', label: 'Muhasebe' },
      { value: 'tuft-quilting-machinery', label: 'Tuft Halı & Kapitone Makineleri' },
      { value: 'custom-cnc-automation', label: 'Özel Makine / Otomasyon / CNC Revizyon' },
    ],
    messageLabel: 'Mesajınız / Teknik Detaylar',
    messagePlaceholder: 'Makine tipi, kapasite, ölçü veya revizyon/parça detaylarını yazabilirsiniz...',
    submitButton: 'Talebi Gönder',
    sendingButton: 'Gönderiliyor...',
    successMessage: 'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
    errorMessage: 'Gönderim sırasında bir sorun oluştu. Dilerseniz doğrudan info@arres.com.tr adresine e-posta gönderebilirsiniz.',
  },
  en: {
    subtitle:
      'Get in touch with us for tufting carpet machines, quilting systems, custom machinery, robotic automation, CNC machining, and overhaul inquiries.',
    detailsHeading: 'Corporate Contact Details',
    departmentsHeading: 'Departments & Export',
    domesticTitle: 'Sales & Support, Accounting, Spare Parts Manufacturing',
    domesticSubtitle: 'Domestic projects, service, spare parts & accounting',
    exportTitle: 'Export Sales',
    exportSubtitle: 'International sales, export & CFE 2027 exhibition inquiries',
    formHeading: 'Quote & Inquiry Form',
    formSubtitle: 'Share your technical requirements or machinery specifications and our engineering team will respond promptly.',
    nameLabel: 'Full Name / Company',
    namePlaceholder: 'e.g. John Doe — Example Industry Ltd.',
    emailLabel: 'Email Address',
    emailPlaceholder: 'name@company.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+90 5XX XXX XX XX',
    departmentLabel: 'Department',
    departments: [
      { value: 'sales-support-spare-parts', label: 'Sales & Support / Spare Parts Manufacturing' },
      { value: 'export-sales', label: 'Export Sales' },
      { value: 'accounting', label: 'Accounting' },
      { value: 'tuft-quilting-machinery', label: 'Tufting Carpet & Quilting Machines' },
      { value: 'custom-cnc-automation', label: 'Custom Machinery / Automation / CNC Overhaul' },
    ],
    messageLabel: 'Message / Technical Details',
    messagePlaceholder: 'Specify machine model, capacity, dimensions, or overhaul/part requirements...',
    submitButton: 'Send Inquiry',
    sendingButton: 'Sending...',
    successMessage: 'Your inquiry has been received. We will get back to you as soon as possible.',
    errorMessage: 'Something went wrong while sending. You can also email us directly at info@arres.com.tr.',
  },
  ru: {
    subtitle:
      'Свяжитесь с нами по вопросам тафтинговых и стегальных машин, спецмашин, роботизации, ЧПУ-обработки и модернизации оборудования.',
    detailsHeading: 'Реквизиты и контакты',
    departmentsHeading: 'Направления и экспорт',
    domesticTitle: 'Продажи и поддержка, бухгалтерия, производство запчастей',
    domesticSubtitle: 'Проекты, сервис, запчасти и финансовые вопросы',
    exportTitle: 'Export Sales',
    exportSubtitle: 'Международные продажи, экспорт и выставка CFE 2027',
    formHeading: 'Форма запроса',
    formSubtitle: 'Опишите техническую задачу или требования к оборудованию — мы свяжемся с вами в ближайшее время.',
    nameLabel: 'Имя и фамилия / Компания',
    namePlaceholder: 'Например: Иван Петров — ООО «Пример»',
    emailLabel: 'Электронная почта',
    emailPlaceholder: 'name@company.com',
    phoneLabel: 'Телефон',
    phonePlaceholder: '+90 5XX XXX XX XX',
    departmentLabel: 'Отдел / Направление',
    departments: [
      { value: 'sales-support-spare-parts', label: 'Продажи и поддержка / Запчасти' },
      { value: 'export-sales', label: 'Export Sales (Экспорт)' },
      { value: 'accounting', label: 'Бухгалтерия' },
      { value: 'tuft-quilting-machinery', label: 'Тафтинговые и стегальные машины' },
      { value: 'custom-cnc-automation', label: 'Спецмашины / Автоматизация / ЧПУ' },
    ],
    messageLabel: 'Сообщение / Технические детали',
    messagePlaceholder: 'Укажите тип станка, производительность, габариты или детали модернизации...',
    submitButton: 'Отправить запрос',
    sendingButton: 'Отправка...',
    successMessage: 'Ваш запрос получен. Мы свяжемся с вами в ближайшее время.',
    errorMessage: 'При отправке произошла ошибка. Вы также можете написать напрямую на info@arres.com.tr.',
  },
  ar: {
    subtitle:
      'تواصل معنا بخصوص ماكينات السجاد التافتنج وماكينات اللحف وتصنيع الماكينات الخاصة والأتمتة والتشغيل الآلي وإعادة التأهيل.',
    detailsHeading: 'بيانات التواصل الرسمية',
    departmentsHeading: 'الأقسام والمبيعات التصديرية',
    domesticTitle: 'المبيعات والدعم، المحاسبة، وتصنيع قطع الغيار',
    domesticSubtitle: 'المشاريع والخدمات وقطع الغيار والشؤون المالية',
    exportTitle: 'Export Sales',
    exportSubtitle: 'المبيعات الدولية والتصدير ومعرض CFE 2027',
    formHeading: 'نموذج طلب عرض أو استفسار',
    formSubtitle: 'أدخل متطلباتك الفنية أو مواصفات الماكينة وسيتواصل معك فريقنا في أقرب وقت.',
    nameLabel: 'الاسم الكامل / الشركة',
    namePlaceholder: 'مثال: أحمد منصور — شركة مثال للصناعة',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'name@company.com',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: '+90 5XX XXX XX XX',
    departmentLabel: 'القسم المعني',
    departments: [
      { value: 'sales-support-spare-parts', label: 'المبيعات والدعم / تصنيع قطع الغيار' },
      { value: 'export-sales', label: 'Export Sales (التصدير)' },
      { value: 'accounting', label: 'المحاسبة' },
      { value: 'tuft-quilting-machinery', label: 'ماكينات السجاد التافتنج واللحف' },
      { value: 'custom-cnc-automation', label: 'ماكينات خاصة / أتمتة / CNC' },
    ],
    messageLabel: 'الرسالة / التفاصيل الفنية',
    messagePlaceholder: 'يرجى توضيح نوع الماكينة أو الطاقة الإنتاجية أو الأبعاد أو تفاصيل الصيانة...',
    submitButton: 'إرسال الطلب',
    sendingButton: 'جاري الإرسال...',
    successMessage: 'تم استلام طلبك بنجاح. سنتواصل معك في أقرب وقت ممكن.',
    errorMessage: 'حدث خطأ أثناء الإرسال. يمكنك أيضًا مراسلتنا مباشرة على info@arres.com.tr.',
  },
  fa: {
    subtitle:
      'برای دریافت مشاوره و استعلام درباره ماشین‌آلات فرش تافتینگ، لحاف‌دوزی، ماشین‌سازی ویژه، اتوماسیون، ماشین‌کاری CNC و بازسازی با ما در ارتباط باشید.',
    detailsHeading: 'اطلاعات تماس رسمی شرکت',
    departmentsHeading: 'واحدها و صادرات',
    domesticTitle: 'فروش و پشتیبانی، حسابداری، ساخت قطعات یدکی',
    domesticSubtitle: 'پروژه‌ها، خدمات، قطعات یدکی و امور مالی',
    exportTitle: 'Export Sales',
    exportSubtitle: 'فروش بین‌المللی، صادرات و نمایشگاه CFE 2027',
    formHeading: 'فرم درخواست پیش‌فاکتور و تماس',
    formSubtitle: 'جزئیات فنی یا نیاز ماشین‌آلات خود را ارسال کنید تا کارشناسان ما در کوتاه‌ترین زمان پاسخ دهند.',
    nameLabel: 'نام و نام خانوادگی / شرکت',
    namePlaceholder: 'مثلاً: علی رضایی — گروه صنعتی نمونه',
    emailLabel: 'پست الکترونیک',
    emailPlaceholder: 'name@company.com',
    phoneLabel: 'شماره تماس',
    phonePlaceholder: '+90 5XX XXX XX XX',
    departmentLabel: 'واحد مربوطه',
    departments: [
      { value: 'sales-support-spare-parts', label: 'فروش و پشتیبانی / ساخت قطعات یدکی' },
      { value: 'export-sales', label: 'Export Sales (صادرات)' },
      { value: 'accounting', label: 'حسابداری' },
      { value: 'tuft-quilting-machinery', label: 'ماشین‌آلات فرش تافتینگ و لحاف‌دوزی' },
      { value: 'custom-cnc-automation', label: 'ماشین‌سازی ویژه / اتوماسیون / CNC' },
    ],
    messageLabel: 'پیام / جزئیات فنی',
    messagePlaceholder: 'نوع دستگاه، ظرفیت، ابعاد یا جزئیات بازسازی و قطعه را وارد کنید...',
    submitButton: 'ارسال درخواست',
    sendingButton: 'در حال ارسال...',
    successMessage: 'درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس خواهیم گرفت.',
    errorMessage: 'در زمان ارسال خطایی رخ داد. همچنین می‌توانید مستقیماً به info@arres.com.tr ایمیل بزنید.',
  },
};

export const FOOTER_UI: Record<
  Locale,
  {
    tagline: string;
    quickLinksHeading: string;
    divisionsHeading: string;
    contactHeading: string;
    membershipBadge: string;
    fairBadge: string;
    rightsReserved: string;
  }
> = {
  tr: {
    tagline:
      'Tuft halı makineleri, kapitone sistemleri, özel makine imalatı, robotik otomasyon ve CNC talaşlı imalat & revizyon çözümleri.',
    quickLinksHeading: 'Hızlı Erişim',
    divisionsHeading: 'Çalışma Grupları',
    contactHeading: 'Kurumsal İletişim',
    membershipBadge: 'İstanbul Halı İhracatçıları Birliği (İHİB) Üyesi',
    fairBadge: 'CFE 2027 • Salon 2, Stand 205',
    rightsReserved: 'Tüm hakları saklıdır.',
  },
  en: {
    tagline:
      'Tufting carpet machines, quilting systems, custom industrial machinery, robotic automation, and CNC machining & overhaul solutions.',
    quickLinksHeading: 'Quick Links',
    divisionsHeading: 'Divisions',
    contactHeading: 'Corporate Contact',
    membershipBadge: 'Member of Istanbul Carpet Exporters Association (İHİB)',
    fairBadge: 'CFE 2027 • Hall 2, Booth 205',
    rightsReserved: 'All rights reserved.',
  },
  ru: {
    tagline:
      'Тафтинговые и стегальные машины, специальное машиностроение, роботизация, ЧПУ-обработка и модернизация оборудования.',
    quickLinksHeading: 'Навигация',
    divisionsHeading: 'Направления',
    contactHeading: 'Контакты',
    membershipBadge: 'Член Стамбульской ассоциации экспортеров ковров (İHİB)',
    fairBadge: 'CFE 2027 • Зал 2, Стенд 205',
    rightsReserved: 'Все права защищены.',
  },
  ar: {
    tagline:
      'ماكينات السجاد التافتنج وماكينات اللحف، تصنيع الماكينات الخاصة، الأتمتة الروبوتية، والتشغيل الآلي وإعادة التأهيل.',
    quickLinksHeading: 'روابط سريعة',
    divisionsHeading: 'الأقسام',
    contactHeading: 'بيانات التواصل',
    membershipBadge: 'عضو اتحاد مصدري السجاد في إسطنبول (İHİB)',
    fairBadge: 'معرض CFE 2027 • القاعة 2، الجناح 205',
    rightsReserved: 'جميع الحقوق محفوظة.',
  },
  fa: {
    tagline:
      'ماشین‌آلات فرش تافتینگ و لحاف‌دوزی، ساخت ماشین‌آلات ویژه، اتوماسیون رباتیک و ماشین‌کاری و بازسازی دقیق.',
    quickLinksHeading: 'دسترسی سریع',
    divisionsHeading: 'بخش‌های تخصصی',
    contactHeading: 'تماس با ما',
    membershipBadge: 'عضو اتحادیه صادرکنندگان فرش استانبول (İHİB)',
    fairBadge: 'نمایشگاه CFE 2027 • سالن 2، غرفه 205',
    rightsReserved: 'تمامی حقوق محفوظ است.',
  },
};