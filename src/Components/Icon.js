const icons = {
  'cart': "fas fa-shopping-cart",
  'search': "fas fa-search",
  'pin-marker': "fas fa-map-marker-alt",
  'clock': "far fa-clock",
  'home': "fas fa-home",
  'tag': "fas fa-tag",
  'empty-heart': "far fa-heart",
  'full-heart': "fas fa-heart",
  'full-star': "fas fa-star",
  'half-star': "fas fa-star-half-alt",
  'empty-star': "far fa-star",
  'arrow-right': "fas fa-angle-right",
  'enter': "fas fa-arrow-right",
  'arrow-down': "fas fa-angle-down",
  'lightning': "fas fa-bolt",
}

function Icon(props) {
    return <>
    <i className={`${icons[props.icon]}`}></i>
    </>
}

export default Icon