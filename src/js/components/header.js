import { addElem, elem } from "./utils.js";

// Open menu list
const burgerMenuIcon = elem('#menu-toggle-button').children[0],
 			menuList = elem('#collapse-block');

burgerMenuIcon.addEventListener('click', () => {
	menuList.classList.toggle('show-element');

	setTimeout(() => {
		menuList.classList.toggle('slow-slide');
	}, 1);
});

// Close menu list
const XIcon = elem('#close-icon').children[0];

XIcon.addEventListener('click', () => {
	menuList.classList.remove('slow-slide');

	setTimeout(() => {
		menuList.classList.remove('show-element');
	}, 500);
});

// Social networks object
const appsIcons = [
	{
		name: 'instagram',
		link: 'bi bi-instagram',
		color: '#DD2A7B'
	},
	{
		name: 'facebook',
		link: 'bi bi-facebook',
		color: '#3b5998'
	},
	{
		name: 'twitter',
		link: 'bi bi-twitter',
		color: '#1DA1F2'
	},
	{
		name: 'vkontakte',
		img: true,
		link: '',
		color: '#45668e'
	},
	{
		name: 'telegram',
		link: 'bi bi-telegram',
		color: '#0088cc'
	},
	{
		name: 'whatsapp',
		link: 'bi bi-whatsapp',
		color: '#25D366'
	},
	{
		name: 'behance',
		img: true,
		link: '',
		color: '#c836c8'
	},
	{
		name: 'skype',
		link: 'bi bi-skype',
		color: '#00aff0' 
	}
];


const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const socNet = elem('#socNetIcons');

let iconsBlock;

appsIcons.map(item => {

	iconsBlock = addElem(socNet, 'div', [
		['className', 'iconsBlock text-center']
	]);

	const iconShow = () => {
		let result;
		if (item.img) {
			result = `<img src="./assets/img/${item.name}.svg" alt="${capitalizeFirstLetter(item.name)}">`;
		}else {
			result = `<i class="bi bi-${item.name}"></i>`;
		}

		return result;
	}

	iconsBlock.innerHTML = `
		<p class="${item.name} rounded-circle m-0" title="${capitalizeFirstLetter(item.name)}">
			<a href="#" target="_blank">
				${iconShow()}
			</a>
		</p>
	`;

	iconsBlock.children[0].addEventListener('mouseenter', (r) => {
	 r.target.style.background = item.color;
	}, false);

	iconsBlock.children[0].addEventListener('mouseleave', (r) => {
	 r.target.style.background = '';
	}, false);

});


// Slider of icons
const controls = ['chevron-left','chevron-right'];

controls.map(item => {
	const addButton = addElem(socNet.parentElement, 'button', [
		['className', `${item} position-absolute p-0 border-0`],
		['innerHTML', `<i class="bi bi-${item}"></i>`]
	]);

	let currentScrollValue;

	addButton.addEventListener('click', () => {
		addButton.classList.contains('chevron-left')
      ? (currentScrollValue = socNet.scrollLeft -= 37)
      : (currentScrollValue = socNet.scrollLeft += 37);

      showHideControl(currentScrollValue)
	});

});

// On scroll hide control
socNet.addEventListener('scroll', () => showHideControl(socNet.scrollLeft));

	// Show and hide control
const showHideControl = (scrollValue) => {
	const chevronLeft = elem('.chevron-left');
	const chevronRight = elem('.chevron-right');

	scrollValue >= socNet.scrollWidth - socNet.clientWidth
      ? (chevronRight.style.visibility = "hidden")
      : scrollValue <= 0
      ? (chevronLeft.style.visibility = "hidden")
      : ((chevronRight.style.visibility = "visible"),
      	(chevronLeft.style.visibility = "visible"));
};