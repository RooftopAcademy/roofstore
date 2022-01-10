import {useEffect, useState} from 'react'
import axios from 'axios'
import TextLink from '../../Components/TextLink'
import ShoppingHistoryItem from './ShoppingHistoryItem'
import Pagination from '../Public/OffersPage/Blocks/Pagination'
import Paginator from '../Public/ProductList/Components/Paginator'

function ShoppingHistoryPage() {
  const title = 'Mis Compras'
  const navigationIcon = 'fas fa-arrow-left txt-white'

  const [history, setHistory] = useState({
    items : [],
    meta : {currentPage : 1},
    links : {next : "", previous : "", last: ""}
  })

  useEffect(() => {
    axios('/data/purchases.json').then(res => setHistory(res.data))
  }, [])

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
        {history.items.map((item) => {
          return <ShoppingHistoryItem shoppingData={item} key={item.id} />
        })}
      </div>
      <footer>
        {history.items ? 
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