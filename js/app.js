const headerBtns = document.querySelectorAll(".header-menu-item");
const sect1= document.getElementsByClassName('section-skills')[0];
const sect2 = document.getElementsByClassName('section-project')[0];
const sect3 = document.getElementsByClassName('section-contact')[0];

headerBtns.forEach((item, index) => {
	item.addEventListener('click', () => {


switch (index) {
	case 0:
	sect1.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
	break;
	case 1:
	sect2.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
	break;
	case 2:
	sect3.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
	break;
	default:
		// statements_def
		break;
}

	});
}); 