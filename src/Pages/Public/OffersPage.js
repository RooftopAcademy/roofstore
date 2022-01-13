import WebsiteLayout from '../../Layouts/WebsiteLayout'
import TextLine from '../../Components/TextLine'
import Icon from '../../Components/Icon'

import CategoryOfferItem from './OffersPage/Components/CategoryOfferItem'
import PublicationItem from './OffersPage/Components/PublicationItem'
import Pagination from './OffersPage/Blocks/Pagination'

import useFetch from '../../hooks/useFetch'
import { getOffersCategories } from '../../requests/categories'
import { getOffersProducts } from '../../requests/products'

function OffersPage() {

    const {data: categoryOffersData} = useFetch(getOffersCategories)
    const {data: publicationsOffersData} = useFetch(getOffersProducts)

    const carrouselItems = categoryOffersData?.map(
        (data, i) => <CategoryOfferItem key={i} data={data} id={i} />
    )

    const publicationsItems = publicationsOffersData?.map(
        (data, i) => <PublicationItem key={i} data={data} />
    )

    const numProducts = "10.000 productos"
    const numPages = 9
    const filterText = "Filtrar"

    return (
        <WebsiteLayout>
            <main className="bg-main">
                <div className="
                    row
                    bg-white shadow-sm
                    padding-none
                    OffersPage-m-bottom
                ">
                    <div className="col">
                        <TextLine text={numProducts} className="OffersPage-txt-light-grey"/>
                    </div>
                    <div className="col txt-blue OffersPage-ai-center">
                        <p className="OffersPage-m-right">{filterText}</p>
                        <Icon icon="arrow-down"/>
                    </div>
                </div>

                <div className="
                    row
                    overflow-scrollx
                    padding-none
                    OffersPage-p-0-left
                    OffersPage-m-bottom
                ">
                    { carrouselItems }
                </div>

                <div className="row fw-wrap padding-none">
                    { publicationsItems }
                </div>

                <Pagination numPages={numPages}/>

            </main>
        </WebsiteLayout>
    )
}

export default OffersPage