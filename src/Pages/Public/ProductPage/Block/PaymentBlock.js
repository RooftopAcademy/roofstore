function PaymentBlock() {
  return (
    <section className="row shadow-sm ProductPage-w-100">
      <div className="col ProductPage-w-100">
        <h3 className="ProductPage-section-title m-bottom-2">Medios de pago</h3>
        <p>Hasta 12 cuotas sin tarjeta</p>
        <div className="row m-bottom-2">
          <img
            src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-consumer_credits-medium_v_91cc43d5a1.png"
            alt="mercado credito"
          />
        </div>
        <p>Tarjetas de crédito</p>
        <p className="ProductPage-txt-light-grey">
          ¡Cuotas sin interés con bancos seleccionados!
        </p>
        <div className="row m-bottom-2">
          <img
            src="/images/visa.png"
            alt="visa"
          />
          <img
            src="/images/amex.png"
            alt="American Express"
          />
          <img
            src="/images/mastercard.png"
            alt="master card"
          />
          <img
            src="/images/naranja.png"
            alt="naranja"
          />
        </div>
        <p>Tarjetas de débito</p>
        <div className="row m-bottom-2">
          <img
            src="/images/visa-debito.png"
            alt="visa debito"
          />
          <img
            src="/images/mastercard-debito.png"
            alt="master card"
          />
          <img
            src="/images/cabal-debito.png"
            alt="cabal"
          />
          <img
            src="/images/maestro.png"
            alt="maestro"
          />
        </div>
        <p>Efectivo</p>
        <div className="row">
          <div className="col padding-none">
            <img
              src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-rapipago-medium_v_91cc43d5a1.png"
              alt="rapipago"
            />
            <img
              className="m-left-5"
              src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-pagofacil-medium_v_91cc43d5a1.png"
              alt="pago facil"
            />
          </div>
        </div>
        <button className="rounded txt-blue bg-white p-0 input ProductPage-btn-left">
          Conocer otros medios de pago <i className="fas fa-angle-right" />
        </button>
      </div>
    </section>
  )
}

export default PaymentBlock
