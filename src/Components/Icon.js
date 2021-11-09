
function Icon(props) {
  const icons = {
    cart: "fas fa-shopping-cart",
    buscar: "fas fa-search",
    pinMarker: "fas fa-map-marker-alt",
    historial: "far fa-clock",
    home: "fas fa-home",
    ventas: "fas fa-tag",
    like: "far fa-heart",
    liked: "fas fa-heart",
    fullStar: "fas fa-star",
    halfStar: "fas fa-star-half-alt",
    star: "far fa-star",
    arrow: "fas fa-angle-right",
    enter: "fas fa-arrow-right",
    down: "fas fa-angle-down",
    lightning: "fas fa-bolt",
  }
    return <>
    <i className={`${icons[props.icon]}`}></i>
    </>
}

export default Icon