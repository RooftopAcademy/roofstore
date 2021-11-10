/* eslint-disable jsx-a11y/img-redundant-alt */
function BannerImage(props) {
  const {
    src = "https://http2.mlstatic.com/D_NQ_908991-MLA48135975612_112021-OO.webp",
    alt = "Banner Image",
  } = props
  
  return (
    <div>
      <img
        width="100%"
        height="255px"
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default BannerImage
