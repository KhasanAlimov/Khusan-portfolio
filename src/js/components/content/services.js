import { addElem, elem } from "../utils.js";

const servicesObject = [
	[
		{
			headline: 'Брендинг',
			text: 'Разработка фирменного стиля и отдельных его элементов (логотип, корпоративные цвета, бланки, визитки, оформление транспорта, одежды сотрудников, торговых точек и т.д.).',
			img: {
				name: 'Branding.jpg',
				alt: 'apple, tesla, brand'
			}
		},
		{
			headline: 'Разработка упаковки',
			text: 'Создание дизайна упаковки для различных товаров.',
			img: {
				name: 'Packaging-development.jpg',
				alt: 'nouri, box'
			}
		},
		{
			headline: 'Полиграфия',
			text: 'Верстка макетов журналов и книг. Разработка дизайна буклетов, брошюр, листовок, афиш, календарей, сувенирной продукции.',
			img: {
				name: 'Polygraphy.jpg',
				alt: 'calendar, life is short, note'
			}
		},
		{
			headline: 'Наружная реклама',
			text: 'Дизайн баннеров, стендов, вывесок.',
			img: {
				name: 'Outdoor-advertising.jpg',
				alt: 'suprime, area sign'
			}
		},
		{
			headline: 'Дизайн пространства',
			text: 'Разработка знаков, указателей, табличек, схем в аэропортах, метро, торговых центрах и других объектах.',
			img: {
				name: 'Space-design.jpg',
				alt: 'map, stay present, sign'
			}
		},
		{
			headline: 'Веб',
			text: 'Дизайн баннеров, оформление социальных сетей, создание иконок, инфографики.',
			img: {
				name: 'Web.jpg',
				alt: 'social networks, drawing'
			}
		},
	],
	[
		{
			headline: 'Макет посадочной страницы',
			text: 'Создаю аккуратную посадочную страницу, которая выглядит профессионально и не раздражает взгляд.',
			img: {
				name: 'Landing-page-layout.jpg',
				alt: 'working hard anywhere, laptop'
			}
		},
		{
			headline: 'Макет сайта для компании',
			text: 'Продуманный дизайн корпоративного сайта поможет выгодно подать клиентам ваши преимущества, продемонстрирует солидность, повысит имидж.',
			img: {
				name: 'Website-layout-for-the-company.jpg',
				alt: 'office, laptop, project'
			}
		},
		{
			headline: 'Макет интернет магазинов',
			text: 'Создание собственного интернет магазина – шаг к масштабированию компании и продаже товаров не только локально в городе или регионе, но и по всему миру.',
			img: {
				name: 'Online-store-layout.jpg',
				alt: 'amazon, samsung, phone'
			}
		},
		{
			headline: 'Интерфейсы для интернет-сервисов и приложений',
			text: 'Цифровая стратегия, поиск решения (UX) и разработка UI.',
			img: {
				name: 'Interfaces-for-Internet-services-and-applications.jpg',
				alt: 'project, common work'
			}
		},
		{
			headline: 'Шаблоны для email-рассылок',
			text: 'Профессиональные шаблон, удобный конструктор писем, превосходная доставляемость и автоматизация.',
			img: {
				name: 'Email-templates.jpg',
				alt: 'gmail, apple, laptop'
			}
		},
		{
			headline: 'Верстка',
			text: 'Адаптивный дизайн макетов веб-страниц для дальнейшей обработки и функционирования при помощи языковых разметок.',
			img: {
				name: 'Layout.jpg',
				alt: 'layout, code, html'
			}
		},
	]
];


const servicesSliderContainer = elem('#services-slider');

servicesObject.map(item => {

	const serviceBlockType = addElem(servicesSliderContainer, 'div', [
		['className', 'serviceBlock slide-overflow']
	]);

	item.map(serv => {

		const service = addElem(serviceBlockType, 'div', [
			['className', 'service p-3  position-relative text-center text-white d-flex justify-content-center'],
			['style.background', `url('./assets/img/${serv.img.name}') no-repeat`],
			['innerHTML', `
				<h5 class="headline">${serv.headline}</h5>
				<p class="m-0">${serv.text}</p>
				<div class="overlay position-absolute"></div>
			`]
		]);

	});
	
	
});