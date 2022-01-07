function PaymentBlock() {
  const paymentMethodsText = 'Medios de pago'
  const twelvePaymentsText = 'Hasta 12 cuotas sin tarjeta'
  const creditCardsText = 'Tarjetas de crédito'
  const interestFreeText = '¡Cuotas sin interés con bancos seleccionados!'
  const debitCardsText = 'Tarjetas de débito'
  const cashText = 'Efectivo'
  const knowOtherMethods = 'Conocer otros medios de pago'

  const paymentMethods = {
    "card": {
      "credit": [
        {
          "id": 1,
          "name": "Visa",
          "img": "/images/visa.png"
        },
        {
          "id": 2,
          "name": "American Express",
          "img": "/images/amex.png",
        },
        {
          "id": 3,
          "name": "Master Card",
          "img": "/images/mastercard.png",
        },
        {
          "id": 4,
          "name": "Naranja",
          "img": "/images/naranja.png",
        },
      ],
      "debit": [
        {
          "id": 1,
          "name": "Visa Debito",
          "img": "/images/visa-debito.png",
        },
        {
          "id": 2,
          "name": "Master Card",
          "img": "/images/mastercard-debito.png",
        },
        {
          "id": 3,
          "name": "Cabal",
          "img": "/images/cabal-debito.png",
        },
        {
          "id": 4,
          "name": "Maestro",
          "img": "/images/maestro.png",
        },
      ],
    },
    "cash": [
      {
        "id": 1,
        "name": "Rapipago",
        "img": "/images/rapipago.png",
      },
      {
        "id": 2,
        "name": "Pago Fácil",
        "img": "/images/pago-facil.png",
      },
    ]
  }

  return (
    <section className="row shadow-sm ProductPage-w-100">
      <div className="col ProductPage-w-100">
        <h3 className="ProductPage-section-title m-bottom-2">{paymentMethodsText}</h3>
        <p>{twelvePaymentsText}</p>
        <div className="row m-bottom-2">
          <img
            src="/images/mercado-credito.png"
            alt="mercado credito"
          />
        </div>
        <p>{creditCardsText}</p>
        <p className="ProductPage-txt-light-grey">
          {interestFreeText}
        </p>

        <div className="row m-bottom-2">
          {paymentMethods.card.credit.map(({id, name, img}) => (
            <img
              key={id}
              src={img}
              alt={name}
            />
          ))}
        </div>
        <p>{debitCardsText}</p>
        <div className="row m-bottom-2">
          {paymentMethods.card.debit.map(({id, name, img}) => (
            <img
              key={id}
              src={img}
              alt={name}
            />
          ))}
        </div>
        <p>{cashText}</p>
        <div className="row">
          <div className="col padding-none">
            {paymentMethods.cash.map(({id, name, img}) => (
              <img
              className="m-right-5"
                key={id}
                src={img}
                alt={name}
              />
            ))}
          </div>
        </div>
        <button className="rounded txt-blue bg-white p-0 input ProductPage-btn-left">
          {knowOtherMethods} <i className="fas fa-angle-right" />
        </button>
      </div>
    </section>
  )
}

export default PaymentBlock
