import { addElem, elem, capitalizeFirstLetter, elems } from "./utils.js";

// Open menu list
const burgerMenuIcon = elem("#menu-toggle-button").children[0],
  menuList = elem("#collapse-block");
burgerMenuIcon.addEventListener("click", () => {
  menuList.classList.toggle("show-element");

  setTimeout(() => {
    menuList.classList.toggle("slow-slide");
  }, 1);
});

// Close menu list
const XIcon = elem("#close-icon").children[0];
XIcon.addEventListener("click", () => {
  menuList.classList.remove("slow-slide");

  setTimeout(() => {
    menuList.classList.remove("show-element");
  }, 500);
});

// Social networks object
const appsIcons = [
  {
    name: "instagram",
    link: "https://www.instagram.com/khsalimovs/",
    color: "#DD2A7B",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/khsalimovs",
    color: "#3b5998",
  },
  {
    name: "twitter",
    link: "https://twitter.com/KhusanAlimov",
    color: "#1DA1F2",
  },
  {
    name: "vkontakte",
    img: true,
    link: "https://vk.com/khusanalimov",
    color: "#45668e",
  },
  {
    name: "telegram",
    link: "https://t.me/KhusanAlimov",
    color: "#0088cc",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/996700594283",
    color: "#25D366",
  },
  {
    name: "behance",
    img: true,
    link: "https://www.behance.net/husanalimov",
    color: "#c836c8",
  },
  {
    name: "skype",
    link: "https://join.skype.com/invite/OqZNHd5WRYHX",
    color: "#00aff0",
  },
];

const socNet = elems("#socNetIcons");

let iconsBlock;

socNet.forEach(socItem => {
  

// Итерация соц сетей
appsIcons.map((item) => {
  iconsBlock = addElem(socItem, "div", [["className", "iconsBlock"]]);

  // Проверка изображений и svg иконок
  const iconShow = () => {
    let result;
    if (item.img) {
      result = `<img src="./assets/icons/${
        item.name
      }.svg" alt="${capitalizeFirstLetter(item.name)}">`;
    } else {
      result = `<i class="bi bi-${item.name}"></i>`;
    }

    return result;
  };

  iconsBlock.innerHTML = `
		<p class="${
      item.name
    } rounded-circle m-0 position-relative" title="${capitalizeFirstLetter(
    item.name
  )}">
			<a href="${item.link}" target="_blank">
				${iconShow()}
			</a>
		</p>
	`;

  // Событя наведения на иконки соц сетей
  const mouseEvents = [["mouseenter", item.color],["mouseleave", '']];
  mouseEvents.forEach(item => {
    iconsBlock.children[0].addEventListener(item[0], (r) => {
        r.target.style.background = item[1];
      },
      false
    );
  });
});

// Slider
const controls = ["chevron-left", "chevron-right"];

controls.map((item) => {
  const addButton = addElem(socItem.parentElement, "button", [
    ["className", `${item} position-absolute p-0 border-0`],
    ["innerHTML", `<i class="bi bi-${item}"></i>`],
  ]);

  let currentScrollValue;
  addButton.addEventListener("click", () => {
    addButton.classList.contains("chevron-left")
      ? (currentScrollValue = socItem.scrollLeft -= 37)
      : (currentScrollValue = socItem.scrollLeft += 37);

    showHideControl(currentScrollValue);
  });
});

// On scroll hide control
socItem.addEventListener("scroll", () => showHideControl(socItem.scrollLeft));

// Show and hide control
const showHideControl = (scrollValue) => {
  const chevronLeft = socItem.parentElement.querySelector(".chevron-left");
  const chevronRight = socItem.parentElement.querySelector(".chevron-right");

  scrollValue >= socItem.scrollWidth - socItem.clientWidth
    ? (chevronRight.style.visibility = "hidden")
    : scrollValue <= 0
    ? (chevronLeft.style.visibility = "hidden")
    : ((chevronRight.style.visibility = "visible"),
      (chevronLeft.style.visibility = "visible"));
};
});
