import { useState } from "react";
import ReactModal from "react-modal";
import QuantityInput from './QuantityInput'

const modalStyles = {
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4721bef2',
  },
  content: {
    width: '360px',
    maxHeight: "100%",
    inset: 'unset',
    padding: "none",
    overflow: "hidden",
  }
}

// isVisible(true), isOpen(false)
export default function ModalCartInputQuantity(props) {
  const {stock} = props.data
  const show = props.show
  const setShow = props.setShow
  const showParentModal = props.showParentModal
  const setItemQty = props.setItemQty

  const quantityText = 'Cantidad'
  const quantityAvailableText = `${stock} disponibles`
  const btnText = 'Continuar' // !

  const handleCloseModal = () => setShow(false)

  const handleForm = (e) => {
    e.preventDefault()
    let inputValue = e.target.submodalInput.value
    inputValue = (inputValue > 0) ? inputValue : 1
    inputValue = (inputValue > stock) ? stock : inputValue
    setItemQty(inputValue)
    showParentModal(false)
    setShow(false)
  }

  return (
    <>
      <ReactModal
        isOpen={show}
        testId={"submodal-cart-quantity"}
        ariaHideApp={false}
        bodyOpenClassName={'HomePage-overflow-hidden'}
        onRequestClose={handleCloseModal}
        style={modalStyles}
      >
        <button
          onClick={handleCloseModal}
          className="Modal-button-close"
          data-testid={'submodal-button-close'}
        />
        <div className="row jc-center bg-light-grey">
          <div className="col">
            <p className="txt-center txt-grey ProductPage-fs-18">
              { quantityText }
            </p>
            <p className="txt-center ProductPage-txt-light-grey ProductPage-fs-14">
              { quantityAvailableText }
            </p>
          </div>
        </div>
        <div
          className="row fd-col jc-start padding-none Modal-max-height-50-vh h-100 Modal-of-y-scroll"
        >
          <form
            className="col w-100"
            onSubmit={handleForm}
          >
            <QuantityInput setQty={setItemQty} />

            <button
              className="rounded MenuMobile-btn bg-blue txt-white"
              data-testid={'submodal-button-continue'}
            >
              { btnText }
            </button>
          </form>
        </div>
      </ReactModal>
    </>
  )
}

