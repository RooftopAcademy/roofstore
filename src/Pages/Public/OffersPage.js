import WebsiteLayout from '../../Layouts/WebsiteLayout'
import TextLine from '../../Components/TextLine'
import TextTag from '../../Components/TextTag'
import Icon from '../../Components/Icon'
import { Link } from 'react-router-dom'

const categoryOffersData = [
    {
        title: 'Todas las ofertas',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583341146061-todas-las-ofertas@3x.png',
    },
    {
        title: 'Ofertas relámpago',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1589556042906-relampago@3x.png',
    },
    {
        title: 'Audífonos',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583341411212-audifonos@3x.png',
    },
    {
        title: 'Supermercado',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583867863898-supermercado@3x.png',
    },
    {
        title: 'Notebooks',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583354134276-notebooks@3x.png',
    },
    {
        title: 'Menos de $2000',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583341233361-menos-de@3x.png',
    },
    {
        title: 'Calzado',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583354080423-zapatillas@3x.png',
    },
    {
        title: 'Celulares',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583341349527-celulares@3x.png',
    },
    {
        title: 'Ofertas Grandes',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1631908638808-camion.png',
    },
    {
        title: 'Especial Pymes',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1631307183227-casitav2.png',
    },
    {
        title: 'Herramientas',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1592947702168-herramientas@3x.png',
    },
    {
        title: 'Televisores',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1583341437743-televisores@3x.png',
    },
    {
        title: 'Bicicletas',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1592946620975-bicycles@3x.png',
    },
    {
        title: 'Colchones',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1592947545519-colchones@3x.png',
    },
    {
        title: 'Parlantes',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1585847817557-speaker@3x.png',
    },
    {
        title: 'Calefacción',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1597163728035-calefactor@3x.png',
    },
    {
        title: 'Videojuegos',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1597163382792-consolas@3x.png',
    },
    {
        title: 'Deportes y fitness',
        image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1598990157432-deportes-fitness@3x.png',
    },
]

