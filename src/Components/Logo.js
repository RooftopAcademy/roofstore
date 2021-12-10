function Logo({imgSrc, imgAlt, className = ''}) {
    return (
        <img src={imgSrc} alt={imgAlt} className={className} />
    )
}

export default Logo
