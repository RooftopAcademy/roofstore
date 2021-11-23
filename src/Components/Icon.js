const icons = {
	cart: "fas fa-shopping-cart",
	search: "fas fa-search",
	"pin-marker": "fas fa-map-marker-alt",
	clock: "fas fa-clock",
	home: "fas fa-home",
	tag: "fas fa-tag",
	"empty-heart": "far fa-heart",
	"full-heart": "fas fa-heart",
	"full-star": "fas fa-star",
	"half-star": "fas fa-star-half-alt",
	"empty-star": "far fa-star",
	"arrow-right": "fas fa-angle-right",
	enter: "fas fa-arrow-right",
	"arrow-down": "fas fa-angle-down",
	lightning: "fas fa-bolt",
	bag: "fas fa-shopping-bag",
	tshirt: "fas fa-tshirt",
	store: "fas fa-store-alt",
	list: "fas fa-list",
	headset: "fas fa-headset",
	download: "fas fa-download",
	'share' : "fas fa-share-alt",
	'free-shipping' : "fas fa-truck",
	'devolution' : "fas fa-undo",
	'medal' : "fas fa-medal",
	'coment': "far fa-comment-alt",
	'watch' : "fas fa-stopwatch",
	'trophy': "fas fa-trophy",
	'shield': "fas fa-shield-alt",
};

function Icon({ className, icon }) {
	return (
		<>
			<i className={`${className} ${icons[icon]}`}></i>
		</>
	);
}

export default Icon;