const publicationsOffersData = [
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_951054-MLA47889291599_102021-T.webp',
        price: 65999,
        discount: 47,
        interestFree: 0,
        title: 'Bicicleta Mountain Bike Klatter Fm18k9am210d R29 21v Mtb Aluminio',
        made: 'Klatter',
        ship: {
            free: true,
            full: false,
        },
        offerOfDay: true,
        redirect: 'https://www.mercadolibre.com.ar/bicicleta-mountain-bike-klatter-fm18k9am210d-r29-21v-mtb-aluminio/p/MLA18552219',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_974663-MLA47846000904_102021-T.webp',
        price: 36999,
        discount: 22,
        interestFree: 0,
        title: 'Smart Tv Noblex Dk32x5000 Led Hd 32  220v',
        made: '',
        ship: {
            free: true,
            full: true,
        },
        offerOfDay: true,
        redirect: 'https://www.mercadolibre.com.ar/bicicleta-mountain-bike-klatter-fm18k9am210d-r29-21v-mtb-aluminio/p/MLA18552219',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_892329-MLA47845449263_102021-T.webp',
        price: 46999,
        discount: 5,
        interestFree: 12,
        title: 'Smart Tv Jvc Lt-43da5125 Led Full Hd 43  220v',
        made: 'Mercado Libre Electronica',
        ship: {
            free: true,
            full: true,
        },
        offerOfDay: true,
        redirect: 'https://www.mercadolibre.com.ar/bicicleta-mountain-bike-klatter-fm18k9am210d-r29-21v-mtb-aluminio/p/MLA18552219',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_761429-MLA47845664019_102021-T.webp',
        price: 59999,
        discount: 5,
        interestFree: 0,
        title: 'Smart Tv Bgh B5021uh6a Led 4k 50  220v',
        made: 'Mercado Libre Electronica',
        ship: {
            free: true,
            full: true,
        },
        offerOfDay: true,
        redirect: 'https://www.mercadolibre.com.ar/bicicleta-mountain-bike-klatter-fm18k9am210d-r29-21v-mtb-aluminio/p/MLA18552219',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_670396-MLA48158690358_112021-P.webp',
        price: 4049,
        discount: 0,
        interestFree: 0,
        title: 'Disco Sólido Interno Kingston Sa400s37/240g 240gb',
        made: '',
        ship: {
            free: true,
            full: false,
        },
        offerOfDay: false,
        redirect: 'https://articulo.mercadolibre.com.ar/MLA-928019187-disco-solido-interno-kingston-sa400s37240g-240gb-_JM',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_758306-MLA47762969111_102021-P.webp',
        price: 51999,
        discount: 8,
        interestFree: 18,
        title: 'Notebook Exo Smart M33 Intel Celeron Ram4gb Ssd64gb Win10 14',
        made: 'EXO',
        ship: {
            free: true,
            full: true,
        },
        offerOfDay: true,
        redirect: 'https://articulo.mercadolibre.com.ar/MLA-918999030-notebook-exo-smart-m33-intel-celeron-ram4gb-ssd64gb-win10-14-_JM',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_795154-MLA46724113124_072021-T.webp',
        price: 79999,
        discount: 12,
        interestFree: 0,
        title: 'Notebook Hp I3 Intel 11va Gen 4gb Ram Ssd 256 Ips Windows 10',
        made: '',
        ship: {
            free: true,
            full: true,
        },
        offerOfDay: true,
        redirect: 'https://articulo.mercadolibre.com.ar/MLA-929296479-notebook-hp-i3-intel-11va-gen-4gb-ram-ssd-256-ips-windows-10-_JM',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_603860-MLA31304447090_072019-T.webp',
        price: 3783,
        discount: 5,
        interestFree: 6,
        title: 'Manguera Riego Reforzada Tecnocom 3/4 X 25 M P',
        made: '',
        ship: {
            free: true,
            full: false,
        },
        offerOfDay: false,
        redirect: 'https://articulo.mercadolibre.com.ar/MLA-796582574-manguera-riego-reforzada-tecnocom-34-x-25-m-p-_JM',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_769756-MLA47631875432_092021-T.webp',
        price: 34999,
        discount: 9,
        interestFree: 0,
        title: 'Cafetera Oster Primalatte Bvstem6603 Automática Negra Y Acero Inoxidable Para Expreso Y Cápsulas Monodosis 220v',
        made: '',
        ship: {
            free: true,
            full: true,
        },
        offerOfDay: true,
        redirect: 'https://articulo.mercadolibre.com.ar/MLA-1107089785-cafetera-oster-primalatte-bvstem6603-automatica-negra-y-acero-inoxidable-para-expreso-y-capsulas-monodosis-220v-_JM',
    },
    {
        image: 'https://http2.mlstatic.com/D_Q_NP_2X_953279-MLA47937064551_102021-T.webp',
        price: 2500,
        discount: 39,
        interestFree: 0,
        title: 'Caja Navideña Regalo 7 Articulos Sidra, Pan Dulce, Turron',
        made: '',
        ship: {
            free: false,
            full: true,
        },
        offerOfDay: false,
        redirect: 'https://articulo.mercadolibre.com.ar/MLA-1107089785-cafetera-oster-primalatte-bvstem6603-automatica-negra-y-acero-inoxidable-para-expreso-y-capsulas-monodosis-220v-_JM',
    },
]

function CategoryOfferItem({title, image}) {
    return (
        <div className="bg-white rounded shadow-sm row padding-none fd-col jc-center OffersPage-p-relative OffersPage-jc-center OffersPage-p-0-left OffersPage-p-0-right OffersPage-offer-item OffersPage-m-right ">
            <div className="col padding-none">
                <img width="48px" height="48px" className="OffersPage-m-bottom" src={image} alt={title} />
            </div>
            <div className="col padding-none">
                <p className="txt-grey txt-center OffersPage-txt-s OffersPage-offer-title OffersPage-active ">{title}</p>
            </div>
        </div>
    )
}

