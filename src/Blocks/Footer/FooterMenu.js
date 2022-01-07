import TextLink from "../../Components/TextLink"

function FooterMenu() {

    const myAccountText = 'Mi cuenta'
    const historyText = 'Historial'
    const favouritesText = 'Favoritos'
    const categoriesText = 'Categorias'
    const helpText = 'Ayuda'
    const myShoppingText = 'Mis Compras'
    const offersText = 'Ofertas'
    const oficialStoreText = 'Tiendas Oficiales'
    const storePointText = 'Roofstore Puntos'
    const sellText = 'Vender'

    return (
        <div className='row'>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/my-acount'} className={'txt-black m-bottom-0'}>{myAccountText}</TextLink>
                <TextLink url={'/navigation'} className={'txt-black m-bottom-0'}>{historyText}</TextLink>
                <TextLink url={'/favourites'} className={'txt-black m-bottom-0'}>{favouritesText}</TextLink>
                <TextLink url={'/categories'} className={'txt-black m-bottom-0'}>{categoriesText}</TextLink>
                <TextLink url={'/help'} className={'txt-black'}>{helpText}</TextLink>
            </div>
            <div className='col Footer-col-6 Footer-d-flex fd-col'>
                <TextLink url={'/shopping-history'} className={'txt-black m-bottom-0'}>{myShoppingText}</TextLink>
                <TextLink url={'/offers'} className={'txt-black m-bottom-0'}>{offersText}</TextLink>
                <TextLink url={'/officialStores'} className={'txt-black m-bottom-0'}>{oficialStoreText}</TextLink>
                <TextLink url={'/mercado-puntos'} className={'txt-black m-bottom-0'}>{storePointText}</TextLink>
                <TextLink url={'/sell/chooseCategory'} className={'txt-black'}>{sellText}</TextLink>
            </div>
        </div>
    )
}

export default FooterMenu
