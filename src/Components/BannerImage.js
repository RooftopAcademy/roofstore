/* eslint-disable jsx-a11y/img-redundant-alt */
function BannerImage({
  src = "",
  alt = "Banner Image",
}) {

  return (
    <div>
      <img width="100%" height="255px" src={src} alt={alt} />
    </div>
  )
}

export default BannerImage
