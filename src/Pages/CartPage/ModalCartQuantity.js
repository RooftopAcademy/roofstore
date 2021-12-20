import { useState } from "react";
import ReactModal from "react-modal";
import ModalCartInputQuantity from './ModalCartInputQuantity'
import QuantitiesItems from "./QuantitiesItems";

export default function ModalCartQuantity({
  data: {stock},
  functions: {
    showModal,
    setShowModal,
    itemQuant,
    setItemQuant,
  }
}) {
  const [ showSubModal, setShowSubModal ] = useState(false)

  const quantityText = 'Cantidad'
  const quantityAvailableText = `${stock} unidades disponibles`

  const handleCloseModal = () => {
    return setShowModal(false)
  }

  const handleOpenModal = () => {
    return setShowSubModal(true)
  }

  const handleButtons = (e) => {
    e.preventDefault()
    const buttonValue = e.target.value
    setItemQuant(buttonValue)
    setShowModal(false)
  }

  let quantitiesText = [
    '1 unidad',
    '2 unidades',
    '3 unidades',
    '4 unidades',
    '5 unidades',
    '6 unidades',
    'Más de 6 unidades',
  ]

  quantitiesText = quantitiesText.filter((_, i) => i < stock)

  const quantitiesListItems = quantitiesText.map((el, i) => {
    return (
      <QuantitiesItems
        key={i}
        data={{el, i, itemQuant}}
        onClick={{handleButtons, handleOpenModal}} 
      />
    )
  })

  return (
    <>
      <ReactModal
        isOpen={showModal}
        testId={"modal-cart-quantity"}
        ariaHideApp={false}
        bodyOpenClassName={'HomePage-overflow-hidden'}
        onRequestClose={handleCloseModal}
        style={{
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
        }}
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
        functions={{
          showSubModal,
          setShowSubModal,
          setShowModal,
          setItemQuant,
        }}
      />
    </>
  )
}
