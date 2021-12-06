import TextLink from "../../Components/TextLink"

function FooterMenu() {
    return (
        <div className='row'>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/my-acount'} className={'txt-black m-bottom-0'}>Mi cuenta</TextLink>
                <TextLink url={'/search'} className={'txt-black m-bottom-0'}>Historial</TextLink>
                <TextLink url={'/favourite'} className={'txt-black m-bottom-0'}>Favoritos</TextLink>
                <TextLink url={'/categories'} className={'txt-black m-bottom-0'}>Categorias</TextLink>
                <TextLink url={'/help'} className={'txt-black'}>Ayuda</TextLink>
            </div>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/shopping-history'} className={'txt-black m-bottom-0'}>Mis Compras</TextLink>
                <TextLink url={'/off'} className={'txt-black m-bottom-0'}>Ofertas</TextLink>
                <TextLink url={'/tiendas-oficiales'} className={'txt-black m-bottom-0'}>Tiendas Oficiales</TextLink>
                <TextLink url={'/mercado-puntos'} className={'txt-black m-bottom-0'}>Mercado Puntos</TextLink>
                <TextLink url={'/sell'} className={'txt-black'}>Vender</TextLink>
            </div>
        </div>
    )
}

export default FooterMenu
