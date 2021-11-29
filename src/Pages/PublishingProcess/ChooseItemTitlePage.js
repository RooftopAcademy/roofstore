import { ArrowLeftIcon ,LampIcon } from "./ChooseItemTitle/svgIcon";
import LoadData from "./ChooseItemTitle/Blocks/LoadData";

export default function ChooseItemTitlePage() {
  const title = "Indicá tu producto, marca y modelo"
  const placeholder = "Ej.: Celular Samsung Galaxy S9 64 GB negro"
  const description = "Evita incluir condiciones de venta."
  const maxLength = 60
  const inputType = "text"
  const buttonText = "Continuar"
  const buttonUrl = "/"

  return (
    <div className="container d-flex fd-col padding-none vh-100">
      <div className="row ChooseItemTitle-bg-light-primary">
        <div className="col padding-none">
          <ArrowLeftIcon />
        </div>
        <div className="col padding-none">
          <LampIcon />
        </div>
      </div>
      <div className="row padding-none fd-col justify-content-sb grow-1">

        <LoadData
          title={title}
          placeholder={placeholder}
          description={description}
          maxLength={maxLength}
          inputType={inputType}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
        />

      </div>
    </div>
  )
}
