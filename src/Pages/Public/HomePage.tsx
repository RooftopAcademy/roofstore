import { Link } from 'react-router-dom'
import TextLine from '../../Components/TextLine'
import TextLink from '../../Components/TextLink'
import WebsiteLayout from '../../Layouts/WebsiteLayout'
import Advertisement from '../HomePage/Advertisement'
import CardLayout from '../HomePage/CardLayout'
import Carrousel from '../HomePage/Carrousel'
import CreateAccountCard from '../HomePage/CreateAccountCard'
import PaymentInfo from '../HomePage/PaymentInfo'
import ProductItem from '../HomePage/ProductItem'
import SubscriptionBenefitItem from '../HomePage/SubscriptionBenefitItem'
import SubscriptionCard from '../HomePage/SubscriptionCard'
import CategoryItem from '../HomePage/CategoryItem'
import MercadoPuntosBenefitItem from '../HomePage/MercadoPuntosBenefitItem'
import ShoppingInfo from '../HomePage/ShoppingInfo'
import RegretSectionInfo from '../HomePage/RegretSectionInfo'
import FinancialUserInfo from '../HomePage/FinancialUserInfo'
import OfficialStoreItem from '../HomePage/OfficialStoreItem'
import useFetch from '../../hooks/useFetch'
import { getAdvertisement, getBanner } from '../../requests/advertisements'
import { getPopularCategories } from '../../requests/categories'
import { getBenefits } from '../../requests/mercadoPunto'
import { getOfficialStores } from '../../requests/stores'
import { OfficialStore } from '../../types/stores'
import { getProducts } from '../../requests/products'
import { getSubscriptionBenefits } from '../../requests/subscriptions'

