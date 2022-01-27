import TextLink from '../../Components/TextLink'
import ShoppingHistoryItem from './ShoppingHistoryItem'
import Paginator from '../Public/ProductList/Components/Paginator'
import useFetch from '../../hooks/useFetch'
import { getPurchases } from '../../requests/products'

function ShoppingHistoryPage() {
  const title = 'Mis Compras'
  const navigationIcon = 'fas fa-arrow-left txt-white'

  const {data: history} = useFetch(getPurchases)

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
        {history?.items.map((item) => {
          return <ShoppingHistoryItem shoppingData={item} key={item.id} />
        })}
      </div>
      <footer>
        {history?.items ?
        <Paginator
            currentPage={history.meta.currentPage}
            nextUrl={history.links.next}
            prevUrl={history.links.previous}
            lastPage={history.links.last}
            classNameText={"txt-blue"}
            classNameNumber={"ProductPage-bg-grey ProductList-txt-light-grey"}
          /> : ""
        }
      </footer>
    </div>
  )
}

export default ShoppingHistoryPage