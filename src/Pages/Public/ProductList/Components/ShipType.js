import TextTag from "./TextTag"

export default function ShipType({ type }) {

  let component

  switch (type) {
    case 'Llega mañana':
    case 'Llega gratis mañana':
      component = <TextTag text={type} txtColor="txt-green" bgColor="bg-light-green" />
      break;

    case 'Llega hoy':
    case 'Llega gratis hoy':
      component = <TextTag text={type} txtColor="txt-light-green" bgColor="bg-green" />
      break;

    case 'OFERTA DEL DÍA':
      component = <TextTag text={type} />
      break;

    case 'MÁS VENDIDO':
    case 'OFERTA RELÁMPAGO':
      component = <TextTag text={type} txtColor="txt-white" bgColor="ProductPage-bg-orange"/>
      break;

    case 'Envío gratis':
      component = <TextTag text={type} txtColor="txt-green" bgColor="bg-transparent" />
      break;

    default:
      console.error(
        'El componente <ShipType /> no recibió un tipo de envio valido en la propiedad "type"'
      )
  }

  return (
     component
  )
}