function HomePage() {

    const {data: advertisementList} = useFetch(getAdvertisement)
    const {data: bannerList} = useFetch(getBanner)
    const {data: categoryList} = useFetch(getPopularCategories)
    const {data: mercadoPuntosBenefitList} = useFetch(getBenefits)
    const {data: officialStoreList} = useFetch<Array<OfficialStore>>(getOfficialStores)
    const {data: productList} = useFetch(getProducts)
    const {data: subscriptionItemList} = useFetch(getSubscriptionBenefits)

    const vistoTitle = "Visto recientemente"
    const vistoFooterLinkText = "Ver historial de navegación"
    const vistoFooterLinkUrl = "/login"
    const inspiradoTitle = "Inspirado en lo último que viste"
    const inspiradoFooterLinkUrl = "/login"
    const verMas = "Ver más"
    const verTodas = "Ver todas"
    const relacionadoTitle = "Relacionado con tus visitas en Computación"
    const relacionadoFooterLinkUrl = "/login"
    const ofertasTitle = "Ofertas"
    const ofertasFooterLinkUrl = "/offers"
    const subsTitle = "Suscribite al nivel 6"
    const subsPeriod = "el primer mes"
    const subsFooterLinkUrl = "/login"
    const subsCardText = "Conseguí los mejores beneficios en Roofstore y RoofPay"
    const beneficiosTitle = "Beneficios de Mercado Puntos"
    const beneficiosLinkText = "Ver todos los beneficios"
    const beneficiosLinkUrl = "/login"
    const elegidosTitle = "Elegidos para vos en Computación"
    const elegidosFooterLinkUrl = "/login"
    const comprar = "comprar"
    const tiendasText = "Tiendas oficiales"
    const tiendasLink = "/login"
    const interesTitle = "También puede interesarte"
    const interesFooterLinkUrl = "/login"
    const histTitle = "Historial de navegación"
    const histFooterLinkText = "Ver historial de navegación"
    const histFooterLinkUrl = "/login"
    const categoriasText = "Categorías Populares"
    const verMasCategorias = "Ver más categorías"


    return (
        <WebsiteLayout>
            <div className="container bg-main padding-none m-bottom-0">

                {bannerList? <Carrousel banners={bannerList} visible={false} /> : ""}
                

                <PaymentInfo/>

                {/* Visto recientemente */}
                <CardLayout
                    title={vistoTitle}
                    footerLinkText={vistoFooterLinkText}
                    footerLinkUrl ={vistoFooterLinkUrl}>

                    {productList? <ProductItem item = {productList[0]} /> : ''}
                    
                </CardLayout>

                {/* Inspirado en lo último que viste */}
                <CardLayout 
                    title={inspiradoTitle}
                    footerLinkText={verMas}
                    footerLinkUrl ={inspiradoFooterLinkUrl}>

                    {productList?.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                                dataTestId={`product-detail-${product.id}`}
                            />
                        )
                    })}
                </CardLayout>

                <CreateAccountCard />

                {/* Relacionado con tus visitas en */}
                <CardLayout 
                    title={relacionadoTitle}
                    footerLinkText={verTodas}
                    footerLinkUrl ={relacionadoFooterLinkUrl}>

                    {productList?.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                            />
                        )
                    })}
                </CardLayout>

                {/* Ofertas */}
                <CardLayout 
                    title={ofertasTitle}
                    footerLinkText={verTodas}
                    footerLinkUrl ={ofertasFooterLinkUrl}>
                    
                    {productList?.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                            />
                        )
                    })}
                </CardLayout>

                {/* Suscripciones */}
                <SubscriptionCard 
                    title={subsTitle}
                    price={449}
                    period={subsPeriod}
                    footerLinkUrl ={subsFooterLinkUrl}>

                    <div className="p-0">
                        <TextLine
                            text={subsCardText}
                            className="txt-black txt-bold HomePage-txt-start HomePage-fs-14"/>
                    </div>

                    {subscriptionItemList?.map(subscriptionBenefit => {
                        return (
                            <SubscriptionBenefitItem
                                key={subscriptionBenefit.id}
                                item={subscriptionBenefit}
                            />
                        )
                    })}
                </SubscriptionCard>

                {/* Beneficios de Mercado Puntos */}
                <CardLayout 
                    title={beneficiosTitle}
                    footerLinkText={beneficiosLinkText}
                    footerLinkUrl ={beneficiosLinkUrl}>

                    <div className="HomePage-m--4 br-btm"> 
                        <div className="row p-0 fw-wrap">

                            {mercadoPuntosBenefitList?.map(benefit => {
                                return (
                                    <div className="HomePage-col-6 HomePage-p-sm" key={benefit.id}>
                                        <MercadoPuntosBenefitItem item={benefit}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </CardLayout>

                {/* Anuncios */}
                {advertisementList? (
                    <>
                        <Advertisement item={advertisementList[0]} textLink={verMas} />
                        <Advertisement item={advertisementList[1]} textLink={verMas} />
                    </>
                    ) : ''
                }

                {/* Elegidos para vos */}
                <CardLayout 
                    title={elegidosTitle}
                    footerLinkText={verMas}
                    footerLinkUrl ={elegidosFooterLinkUrl}>
                    
                    {productList?.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                            />
                        )
                    })}
                </CardLayout>

                {/* Tiendas Oficiales */}
                <div className="row padding-none m-bottom-3">
                    <div className="col HomePage-col-12 padding-none">
                        <div className="row">
                            <TextLine className="txt-grey HomePage-txt-start HomePage-fs-18" text={tiendasText}/>
                            <TextLink url={tiendasLink}>{verMas}</TextLink>
                        </div>

                        <div className="row padding-none overflow-scrollx">
                            {officialStoreList ? officialStoreList.map((item: OfficialStore) => {
                                return (
                                    <OfficialStoreItem officialStore={item} key={item.id}/>
                                )
                            }) : ""}
                        </div>
                    </div>  
                </div>


                {/* También puede interesarte */}
                <CardLayout 
                    title={interesTitle}
                    footerLinkText={verMas}
                    footerLinkUrl ={interesFooterLinkUrl}>
                    
                    {productList?.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                            />
                        )
                    })}
                </CardLayout>

                {/* Anuncios */}
                {advertisementList? (
                    <>
                        <Advertisement item={advertisementList[2]} textLink={verMas} />
                        <Advertisement item={advertisementList[3]} textLink={verMas} />
                    </>
                    ) : ''
                }
                
                {/* Historial de navegación */}
                <CardLayout 
                    title={histTitle}
                    footerLinkText={histFooterLinkText}
                    footerLinkUrl ={histFooterLinkUrl}>
                    
                    {productList?.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                            />
                        )
                    })}
                </CardLayout>
                
                {/* Categorías populares */}
                <div className="row m-bottom-0">
                    <div className="col HomePage-col-12 padding-none">
                        <div className="HomePage-m--4">
                            <TextLine className="txt-grey HomePage-txt-start HomePage-p-sm HomePage-fs-18" text={categoriasText}/>
                            <div className="row padding-none fw-wrap">
                                { categoryList?.map(item => {
                                    return (
                                        <div className="HomePage-col-6 HomePage-p-sm" key={item.id}>
                                            <CategoryItem category={item}/>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="HomePage-p-sm">
                                <Link className="link" to={"/categories"}>
                                    <div className="p-0 bg-white rounded">
                                        <TextLine className="txt-blue HomePage-fs-16" text={verMasCategorias} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ShoppingInfo />

                <RegretSectionInfo />

                <FinancialUserInfo />

            </div>

        </WebsiteLayout>
    )
}

export default HomePage