function PublicationItem({image, price, discount, interestFree, title, made, ship: {free, full}, offerOfDay, redirect}) {
    const oldPrice = new Intl.NumberFormat('es-ES').format(price)
    const newPrice = new Intl.NumberFormat('es-ES').format((price - (price * discount / 100)).toFixed())
    const minDiscount = 5

    return (
        <Link to={redirect} className="bg-white col padding-none txt-black link br-top br-left OffersPage-6-col OffersPage-p-0-left OffersPage-publication-h">
            <div className="col padding-none OffersPage-jc-center ">
                <img width="144px" height="144px" src={image} alt={title} />
            </div>
            {offerOfDay && <TextTag text="OFERTA DEL DÍA"/>}
            {discount > 0 && <p className="txt-strike OffersPage-txt-light-grey OffersPage-txt-s">$ {oldPrice}</p>}
            <div className="col padding-none OffersPage-ai-center">
                <span className="OffersPage-txt-b OffersPage-m-right">$ {newPrice}</span>
                {discount > minDiscount && <span className="OffersPAge-txt-m txt-green"> {discount}% OFF</span>}
            </div>
            {interestFree !== 0 && <p className="OffersPage-txt-s txt-green">Hasta {discount} cuotas sin interés</p>}
            <div className="col padding-none OffersPage-ai-center txt-green OffersPage-txt-s OffersPage-m-bottom">
                {free && <p className="txt-bold OffersPage-m-right">Envío gratis</p>}
                {full && <><Icon icon="lightning" /><p className="txt-bold ">&nbsp;FULL</p></>}
            </div>
            <p className="OffersPAge-txt-m txt-grey txt-overflow OffersPage-publication-title">{title}</p>
            {made && <p className="OffersPAge-txt-m OffersPage-txt-light-grey">por {made}</p>}
        </Link>
    )
}

function OffersPage() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const currentPage = Object.fromEntries(urlSearchParams.entries()).page || 1
    const previousHidden = (currentPage > 1) ? '' : 'OffersPage-v-hidden'
    const nextPage = Number(currentPage) + 1
    const previousPage = Number(currentPage) - 1

    const carrouselItems = categoryOffersData.map(
        ({title, image}, i) => <CategoryOfferItem key={i} title={title} image={image} />
    )

    const publicationsItems = publicationsOffersData.map(
        ({image, price, discount, interestFree, title, made, ship, offerOfDay, redirect}, i) =>
            <PublicationItem
                key={i}
                image={image}
                price={price}
                discount={discount}
                interestFree={interestFree}
                title={title}
                made={made}
                ship={ship}
                offerOfDay={offerOfDay}
                redirect={redirect}
            />
    )

    return (
        <WebsiteLayout>
            <main className="bg-main">
                <div className="bg-white shadow-sm row padding-none OffersPage-m-bottom">
                    <div className="col ">
                        <TextLine text="10.000 productos" className="OffersPage-txt-light-grey"/>
                    </div>
                    <div className="col OffersPage-ai-center txt-blue">
                        <p className="OffersPage-m-right ">Filtrar</p>
                        <Icon icon="arrow-down"/>
                    </div>
                </div>

                <div className="row overflow-scrollx padding-none OffersPage-p-0-left OffersPage-m-bottom">
                    { carrouselItems }
                </div>

                <div className="row fw-wrap padding-none">
                    { publicationsItems }
                </div>

                <div className="row">
                    <Link to={`/offers?page=${previousPage}`} className={"col OffersPage-txt-light-grey OffersPage-ai-center " + previousHidden}>
                        <Icon icon="arrow-right" />
                        <p>&nbsp;Anterior</p>
                    </Link>
                    <div className="col OffersPage-ai-center">
                        <div className="col txt-bold txt-center OffersPage-bg-light-grey OffersPage-pagination ">
                            <Link className="link txt-black" to={`/offers?page=${currentPage}`}>
                                <p>{currentPage}</p>
                            </Link>
                        </div>
                    </div>
                    <Link to={`/offers?page=${nextPage}`} className="col link OffersPage-txt-light-grey OffersPage-ai-center">
                        <p className="OffersPage-m-right">&nbsp;Siguiente</p>
                        <Icon icon="arrow-right" />
                    </Link>
                </div>

            </main>
        </WebsiteLayout>
    )
}

export default OffersPage