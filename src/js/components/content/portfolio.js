import { addElem, elem, elems } from "../utils.js";

const portfolioObj = [
  {
    headline: "Графический дизайн",
    langAttr: 'graphDesign',
    items: [
      {
        name: "Shop-now",
        img: "shop-now.jpg",
        color: "#919296",
        link: 'shop-now-max.jpg'
      },
      {
        name: "Alimovs",
        img: "alimovs.jpg",
        color: "#1c1819",
        link: 'alimovs-logo-max.jpg'
      },
      {
        name: "Banner-sakal",
        img: "banner-sakal.jpg",
        color: "#eff0f2",
        link: 'sakal-banner.jpg'
      },
      {
        name: "Boroda-logo",
        img: "boroda-logo.svg",
        color: "#ffffff",
        link: 'boroda-logo.svg'
      },
      {
        name: "Logotype",
        img: "logotype.jpg",
        color: "#ffffff",
        link: 'logotype-max.jpg'
      },
      {
        name: "Banner-stroy",
        img: "banner-stroy.jpg",
        color: "#1b2433",
        link: 'stroy-banner.jpg'
      },
    ],
  },
  {
    headline: "Веб-дизайн",
    langAttr: 'portfolioWebDesign',
    items: [
      {
        name: "Alimovs-shop",
        img: "Alimovs-shop.jpg",
        color: "#e9e8e3",
        link: 'alimovs-shop.jpg'
      },
      {
        name: "Dimich-site",
        img: "dimich-site.jpg",
        color: "#222222",
        link: 'dimich.jpg'
      },
      {
        name: "First-step",
        img: "first-design.jpg",
        color: "#3e3939",
        link: 'first-step.jpg'
      },
      {
        name: "Form",
        img: "form.jpg",
        color: "#ffffff",
        link: 'form-design.jpg'
      },
      {
        name: "Prototype-of-site",
        img: "prototype-of-site.jpg",
        color: "#888888",
        link: 'prototype-max.jpg'
      },
      {
        name: "Sakal-header",
        img: "Sakal-header.jpg",
        color: "#c7c7c7",
        link: 'Sakal-max.jpg'
      },
    ],
  },
];

const slidersContainer = elem("#portfolio-sliders-container");

portfolioObj.map((part) => {
  const portfolioPart = addElem(slidersContainer, "div", [
    ["className", "portfolio-part text-center"],
    ["innerHTML", `
    <h4 class="my-5" lang-key="${part.langAttr}">${part.headline}</h4>
		`],
  ]);
  
  const sliderContent = addElem(portfolioPart, "div", [
    ['className', 'position-relative mx-auto']
  ])
  
  const portfolioItemBlock = addElem(sliderContent, "div", [
    ['className', 'portfolio-Items-Block position-relative mb-4']
	]);
  
  part.items.map((item) => {
    addElem(portfolioItemBlock, 'div', [
      ['className', `d-flex justify-content-center align-items-center position-absolute h-100 w-100`],
			['style.background', item.color],
			['innerHTML', `
        <a class="position-absolute" href="assets/img/portfolio/maxSizeImg/${item.link}" target="_blank">
          <img src="./assets/img/portfolio/plus-circle.svg" loading="lazy" alt="circle plus svg"/>
        </a>
        <img class="mw-100 mh-100" src="./assets/img/portfolio/${item.img}" alt="${item.name}"/>
			`]
		])
	});
  
  let count = 0;
  
	let singleItem = portfolioItemBlock.children;
	singleItem[count].classList.add('active');
	singleItem[singleItem.length - 1].classList.add('leftSide');
	singleItem[count + 1].classList.add('rightSide');

  const indexes = addElem(portfolioPart, 'span', [
    ['className', 'index text-secondary'],
    ['innerText', `${count + 1} / ${singleItem.length}`]
  ]);
  
  const chevronClasses = ["chevron-left", "chevron-right"];
  
  chevronClasses.map((chevron) => {
    // Create chevron buttons
    const addButton = addElem(sliderContent, "button", [
      ["className", `${chevron} position-absolute p-0 border-0 text-light`],
      ["innerHTML", `<i class="bi bi-${chevron}"></i>`],
    ]);

    // Click event on chevrons
    addButton.addEventListener("click", () => {
      singleItem[count].classList.remove('active');

      const nextFunc = (func = n => {}) => {
        let next = count + 1;

        next > singleItem.length - 1
        ? next = 0
        : next = count + 1;

        func(next);
      }

      const prevFunc = (func = n => {}) => {
        let previouse = count - 1;

        previouse < 0
        ? previouse = singleItem.length - 1
        : previouse = count - 1

        singleItem[previouse].classList.add('previouse');

        func(previouse);
      }
      
      if (addButton.classList.contains("chevron-left")) {

        nextFunc(n => {
          singleItem[n].classList.remove('rightSide');
        });     

        singleItem[count].classList.add('rightSide');
        
        count <= 0
        ? count = singleItem.length - 1
        : count -= 1;
        
        singleItem[count].classList.remove('leftSide');

        prevFunc(n => {
          singleItem[n].style.transition = 'none';

          setTimeout(() => {
            singleItem[n].style.removeProperty('transition')
            singleItem[n].classList.remove('previouse');
            singleItem[n].classList.add('leftSide');
          }, 150);
        });
        

      } else if (addButton.classList.contains("chevron-right")) {
        prevFunc(n => {
          singleItem[n].classList.remove('leftSide');

          setTimeout(() => {
            singleItem[n].classList.remove('previouse');
          }, 1000);
        })
        

        singleItem[count].classList.add('leftSide');

        count >= singleItem.length - 1
        ? count = 0
        : count += 1;

        singleItem[count].classList.remove('rightSide');

        nextFunc(n => {
          singleItem[n].classList.add('rightSide');
        }); 
      }

      singleItem[count].classList.add('active');

      indexes.innerText =  `${count + 1} / ${singleItem.length}`;
    });
  });

});


