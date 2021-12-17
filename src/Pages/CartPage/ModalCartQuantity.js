import ReactModal from "react-modal";

export default function ModalCartCuantity({useState: { showModal, setShowModal }}) {

  const handleCloseModal = () => {
    return setShowModal(!showModal)
  }

  return (
    <>
      <ReactModal
        isOpen={showModal}
        testId={"modal-cart-cuantity"}
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
          data-testid={'modal-button-close'}
        />
        <div className="row jc-center bg-light-grey">
          <div className="col">
            <p className="txt-center txt-grey">Cantidad</p>
            <p className="txt-center ProductPage-txt-light-grey HomePage-fs-12">4.419 unidades disponibles</p>
          </div>
        </div>
        <div
          data-testid={'modal-container-quantities'}
          className="row fd-col jc-start padding-none Modal-max-height-50-vh h-100 Modal-of-y-scroll"
        >
          <div className="col w-100 br-top txt-center OffersPage-p-relative Modal-br-left-blue">
            1 unidad
          </div>
          <div className="col w-100 br-top txt-center">
            2 unidades
          </div>
          <div className="col w-100 br-top txt-center">
            3 unidades
          </div>
          <div className="col w-100 br-top txt-center">
            4 unidades
          </div>
          <div className="col w-100 br-top txt-center">
            5 unidades
          </div>
          <div className="col w-100 br-top txt-center">
            6 unidades
          </div>
          <div className="col w-100 br-top txt-center txt-blue">
            Más de 6 unidades
          </div>
        </div>
      </ReactModal>
    </>
  )
}

