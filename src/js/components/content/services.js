import { addElem, elem, elems } from "../utils.js";

const servicesObject = [
  [
    {
      headline: "Брендинг",
      text: "Разработка фирменного стиля и отдельных его элементов (логотип, корпоративные цвета, бланки, визитки, оформление транспорта, одежды сотрудников, торговых точек и т.д.).",
      img: {
        name: "Branding.jpg",
        alt: "apple, tesla, brand",
      },
    },
    {
      headline: "Разработка упаковки",
      text: "Создание дизайна упаковки для различных товаров.",
      img: {
        name: "Packaging-development.jpg",
        alt: "nouri, box",
      },
    },
    {
      headline: "Полиграфия",
      text: "Верстка макетов журналов и книг. Разработка дизайна буклетов, брошюр, листовок, афиш, календарей, сувенирной продукции.",
      img: {
        name: "Polygraphy.jpg",
        alt: "calendar, life is short, note",
      },
    },
    {
      headline: "Наружная реклама",
      text: "Дизайн баннеров, стендов, вывесок.",
      img: {
        name: "Outdoor-advertising.jpg",
        alt: "suprime, area sign",
      },
    },
    {
      headline: "Дизайн пространства",
      text: "Разработка знаков, указателей, табличек, схем в аэропортах, метро, торговых центрах и других объектах.",
      img: {
        name: "Space-design.jpg",
        alt: "map, stay present, sign",
      },
    },
    {
      headline: "Веб",
      text: "Дизайн баннеров, оформление социальных сетей, создание иконок, инфографики.",
      img: {
        name: "Web.jpg",
        alt: "social networks, drawing",
      },
    },
  ],
  [
    {
      headline: "Макет посадочной страницы",
      text: "Создаю аккуратную посадочную страницу, которая выглядит профессионально и не раздражает взгляд.",
      img: {
        name: "Landing-page-layout.jpg",
        alt: "working hard anywhere, laptop",
      },
    },
    {
      headline: "Макет сайта для компании",
      text: "Продуманный дизайн корпоративного сайта поможет выгодно подать клиентам ваши преимущества, продемонстрирует солидность, повысит имидж.",
      img: {
        name: "Website-layout-for-the-company.jpg",
        alt: "office, laptop, project",
      },
    },
    {
      headline: "Макет интернет магазинов",
      text: "Создание собственного интернет магазина – шаг к масштабированию компании и продаже товаров не только локально в городе или регионе, но и по всему миру.",
      img: {
        name: "Online-store-layout.jpg",
        alt: "amazon, samsung, phone",
      },
    },
    {
      headline: "Интерфейсы для интернет-сервисов и приложений",
      text: "Цифровая стратегия, поиск решения (UX) и разработка UI.",
      img: {
        name: "Interfaces-for-Internet-services-and-applications.jpg",
        alt: "project, common work",
      },
    },
    {
      headline: "Шаблоны для email-рассылок",
      text: "Профессиональные шаблон, удобный конструктор писем, превосходная доставляемость и автоматизация.",
      img: {
        name: "Email-templates.jpg",
        alt: "gmail, apple, laptop",
      },
    },
    {
      headline: "Верстка",
      text: "Адаптивный дизайн макетов веб-страниц для дальнейшей обработки и функционирования при помощи языковых разметок.",
      img: {
        name: "Layout.jpg",
        alt: "layout, code, html",
      },
    },
  ],
];

const servicesSliderContainer = elem("#services-slider");

// Итерация массива
servicesObject.map((item) => {
  const serviceBlockType = addElem(servicesSliderContainer, "div", [
    [
      "className",
      "serviceBlock slide-overflow w-100 position-absolute justify-content-between",
    ],
  ]);

  item.map((serv) => {
    addElem(serviceBlockType, "div", [
      [
        "className",
        "service p-3  position-relative text-center text-white d-flex justify-content-center",
      ],
      ["style.background", `url('./assets/img/services/${serv.img.name}') no-repeat`],
      [
        "innerHTML",
        `
				<h5 class="headline">${serv.headline}</h5>
				<p class="m-0">${serv.text}</p>
				<div class="overlay position-absolute"></div>
			`,
      ],
    ]);
  });
});

// Activate first slide
let slideBlocks = elems(".serviceBlock");
slideBlocks[0].classList.add("active");

