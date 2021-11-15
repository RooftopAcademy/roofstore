import WebsiteLayout from '../../Layouts/WebsiteLayout'
import TextLine from '../../Components/TextLine'
import Icon from '../../Components/Icon'

import CategoryOfferItem from './OffersPage/Components/CategoryOfferItem'
import PublicationItem from './OffersPage/Components/PublicationItem'
import Pagination from './OffersPage/Blocks/Pagination'

import publicationsOffersData from './OffersPage/publicationsOffersData'
import categoryOffersData from './OffersPage/categoryOffersData'

function OffersPage() {

    const carrouselItems = categoryOffersData.map(
        (data, i) => <CategoryOfferItem key={i} data={data} id={i} />
    )

    const publicationsItems = publicationsOffersData.map(
        (data, i) => <PublicationItem key={i} data={data} />
    )

    const numOfProducts = "10.000 productos"
    const filterText = "Filtrar"

    return (
        <WebsiteLayout>
            <main className="bg-main">
                <div className="
                    row
                    bg-white
                    shadow-sm
                    padding-none
                    OffersPage-m-bottom
                ">
                    <div className="col">
                        <TextLine text={numOfProducts} className="OffersPage-txt-light-grey"/>
                    </div>
                    <div className="col OffersPage-ai-center txt-blue">
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

                <Pagination />

            </main>
        </WebsiteLayout>
    )
}

export default OffersPage