import { addElem, elem, elems } from "../utils.js";

const skilsObj = [
  {
    title: "Дизайн",
	langAttr: 'skillDesign',
    skills: [
      {
        Icon: "figma.svg",
        Name: "Figma",
				percentage: '91'
      },
			{
        Icon: "adobe-photoshop.svg",
        Name: "Adobe Photoshop",
				percentage: '73'
      },
			{
        Icon: "adobe-illustrator.svg",
        Name: "Adobe Illustrator ",
				percentage: '65'
      },
			{
        Icon: "adobe-xd.svg",
        Name: "Adobe XD",
				percentage: '79'
      },
			{
        Icon: "coreldraw_icon.svg",
        Name: "CorelDRAW",
				percentage: '49'
      },
    ],
  },
	{
    title: "Верстка",
	langAttr: 'layout',
    skills: [
      {
        Icon: "html5-icon.svg",
        Name: "HTML",
				percentage: '87'
      },
			{
        Icon: "css3-icon.svg",
        Name: "CSS",
				percentage: '87'
      },
			{
        Icon: "javascript-icon.svg",
        Name: "JavaScript",
				percentage: '80'
      },
			{
        Icon: "bootstrap-icon.svg",
        Name: "Bootstrap",
				percentage: '94'
      },
			{
        Icon: "jquery-icon.svg",
        Name: "jQuery",
				percentage: '65'
      },
    ],
  },
];

const skillsContainer = elem('#skills-container')

skilsObj.map(item => {
	const skillBlock = addElem(skillsContainer, 'div', [
		['className', 'skillBlock p-0'],
		['innerHTML', `
			<h4 class="text-center my-4" lang-key="${item.langAttr}">${item.title}</h4>
		`]
	]);

	const scillType = addElem(skillBlock, 'div', [
		['className', 'skill-type text-light']
	]);

	item.skills.forEach(skill => {
		addElem(scillType, 'div', [
			['className', 'd-flex justify-content-between my-3 align-items-center'],
			['innerHTML', `
				<div class="img">
					<img src="assets/icons/${skill.Icon}" loading="lazy" alt="${skill.Name}" class="w-100" />
				</div>
				<div class="col-10">
					<p class="m-0">${skill.Name}</p>
					<div class="progress bg-white">
						<div class="progress-bar" style="width: ${skill.percentage}%;"></div>
					</div>
				</div>
			`]
		]);
	});
});