import TextLink from "../../Components/TextLink"

function FooterMenu() {
    return (
        <div className='row'>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/my-acount'} className={'txt-black m-bottom-0'}>Mi cuenta</TextLink>
                <TextLink url={'/navigation'} className={'txt-black m-bottom-0'}>Historial</TextLink>
                <TextLink url={'/favourites'} className={'txt-black m-bottom-0'}>Favoritos</TextLink>
                <TextLink url={'/categories'} className={'txt-black m-bottom-0'}>Categorias</TextLink>
                <TextLink url={'/help'} className={'txt-black'}>Ayuda</TextLink>
            </div>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/shopping-history'} className={'txt-black m-bottom-0'}>Mis Compras</TextLink>
                <TextLink url={'/offers'} className={'txt-black m-bottom-0'}>Ofertas</TextLink>
                <TextLink url={'/officialStores'} className={'txt-black m-bottom-0'}>Tiendas Oficiales</TextLink>
                <TextLink url={'/mercado-puntos'} className={'txt-black m-bottom-0'}>Roof Points</TextLink>
                <TextLink url={'/sell/chooseCategory'} className={'txt-black'}>Vender</TextLink>
            </div>
        </div>
    )
}

export default FooterMenu
