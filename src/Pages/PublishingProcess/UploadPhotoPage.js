import React, { useState } from "react"
import Icon from "../../Components/Icon"
import TextLine from "../../Components/TextLine"

function UploadPhotoPage() {

    const title = 'Subí buenas fotos de tu producto'
    const primaryDescription = 'Asegurate de que tu primera foto tenga fondo blanco puro creado con un editor de fotos.'
    const secondaryDescription = 'No incluyas banners, datos de contacto, links ni referencias a sitios externos.'
    const cameraImage = '/camera.svg'
    const addPhotos = 'Agregar fotos'
    
    const [photos, setPhotos] = useState([])

    const upload = () => {
        return new Promise((resolve, reject) => {
            const filePicker = document.querySelector('input')

            if (!filePicker || !filePicker.files 
                || filePicker.files.length <= 0) {
                reject('No file selected.')
                return
            }

            if (filePicker.files.length > 10) {
                reject('Puede seleccionar hasta 10 fotos')
                return
            }

            const myFiles = Array.from(filePicker.files).map((file) => {
                return URL.createObjectURL(file)
            })
            setPhotos(myFiles)
            resolve()
        })
    }

    return (
        <div className="container bg-primary vh-100 p-0 d-flex fd-col">
            <div className="row padding-none">
                <div className="col padding-none">
                    <Icon className={"txt-white HomePage-fs-24"} icon={"arrow-left"}/>
                </div>
            </div>
            <div className="row HomePage-flex-grow-1">
                <div className="col padding-none HomePage-col-12 d-flex fd-col ai-center">
                    <img className="UploadPhotoPage-image" src={cameraImage} alt={title}></img>
                    <TextLine className="txt-white HomePage-fs-18 m-top-5" text={title} />
                    <TextLine className="txt-white HomePage-fs-14 m-top-5 HomePage-line-height-18" text={primaryDescription} />
                    <TextLine className="txt-white HomePage-fs-14 m-top-0 HomePage-line-height-18" text={secondaryDescription} />
                    <label className="rounded bg-blue ProductPage-p-button txt-white w-100 txt-center m-top-5" htmlFor="input-choose-file">{addPhotos}</label>
                    <input className="d-none" type="file" accept="image/jpg,image/png,image/webp" multiple onChange={() => { upload() }} id="input-choose-file" />
                </div>
            </div>
        </div>
    )
}

export default UploadPhotoPage