import { Link } from "react-router-dom"

function BannerImage({ src = "", alt = "", redirect = "/" }) {
  return (
    <Link to={redirect}>
      <img width="100%" height="255px" src={src} alt={alt} />
    </Link>
  )
}

export default BannerImage
