import { useState, forwardRef, useImperativeHandle } from "react"
import TextLine from "./TextLine"

const Snackbar = forwardRef(({ message }, ref) => {

    const [showSnackbar, setShowSnackbar] = useState(false)

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 3000)
        }
    })) 

    return (
        <div className={`UploadPhotoPage-snackbar UploadPhotoPage-bg-dark-grey w-100 p-0 ${showSnackbar ? "" : "UploadPhotoPage-snackbar-v-hidden"}`}>
            <TextLine text={message} className={"HomePage-txt-start txt-white"} />
        </div>
    )
})

export default Snackbar
