import React, { useRef, useState } from "react"
import Icon from "../../Components/Icon"
import Snackbar from "../../Components/Snackbar"
import TextLine from "../../Components/TextLine"

function UploadPhotoPage() {

    const title = 'Subí buenas fotos de tu producto'
    const primaryDescription = 'Asegurate de que tu primera foto tenga fondo blanco puro creado con un editor de fotos.'
    const secondaryDescription = 'No incluyas banners, datos de contacto, links ni referencias a sitios externos.'
    const cameraImage = '/camera.svg'
    const addPhotos = 'Agregar fotos'

    const confirmText = 'Confirmar'
    const addMoreText = 'Cargar más fotos'
    
    const [photos, setPhotos] = useState([])
    const [selectedImage, setSelectedImage] = useState()

    const snackbarRef = useRef(null)

    const upload = () => {
        return new Promise((resolve, reject) => {
            const filePicker = document.querySelector('input')

            if (!filePicker || !filePicker.files 
                || filePicker.files.length <= 0) {
                reject('No file selected.')
                return
            }

            if ((photos.length + filePicker.files.length) > 10) {
                reject('up to 10 files allowed')
                snackbarRef.current.show()
                return
            }

            const newFiles = Array.from(filePicker.files)

            setPhotos([...photos, ...newFiles])
            setSelectedImage(newFiles[0])

            resolve()
        })
    }

    const closeButton = () => {
        setPhotos([])
    }

    return (
        <>
            {(photos.length == 0) &&
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
            }

            {(photos.length > 0) &&
                <div className="container vh-100 padding-none d-flex fd-col">
                    <div className="row p-0 bg-primary">
                        <div className="col padding-none" onClick={() => closeButton()}>
                            <Icon className={"txt-white HomePage-fs-24"} icon={"x"}/>
                        </div>
                    </div>
                    <div className="row padding-none bg-main UploadPhotoPage-carousel-selected-img-container HomePage-flex-grow-1">
                        <div className="col padding-none HomePage-col-12 h-100 d-flex ai-center jc-center">
                            <img src={URL.createObjectURL(selectedImage)} alt={selectedImage.name} className="d-flex UploadPhotoPage-max-width-100 UploadPhotoPage-max-height-100" />
                        </div>
                    </div>
                    <div className="row padding-none overflow-scrollx jc-start">
                        {photos.map((photo, index) => {
                            return (
                                <div className="p-0" key={index} onClick={() => setSelectedImage(photo)}>
                                    <img src={URL.createObjectURL(photo)} alt={photo.name} key={index} className={`UploadPhotoPage-carousel-container-img UploadPhotoPage-object-fit-cover ${photo == selectedImage ? "UploadPhotoPage-carousel-selected-img" : ""}`}/>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="row padding-none">
                        <div className="col HomePage-col-12 MenuMobile-p-1-horizontal">
                            <button className="rounded HomePage-border-none ProductPage-p-button bg-blue txt-white w-100 HomePage-fs-16">{confirmText}</button>
                        </div>
                    </div>
                    <div className="row padding-none m-top-0 m-bottom-0">
                            <label className="col HomePage-col-12 MenuMobile-p-1-horizontal bg-white ProductPage-p-button InfoVotation-txt-blue w-100 txt-center HomePage-fs-16" htmlFor="input-add-more-files">{addMoreText}</label>
                            <input className="d-none" type="file" accept="image/jpg,image/png,image/webp" multiple onChange={() => { upload() }} id="input-add-more-files" />
                    </div>
                </div>
            }
            <Snackbar
                ref={snackbarRef}
                message="Podés subir hasta 10 fotos de tu producto" />
        </>
    )
}

export default UploadPhotoPage
