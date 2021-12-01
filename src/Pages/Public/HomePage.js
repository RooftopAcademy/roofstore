import { Link } from 'react-router-dom'
import TextLine from '../../Components/TextLine'
import TextLink from '../../Components/TextLink'
import WebsiteLayout from '../../Layouts/WebsiteLayout'
import Advertisement from '../HomePage/Advertisement'
import advertisementList from '../HomePage/Data/advertisementsData'
import CardLayout from '../HomePage/CardLayout'
import Carrousel from '../HomePage/Carrousel'
import CreateAccountCard from '../HomePage/CreateAccountCard'
import productList from '../HomePage/Data/productsData'
import PaymentInfo from '../HomePage/PaymentInfo'
import ProductItem from '../HomePage/ProductItem'
import SubscriptionBenefitItem from '../HomePage/SubscriptionBenefitItem'
import SubscriptionCard from '../HomePage/SubscriptionCard'
import CategoryItem from '../HomePage/CategoryItem'
import MercadoPuntosBenefitItem from '../HomePage/MercadoPuntosBenefitItem'
import subscriptionItemList from '../HomePage/Data/subscriptionBenefitsData'
import mercadoPuntosBenefitList from '../HomePage/Data/mercadoPuntosBenefitsData'
import categoryList from '../HomePage/Data/categoriesData'
import ShoppingInfo from '../HomePage/ShoppingInfo'
import RegretSectionInfo from '../HomePage/RegretSectionInfo'
import FinancialUserInfo from '../HomePage/FinancialUserInfo'
import OfficialStoreItem from '../HomePage/OfficialStoreItem'
import officialStoreList from '../HomePage/Data/officialStoresData'
import bannerList from '../HomePage/Data/carrouselData'

function HomePage() {
    return (
        <WebsiteLayout>
            <div className="container bg-main padding-none m-bottom-0">

                <Carrousel bannerList={bannerList}/>

                <PaymentInfo/>

                {/* Visto recientemente */}
                <CardLayout
                    title="Visto recientemente"
                    footerLinkText="Ver historial de navegación"
                    footerLinkUrl ="/login">

                    <ProductItem
                        item = {productList[0]}
                    />
                </CardLayout>

                {/* Inspirado en lo último que viste */}
                <CardLayout 
                    title="Inspirado en lo último que viste"
                    footerLinkText="Ver más"
                    footerLinkUrl ="/login">

                    {productList.map(product => {
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
                    title="Relacionado con tus visitas en Computación"
                    footerLinkText="Ver todas"
                    footerLinkUrl ="/login">

                    {productList.map(product => {
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
                    title="Ofertas"
                    footerLinkText="Ver todas"
                    footerLinkUrl ="/login">
                    
                    {productList.map(product => {
                        return (
                            <ProductItem
                                key={product.id}
                                orientation = "horizontal"
                                item = {product}
                            />
                        )
                    })}
                </CardLayout>

                {/* Sucscripciones */}
                <SubscriptionCard 
                    title="Suscribite al nivel 6"
                    price={449}
                    period="el primer mes"
                    footerLinkUrl ="/login">

                    <div className="p-0">
                        <TextLine
                            text={"Conseguí los mejores beneficios en Mercado Libre y Mercado Pago"}
                            className={"txt-black txt-bold HomePage-txt-start HomePage-fs-14"}/>
                    </div>

                    {subscriptionItemList.map(subscriptionBenefit => {
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
                    title="Beneficios de Mercado Puntos"
                    footerLinkText="Ver todos los beneficios"
                    footerLinkUrl ="/login">

                    <div className="HomePage-m--4 br-btm"> 
                        <div className="row p-0 fw-wrap">

                            {mercadoPuntosBenefitList.map(benefit => {
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
                <Advertisement item={advertisementList[0]} textLink="Ver más" />
                <Advertisement item={advertisementList[1]} textLink="Ver más" />

                {/* Elegidos para vos */}
                <CardLayout 
                    title="Elegidos para vos en Computación"
                    footerLinkText="Ver más"
                    footerLinkUrl ="/login">
                    
                    {productList.map(product => {
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
                            <TextLine className="txt-grey HomePage-txt-start HomePage-fs-18" text={"Tiendas Oficiales"}/>
                            <TextLink url={"/login"}>Ver más</TextLink>
                        </div>

                        <div className="row padding-none overflow-scrollx">
                            {officialStoreList.map(item => {
                                return (
                                    <OfficialStoreItem officialStore={item} key={item.id}/>
                                )
                            })}
                        </div>
                    </div>  
                </div>


                {/* También puede interesarte */}
                <CardLayout 
                    title="También puede interesarte"
                    footerLinkText="Ver más"
                    footerLinkUrl ="/login">
                    
                    {productList.map(product => {
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
                <Advertisement item={advertisementList[2]} textLink="Ver más" />
                <Advertisement item={advertisementList[3]} textLink="Comprar" />
                
                {/* Historial de navegación */}
                <CardLayout 
                    title="Historial de navegación"
                    footerLinkText="Ver historial de navegación"
                    footerLinkUrl ="/login">
                    
                    {productList.map(product => {
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
                            <TextLine className="txt-grey HomePage-txt-start HomePage-p-sm HomePage-fs-18" text={"Categorías Populares"}/>
                            <div className="row padding-none fw-wrap">
                                { categoryList.map(item => {
                                    return (
                                        <div className="HomePage-col-6 HomePage-p-sm" key={item.id}>
                                            <CategoryItem category={item}/>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="HomePage-p-sm">
                                <Link className="link" to={"/login"}>
                                    <div className="p-0 bg-white rounded">
                                        <TextLine className="txt-blue HomePage-fs-16" text={"Ver más categorías"} />
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