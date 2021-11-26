// import { Link } from "react-router-dom"
import TextLine from '../../Components/TextLine'
import TextLink from '../../Components/TextLink'

function shoppingHistoryPage({ shoppingHistoryData }) {
  const title = 'Mis Compras'
  const navigationIcon = 'fas fa-arrow-left txt-white'
  return (
    <div className="d-flex vh-100 fd-col">
      <div className="row h-header bg-primary padding-none txt-white">
        <div className="col d-flex">
          <TextLink url="/">
            <i className={navigationIcon}></i>
          </TextLink>
          <p className="txt-white">{title}</p>
        </div>
      </div>
      AQUI VA OTRA COSA
    </div>
  )
}

export default shoppingHistoryPage