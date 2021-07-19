import { addElem, elem } from "../utils.js";

const reviewsContainer = elem(".cardOfReviews");

for (let i = 0; i < 3; i++) {
  const card = addElem(reviewsContainer, 'div', [
		['className', 'reviewCard bg-light pt-3 px-3 pb-2 my-3'],
		['innerHTML', `
			<div class="avatar bg-lightGray mx-auto rounded-circle"></div>
			<div class="headline bg-lightGray mx-auto rounded-pill my-3"></div>
		`]
	]);

	const stars = addElem(card, 'div', [
		['className', 'stars txt-lightGray mx-auto']
	]);

	for (let j = 0; j < 5; j++) {
		addElem(stars, 'i', [
			['className', 'bi bi-star-fill mx-1']
		]);
	};

	for (let j = 0; j < 4; j++) {
		addElem(card, 'div', [
			['className', `column bg-lightGray mx-auto rounded-pill my-2`],
			['style.width', `${100 - (5 * j)}%`]
		]);
	}
};
