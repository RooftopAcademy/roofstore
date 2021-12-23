import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "../../Components/Icon"
import SwitchButton from "../../Components/SwitchButton"
import TextLine from "../../Components/TextLine"

function AdminNavigationPage() {

    const title = 'Administrar tu historial'
    const description = 'Usamos el registro de las publicaciones que ves y las búsquedas que hacés para recomendarte los mejores productos.'
    const deleteTextButton = "Borrar tu historial"
    const textConfigOption = 'Registro de historial'

    const [isChecked, setIsChecked] = useState(true)

    const handleSwitchButton = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className="container p-2 vh-100">
            <div className="row">
                <div className="col padding-none">
                    <Link className="" to="/navigation">
                        <span>
                            <Icon className={"txt-blue HomePage-fs-24"} icon={"arrow-left"}/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col padding-none">
                    <TextLine className="HomePage-fs-24 HomePage-txt-start" text={title} />
                </div>
            </div>

            <div className="row">
                <div className="col padding-none">
                    <TextLine className="HomePage-fs-14 HomePage-txt-start txt-light-grey" text={description} />
                </div>
            </div>

            <div className="row m-top-0 m-bottom-0">
                <div className="col HomePage-col-12 padding-none br-btm"></div>
            </div>

            <div className="row">
                <div className="col padding-none">
                    <TextLine className="HomePage-fs-14 txt-bold HomePage-txt-start" text={textConfigOption} />
                </div>
                <div className="col padding-none">
                    <SwitchButton isChecked={isChecked} onCheck={() => handleSwitchButton()} />
                </div>
            </div>

            <div className="row m-top-0">
                <div className="col HomePage-col-12 padding-none br-btm"></div>
            </div>

            <div className="row">
                <div className="col padding-none HomePage-col-12">
                    <button className="rounded HomePage-border-none p-0 InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue w-100">{deleteTextButton}</button>
                </div>
            </div>
        </div>
    )
}

export default AdminNavigationPage