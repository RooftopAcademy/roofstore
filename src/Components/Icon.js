const icons = {
	'arrow-down': "fas fa-angle-down",
	'arrow-left': 'fas fa-arrow-left',
	'arrow-right': "fas fa-angle-right",
	'bag': "fas fa-shopping-bag",
	'blender': "fas fa-blender",
	'car': "fas fa-car",
	'cart': "fas fa-shopping-cart",
	'cell-phone': "fas fa-mobile-alt",
	'clock': "fas fa-clock",
	'coment': "far fa-comment-alt",
	'couch': "fas fa-couch",
	'credit-card': "fas fa-credit-card",
	'devolution': "fas fa-undo",
	'dni': 'far fa-id-card',
	'download': "fas fa-download",
	'ellipsis-v': "fas fa-ellipsis-v",
	'empty-heart': "far fa-heart",
	'empty-star': "far fa-star",
	'enter': "fas fa-arrow-right",
	'envelope': 'far fa-envelope',
	'file': "fas fa-file-download",
	'free-shipping': "fas fa-truck",
	'full-heart': "fas fa-heart",
	'full-star': "fas fa-star",
	'half-star': "fas fa-star-half-alt",
	'headset': "fas fa-headset",
	'home': "fas fa-home",
	'lightnin': "fas fa-bolt",
	'list': "fas fa-list",
	'lock': 'fas fa-unlock-alt',
	'microphone': "fas fa-microphone-alt",
	'medal': "fas fa-medal",
	'paper-clip': "fas fa-paperclip",
	'pin-marker': "fas fa-map-marker-alt",
	'search': "fas fa-search",
	'send': "far fa-paper-plane",
	'share': "fas fa-share-alt",
	'shield': "fas fa-shield-alt",
	'store': "fas fa-store-alt",
	'tag': "fas fa-tag",
	'trophy': "fas fa-trophy",
	'tshirt': "fas fa-tshirt",
	'watch': "fas fa-stopwatch",
	'dni': 'far fa-id-card',
	'heart-regular': 'far fa-heart',
	'heart-solid': 'fas fa-heart'
	'x': 'fas fa-times',
	'tv': 'fas fa-tv',
	'percent': 'fas fa-percent',
	'money': 'far fa-money-bill-alt',
	'truck': 'fas fa-truck-moving',
};

function Icon({ className, icon, onClick=null, dataTestId }) {
	return (<i 
		role="figure" 
		className={`${className} ${icons[icon]}`} 
		onClick={onClick} 
		data-testid={dataTestId}
		></i>
	)
}

export default Icon;