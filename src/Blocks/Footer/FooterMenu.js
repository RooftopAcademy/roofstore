import TextLink from "../../Components/TextLink"

function FooterMenu() {
    return (
        <div className='row'>
            <div className='col col-6'>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Mi cuenta</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Historial</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Favoritos</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Categorias</TextLink>
                <TextLink url={'/login'} className={'txt-black d-block'}>Ayuda</TextLink>
            </div>
            <div className='col col-6'>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Mis Compras</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Ofertas</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Tiendas Oficiales</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0 d-block'}>Mercado Puntos</TextLink>
                <TextLink url={'/login'} className={'txt-black d-block'}>Vender</TextLink>
            </div>
        </div>
    )
}

export default FooterMenu
