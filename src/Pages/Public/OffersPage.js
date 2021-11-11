import WebsiteLayout from '../../Layouts/WebsiteLayout'
import TextLine from '../../Components/TextLine'
import Icon from '../../Components/Icon'
import TextTag from '../../Components/TextTag'
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
]

function CategoryOfferItem({title, image}) {
    return (
        <div className="
            row
            padding-none
            shadow-sm
            fd-col
            jc-center
            bg-white
            rounded
            OffersPage-jc-center
            OffersPage-p-0-left
            OffersPage-p-0-right
            OffersPage-offer-item
            OffersPage-m-right
        ">
            <div className="col padding-none">
                <img width="48px" height="48px" className="OffersPage-m-bottom" src={image} alt={title} />
            </div>
            <div className="col padding-none">
                <p className="txt-grey txt-center OffersPage-txt-s OffersPage-offer-title">{title}</p>
            </div>
        </div>
    )
}

function PublicationItem({image, price, discount, interestFree, title, made, ship: {free, full}, offerOfDay, redirect}) {
    const newPrice = (price - (price * discount / 100)).toFixed();

    return (
        <Link to={redirect} className="
            col
            padding-none
            bg-white
            txt-black
            link
            br-top
            br-left
            OffersPage-6-col
            OffersPage-p-0-left
        ">
            <div className="col padding-none OffersPage-jc-center ">
                <img width="144px" height="144px" src={image} alt={title} />
            </div>
            <TextTag text="OFERTA DEL DÍA"/>
            <p className="txt-strike OffersPage-txt-light-grey OffersPage-txt-s">$ {price}</p>
            <div className="col padding-none OffersPage-ai-center">
                <span className="OffersPage-price OffersPage-m-right">$ {newPrice}</span>
                <span className="txt-green"> {discount}% OFF</span>
            </div>
            {interestFree !== 0 && <p className="txt-green">Hasta {discount} cuotas sin interés</p>}
            <div className="col padding-none OffersPage-ai-center txt-green OffersPage-txt-s">
                {free && <p className="txt-bold OffersPage-m-right">Envío gratis</p>}
                {full && <><Icon icon="lightning" /><p className="txt-bold OffersPage-m-left">FULL</p></>}
            </div>
        </Link>
    )
}

function OffersPage() {
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
                <div className="row padding-none bg-white shadow-sm OffersPage-m-bottom">
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
            </main>
        </WebsiteLayout>
    )
}

export default OffersPage