import TextLink from '../../Components/TextLink'
import ShoppingHistoryData from './ShoppingHistoryData'
import ShoppingHistoryItem from './shoppingHistoryItem'
import Pagination from '../Public/OffersPage/Blocks/Pagination'

function ShoppingHistoryPage() {
  const title = 'Mis Compras'
  const navigationIcon = 'fas fa-arrow-left txt-white'
  const data = ShoppingHistoryData

  return (
    <div className="d-flex vh-100 fd-col bg-main">
        <div className="row h-header bg-primary padding-none txt-white">
          <div className="col d-flex w-100">
            <TextLink url="/">
              <i className={navigationIcon}></i>
            </TextLink>
            <p className="txt-white grow-1 m-right-1 txt-center">{title}</p>
          </div>
        </div>
      <div className="container p-none grow-1">
        {data.map((item) => {
          return <ShoppingHistoryItem shoppingData={item} key={item.id} />
        })}
      </div>
      <footer>
        <Pagination numPages='2'/>
      </footer>
    </div>
  )
}

export default ShoppingHistoryPage