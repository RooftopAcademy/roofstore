import { useState } from "react";
import ReactModal from "react-modal";

export default function ModalCartInputQuantity({
  data: { stock },
  functions: {
    showSubModal,
    setShowSubModal,
    setShowModal,
    setItemQuant,
  }
}) {
  const [ isInputFocused, setIsInputFocused ] = useState(false)
  const quantityText = 'Cantidad'
  const quantityAvailableText = `${stock} disponibles`
  const btnText = 'Continuar'

  const handleCloseModal = () => {
    return setShowSubModal(false)
  }

  const handleFocusInput = () => {
    return setIsInputFocused(!isInputFocused)
  }

  const handleForm = (e) => {
    e.preventDefault()
    let inputValue = e.target.submodalInput.value
    inputValue = (inputValue > 0) ? inputValue : 1
    inputValue = (inputValue > stock) ? stock : inputValue
    setItemQuant(inputValue)
    setShowModal(false)
    setShowSubModal(false)
  }

  return (
    <>
      <ReactModal
        isOpen={showSubModal}
        testId={"submodal-cart-quantity"}
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
            <input
              name="submodalInput"
              required={true}
              type="number"
              min="1"
              placeholder="Ingresar cantidad"
              className={`
                w-100
                SearchHelp-placeholder-light-gray
                ConfirmClassification-b-none
                ${isInputFocused
                  ? 'ChooseItemTitle-border-blue-bottom'
                  : 'Modal-border-bottom-grey'
                }
                OffersPage-m-bottom
                SearchHelp-m-3-top
              `}
              onFocus={handleFocusInput}
              onBlur={handleFocusInput}
            />

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

