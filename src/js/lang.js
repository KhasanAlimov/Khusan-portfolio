import { elems, elem } from "./components/utils.js";

const language = {
  en: {
    navAboutMe: "About Me",
    navServices: "Services",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navTestimonials: "Testimonials",
    navContacts: "Contacts",
    hello: "Hello!",
    nameIs: "My name is",
    authorName: "Khusan Alimov",
    headerBriefInfo: `I can help you with the Graphic, Web Design and Layout of the site, the goal is to make an elegant, intelligent, sophisticated - and at the same time convenient in every sense of the design.`,
    contactMe: "Contact me",
    FollowMe: "Follow me",
		mottoIs: 'My motto is smiling —',
		mottoContinuation: 'Smile culturally and with respect',
		aboutMeP1: 'Everyone can use their abilities to help other people. Hello! My name is Khusan Alimov, I am 20 years old, was born in Kyrgyzstan in the city of Osh.',
		aboutMeP2: 'My abilities lie in the fact that I know how to use some programs and know some programming languages and could coolly help you out with Graphic and Web Design, including Site Layout. Making amazing changes in one person’s life can change the world.',
		aboutMeP3: 'I try to think globally, act locally and immerse myself in my work. The world is always changing. What cannot change is our drive to improve, our drive to do better.',
    aboutMeP4: 'I lived, studied and grew up in countries such as Russia and Ukraine, now I live in Kyrgyzstan. He graduated from college at OSU "Osh State University", Faculty of Mathematics of Information Technologies, did not continue his studies, switched to self-study, so to develop faster.',
    aboutMeP5: 'Imagine what kind of design can be made from a carefully crafted idea and imagine what emotions your friends will have when they see this picture. Yes! It would be great, wouldn’t it? If you are looking for someone to help you with this, let me help you. What are you waiting for contact me? I am sure we will find a common language.',
    servicesHeadline: 'My services',
    graphDesign: 'Graphic design',
    webDesign: 'Web design and layout',
    servicesDescrip: 'I cannot say that I am perfect, but I can do what can mobilize, attract attention and motivate people.',
    branding: 'Branding',
    brandTxt: 'Development of corporate identity and its elements (logo, corporate colours, letterheads, business cards, design of transport, clothing for employees, retail outlets, etc.).',
    packagDev: 'Packaging development',
    packagDevTxt: 'Creation of packaging design for various products.',
    polygraphy: 'Polygraphy',
    polygraphyTxt: 'The layout of magazines and books. Development of design for booklets, brochures, leaflets, posters, calendars, souvenirs.',
    outAdd: 'Outdoor advertising',
    outAddTxt: 'Design of banners, stands, signboards.',
    spaceDesign: 'Design space',
    spaceDesignTxt: 'Development of signs, signs, plates, schemes at airports, metro, shopping centres and other facilities.',
    web: 'Web',
    webTxt: 'Banner design, social media decoration, icon creation, infographics.',
    landPageLayout: 'Landing page layout',
    landPageLayoutTxt: 'I create a neat landing page that looks professional and doesn’t irritate the eye.',
    siteLayoutCompany: 'Website layout for the company',
    siteLayoutCompanyTxt: 'A well-thought-out design of a corporate website will help to profitably present your advantages to clients, demonstrate solidity, and enhance your image.',
    onlineStoreLayout: 'Online store layout',
    onlineStoreLayoutTxt: 'Creating your online store is a step towards scaling the company and selling goods not only locally in a city or region, but also around the world.',
    interfaceServ: 'Interfaces for Internet services and applications',
    interfaceServTxt: 'Digital strategy, solution search (UX) and UI development.',
    emailTemplates: 'Templates for email-newsletters',
    emailTemplatesTxt: 'Professional template, user-friendly email constructor, excellent deliverability and automation.',
    layout: 'Layout',
    layoutTxt: 'The responsive design of web page layouts for further processing and functioning using language markup.',
    skillsHeadline: 'My skills',
    skillDesign: 'Design',
    portfolioDescP1: 'Can a human-made design communicate with human consciousness? After the field of design emerged, people began to believe and began to think differently that there was a deeper spiritual connection between creativity and people.',
    portfolioDescP2: 'Imagine what the design was like 5 or 10 years ago, only by comparing today you can understand that humanity has evolved very quickly, and so you can understand that it’s not about beauty, but about a convenient, understandable and eye-pleasing design.',
    portfolioWebDesign: 'Web-design',
    reviewsHeading: 'Reviews about me',
    reviewsDescrip: 'This category is empty as I don’t have any feedback on me yet. I hope that I will fill this category shortly.',
    submitForm: 'Send',
    formMyName: 'My name',
    formName: 'Khusan',
    formNum: 'My number',
    orContactVia: 'Or contact through',
    Placeholder: {
      inputName: 'Name',
      textareaHowHalp: 'How can I help',
    },
  },
  ru: {
    navAboutMe: "О себе",
    navServices: "Услуги",
    navSkills: "Навыки",
    navPortfolio: "Портфолио",
    navTestimonials: "Отзывы",
    navContacts: "Контакты",
    hello: "Привет!",
    nameIs: "Меня зовут",
    authorName: "Хусан Алимов",
    headerBriefInfo: `Смогу вам помочь с Веб & Графическим и с Версткой сайта, цель делать изящную, интеллигентную, утонченную — и при этом удобную во всех смыслах дизайн.`,
    contactMe: "Связатся со мной",
    FollowMe: "Следить за мной",
		mottoIs: 'Мой девиз Улыбка —',
		mottoContinuation: 'Улыбайся культурно и с уважением',
		aboutMeP1: 'Каждый может использовать свои способности, чтобы помогать другим людям. Здравствуйте! Меня зовут Хусан Алимов, мне 20 лет, родился в Кыргызстане в городе Ош.',
		aboutMeP2: 'Мои способности заключаются в том что я умею пользоватся кой-какими программами и владею кой-какими програмными языками и мог бы круто выручить вас с Графическим и Веб-дизайном включая Верстку сайта. Внесение удивительных изменений в жизнь одного человека может изменить мир.',
		aboutMeP3: 'Стараюсь мыслить глобально, действовать локально и полностью погрузится в работу. Мир всегда меняется. Что не может изменится, так это наше стремление к совершенствованию, наше стремление делать лучше.',
    aboutMeP4: 'Я жил, учился и рос в странах таких как Россия и Украина, сейчас живу в Кыргызстане. Окончил колледж в ОшГУ «Ош Государственный Университет», факультет Математика информационных технологий, не стал продолжать учебу, перешел на самообучение, так развиваться быстрее.',
    aboutMeP5: 'Представьте какой дизайн можно сделать из тщательно обработанной идеи и представьте какие эмоции будут у ваших знакомых увидев эту картину. Да! Было бы здорово не так ли. Если вы ищете человека который смог бы вам помочь с этим, так позвольте мне помочь вам. Чего вы ждете свяжитесь со мной. Я уверен мы найдем общий язык.',
    servicesHeadline: 'Мои услуги',
    graphDesign: 'Графический дизайн',
    webDesign: 'Веб-дизайн и верстка',
    servicesDescrip: 'Не могу сказать что я идеальный, но я могу делать то, что может мобилизовать, привлечь внимание и побудить людей.',
    branding: 'Брендинг',
    brandTxt: 'Разработка фирменного стиля и отдельных его элементов (логотип, корпоративные цвета, бланки, визитки, оформление транспорта, одежды сотрудников, торговых точек и т.д.).',
    packagDev: 'Разработка упаковки',
    packagDevTxt: 'Создание дизайна упаковки для различных товаров.',
    polygraphy: 'Полиграфия',
    polygraphyTxt: 'Верстка макетов журналов и книг. Разработка дизайна буклетов, брошюр, листовок, афиш, календарей, сувенирной продукции.',
    outAdd: 'Наружная реклама',
    outAddTxt: 'Дизайн баннеров, стендов, вывесок.',
    spaceDesign: 'Дизайн пространства',
    spaceDesignTxt: 'Разработка знаков, указателей, табличек, схем в аэропортах, метро, торговых центрах и других объектах.',
    web: 'Веб',
    webTxt: 'Дизайн баннеров, оформление социальных сетей, создание иконок, инфографики.',
    landPageLayout: 'Макет посадочной страницы',
    landPageLayoutTxt: 'Создаю аккуратную посадочную страницу, которая выглядит профессионально и не раздражает взгляд.',
    siteLayoutCompany: 'Макет сайта для компании',
    siteLayoutCompanyTxt: 'Продуманный дизайн корпоративного сайта поможет выгодно подать клиентам ваши преимущества, продемонстрирует солидность, повысит имидж.',
    onlineStoreLayout: 'Макет интернет магазинов',
    onlineStoreLayoutTxt: 'Создание собственного интернет магазина – шаг к масштабированию компании и продаже товаров не только локально в городе или регионе, но и по всему миру.',
    interfaceServ: 'Интерфейсы для интернет-сервисов и приложений',
    interfaceServTxt: 'Цифровая стратегия, поиск решения (UX) и разработка UI.',
    emailTemplates: 'Шаблоны для email-рассылок',
    emailTemplatesTxt: 'Профессиональные шаблон, удобный конструктор писем, превосходная доставляемость и автоматизация.',
    layout: 'Верстка',
    layoutTxt: 'Адаптивный дизайн макетов веб-страниц для дальнейшей обработки и функционирования при помощи языковых разметок.',
    skillsHeadline: 'Мои навыки',
    skillDesign: 'Дизайн',
    portfolioDescP1: 'Может ли созданный человеком дизайн общаться с человеческим сознанием? После того как появилась сфера дизайна, люди начали верить и стали думать иначе, что между творчеством и людьми существует более глубокая духовная связь.',
    portfolioDescP2: 'Представьте каким был дизайн 5 или 10 лет назад, только сравнив на сегодняшний день можно понять что человечество очень быстро эволюционировало, и так можно понять что дело не в красоте, а в удобном, понятном и приятным на глаз дизайне.',
    portfolioWebDesign: 'Веб-дизайн',
    reviewsHeading: 'Отзывы обо мне',
    reviewsDescrip: 'Эта категория пуста, так как у меня еще нету отзывов обо мне. Надеюсь на то что за ближайшее время заполню эту категорию.',
    submitForm: 'Отправить',
    formMyName: 'Мое имя',
    formName: 'Хусан',
    formNum: 'Мой номер',
    orContactVia: 'Или свяжитесь через',
    Placeholder: {
      inputName: 'Имя',
      textareaHowHalp: 'Чем могу помочь',
    },
  },
};



const selectLang = elem("#lang");

// Перевод страницы на текущий язык
function changePageLang(lang) {
  const langKey = elems("[lang-key]");
  const placeholderLangKey = elems("[placeholder-lang-key]");

  langKey.forEach((key) => {
    const attrValue = key.getAttribute("lang-key");

    key.textContent = language[lang][attrValue];
  });

  placeholderLangKey.forEach((key) => {
    const attrValue = key.getAttribute("placeholder-lang-key");

    key.setAttribute('placeholder', language[lang].Placeholder[attrValue]);
  });
};

// Язык страницы по умолчанию
function defaultPageLang() {
  const availableLangs = Object.keys(language);

  let userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.split("-")[0];

  !availableLangs.includes(userLang)
    ? ''
    : (changePageLang(userLang), selectLang.value = userLang);
}

defaultPageLang();

selectLang.onchange = () => {
  location.href = window.location.pathname + "#" + selectLang.value;
  location.reload();
};

// Изменение при выборе языка
const selectLangChange = () => {
  const hashKey = window.location.hash;
	const hashLang = hashKey.slice(1);

	!hashKey
	? ''
	: (changePageLang(hashLang), selectLang.value = hashLang);
};

selectLangChange()