const chevronTypeArr = ["chevron-left", "chevron-right"];

let startSlide = 0,
  currentScrollValue = 0,
  currentSlide = slideBlocks[startSlide];

window.addEventListener("resize", () => {
  showHideChevron();
});

chevronTypeArr.map((item) => {
  // Create chevron buttons
  const addButton = addElem(servicesSliderContainer, "button", [
    ["className", `${item} position-absolute p-0 border-0`],
    ["innerHTML", `<i class="bi bi-${item}"></i>`],
  ]);

  // Click event on chevrons
  addButton.addEventListener("click", () => {
    currentSlide = slideBlocks[startSlide];

    if (addButton.classList.contains("chevron-left")) {
      if (
        currentSlide.clientWidth == currentSlide.scrollWidth ||
        currentSlide.clientWidth + currentSlide.scrollLeft ==
          currentSlide.clientWidth
      ) {
        startSlide == 0 ? startSlide : startSlide--;
        toLeft(startSlide);
      } else if (currentSlide.clientWidth < currentSlide.scrollWidth) {
        currentScrollValue = currentSlide.scrollLeft -=
          currentSlide.children[0].clientWidth + 21;
      }
    } else if (addButton.classList.contains("chevron-right")) {
      if (
        currentSlide.clientWidth == currentSlide.scrollWidth ||
        currentSlide.clientWidth + currentSlide.scrollLeft ==
          currentSlide.scrollWidth
      ) {
        startSlide == slideBlocks.length - 1 ? startSlide : startSlide++;
        toRight(startSlide);
      } else if (currentSlide.clientWidth < currentSlide.scrollWidth) {
        currentScrollValue = currentSlide.scrollLeft +=
          currentSlide.children[0].clientWidth + 21;
      }
    }

    showHideChevron();
  });
});

// Переключатель индикатор 
const switchIndicator = (next, previouse) => {
  let switcher = elem("#switcher").children;
  switcher[previouse].classList.remove('active-part');
  switcher[next].classList.add('active-part');
}

const toLeft = (next, previouse = next + 1) => {
  slideBlocks[next].classList.remove("slidedBlock");
  slideBlocks[next].classList.add("active");
  slideBlocks[previouse].classList.remove("active");
  currentScrollValue = slideBlocks[next].scrollWidth;

  switchIndicator(next, previouse);
};

const toRight = (next, previouse = next - 1) => {
  slideBlocks[next].classList.add("active");
  slideBlocks[previouse].classList.add("slidedBlock");
  slideBlocks[previouse].classList.remove("active");
  currentScrollValue = 0;

  switchIndicator(next, previouse);
};

// Функция исчезания и появление кнопок перехода
const showHideChevron = () => {
  const chevronLeft = servicesSliderContainer.querySelector(".chevron-left"),
    chevronRight = servicesSliderContainer.querySelector(".chevron-right");

  startSlide + 1 == slideBlocks.length &&
  currentScrollValue + slideBlocks[startSlide].clientWidth >=
    slideBlocks[startSlide].scrollWidth
    ? ((chevronRight.style.visibility = "hidden"),
      (chevronLeft.style.visibility = "visible"))
    : startSlide == 0 &&
      (currentScrollValue <= 0 ||
        slideBlocks[startSlide].scrollWidth ==
          slideBlocks[startSlide].clientWidth)
    ? ((chevronLeft.style.visibility = "hidden"),
      (chevronRight.style.visibility = "visible"))
    : ((chevronLeft.style.visibility = "visible"),
      (chevronRight.style.visibility = "visible"));
};

// Переключатель слайдера
elem("#switcher").addEventListener("click", (item) => {
  currentSlide = slideBlocks[startSlide];
  let previouseIndex = startSlide;
  startSlide = parseFloat(item.target.getAttribute("slide-index"));

  if (item.target.classList.contains("slide-name")) {
    if (startSlide > previouseIndex) {
      toRight(startSlide, previouseIndex);
      slideBlocks[previouseIndex].scrollLeft = slideBlocks[previouseIndex].scrollWidth - currentSlide.children[0].clientWidth + 21;
    } else if (startSlide < previouseIndex) {
      toLeft(startSlide, previouseIndex)
      slideBlocks[previouseIndex].scrollLeft = 0;
    } else {
      return;
    }
  }

  showHideChevron();
});
