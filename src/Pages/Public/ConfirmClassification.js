import { Link } from 'react-router-dom';
import { arrowLeftIcon } from './ConfirmClassification/svgIcon'
import ClassificationItem from './ConfirmClassification/Components/ClassificationItem';
import useFetch from '../../hooks/useFetch';
import { getConfirmClassification } from '../../requests/products';

function ConfirmClassification() {
  const confirmTitleText = 'Confirmá la clasificación de tu producto'
  const yourPublicationText = 'Tu publicación'
  const acceptClassificationText = 'Está bien clasificado'
  const modifiedClassificationText = 'Quiero clasificarlo yo'
  const maxClassif = 3

  const {data: confirmClassificationData} = useFetch(getConfirmClassification)

  const classifications = confirmClassificationData
  ?.slice(0, maxClassif)
  ?.map((item, index) => <ClassificationItem key={item.id} data={item} num={index} />)

  return (
    <main className={`
      row
      fd-col
      ConfirmClassification-bg-main-light
      ConfirmClassification-min-100vh
    `}>

      <Link to="/back-step" className="col d-flex padding-none w-100 ai-center">
        { arrowLeftIcon() }
      </Link>

      <div className="row txt-center fd-col padding-none grow-1 OffersPage-jc-center">
        <div className="col padding-none ConfirmClassification-m-2-bottom">
          <p className="ConfirmClassification-txt-sb txt-grey">{ confirmTitleText }</p>
        </div>
        <div id="classifications-container" className="col fd-col ai-center">

          { classifications }
         
          <div className="col padding-none d-flex OffersPage-jc-center ConfirmClassification-m-2-bottom">
            <p className="txt-bold txt-grey">{ yourPublicationText }</p>
          </div>
        </div>

        <div className="col d-flex w-100 padding-none fd-col">
          <button className={`
            rounded
            col
            bg-blue
            txt-white
            w-100
            ConfirmClassification-b-none
            OffersPage-m-bottom
            ConfirmClassification-txt-mb
            js-btn-approve
          `}>
            { acceptClassificationText }
          </button>
          <button className={`
            col
            txt-blue
            w-100
            ConfirmClassification-txt-mb
            ConfirmClassification-bg-transparent
            ConfirmClassification-b-none
            js-btn-modify
          `}>
            { modifiedClassificationText }
          </button>
        </div>

      </div>

    </main>
  )
}

export default ConfirmClassification
