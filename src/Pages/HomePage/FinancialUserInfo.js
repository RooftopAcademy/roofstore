
function FinancialUserInfo() {

    const url = 'http://www.usuariosfinancieros.gob.ar'
    const image = '/images/banner-usuarios-financieros.svg'
    const altText = 'Usuarios Financieros'

    return (
        <div className="row bg-white">
            <div className="col HomePage-col-12 padding-none row fd-col">
                <a className={"link"} href={url} target={"_blank"} rel={"noopener noreferrer"}>
                    <img className="HomePage-img" src={image} alt={altText}/>
                </a>
            </div>
        </div>
    )
}

export default FinancialUserInfo