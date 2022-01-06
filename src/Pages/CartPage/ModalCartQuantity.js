import { useState } from "react";
import ReactModal from "react-modal";
import ModalCartInputQuantity from './ModalCartInputQuantity'
import QuantitiesItems from "./QuantitiesItems";

let styles = {
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4721bef2',
  },
  content: {
    border: 'none',
    width: '360px',
    maxHeight: "100%",
    inset: 'unset',
    padding: "none",
    overflow: "hidden",
  }
}

export default function ModalCartQuantity({
  data: {stock},
    show,
    setShow,
    qty,
    setQty,
}) {

  // subModal es ModalCartInputQuantity
  const [ showSubModal, setShowSubModal ] = useState(false)

  const quantityText = 'Cantidad'
  const quantityAvailableText = `${stock} unidades disponibles`

  const handleCloseModal = () => {
    console.log('handleCloseModal')
    setShow(false)
  }

  const handleOpenModal = () => {
    console.log('handleOpenModal')
    setShowSubModal(true)
  }

  /**
   * 
   */
  const handleButtons = (e) => {
    e.preventDefault()
    const buttonValue = e.target.value
    setQty(buttonValue)
    setShow(false)
  }

  let quantitiesItems = [
    {
      "value" : 1,
      "text" : "1 unidad",
      "showMoreOptions" : false
    },
    {
      "value" : 6,
      "text" : "Mas de 6 unidades",
      "showMoreOptions" : true
    }
  ]

  const quantitiesListItems = quantitiesItems.map((option, i) => {
    return <QuantitiesItems key={i} option={option} handleButtons={handleButtons} handleOpenModal={handleOpenModal} />
  })

  return (
    <>
      <ReactModal
        isOpen={show}
        testId={"modal-cart-quantity"}
        ariaHideApp={false}
        bodyOpenClassName={'HomePage-overflow-hidden'}
        onRequestClose={handleCloseModal}
        style={styles}
      >
        <button
          onClick={handleCloseModal}
          className="Modal-button-close"
          data-testid={'modal-button-close'}
        />
        <div className="row jc-center bg-light-grey">
          <div className="col">
            <p className="txt-center txt-grey ProductPage-fs-18">
              {quantityText}
            </p>
            <p className="txt-center ProductPage-txt-light-grey ProductPage-fs-14">
              {quantityAvailableText}
            </p>
          </div>
        </div>
        <div
          data-testid={'modal-container-quantities'}
          className="row fd-col jc-start padding-none Modal-max-height-50-vh h-100 Modal-of-y-scroll"
        >
          { quantitiesListItems }
        </div>
      </ReactModal>

      <ModalCartInputQuantity
        data={{stock}}
        show={showSubModal}
        setShow={setShowSubModal}
        showParentModal={setShow}
        setItemQty={setQty}
      />
    </>
  )
}

