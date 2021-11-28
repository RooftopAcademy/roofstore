import TextLink from "../../Components/TextLink"

function FooterMenu() {
    return (
        <div className='row'>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Mi cuenta</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Historial</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Favoritos</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Categorias</TextLink>
                <TextLink url={'/login'} className={'txt-black'}>Ayuda</TextLink>
            </div>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/shopping-history'} className={'txt-black m-bottom-0'}>Mis Compras</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Ofertas</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Tiendas Oficiales</TextLink>
                <TextLink url={'/login'} className={'txt-black m-bottom-0'}>Mercado Puntos</TextLink>
                <TextLink url={'/login'} className={'txt-black'}>Vender</TextLink>
            </div>
        </div>
    )
}

export default FooterMenu
