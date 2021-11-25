import TextLine from "../../Components/TextLine"
import CardFooterLink from "./CardFooterLink"

function CardLayout({children, title, footerLinkText, footerLinkUrl}) {
    return (
        <div className="row">
            <div className="col HomePage-col-12 bg-white rounded shadow-sm padding-none HomePage-d-flex fd-col">
                {/* Title */}
                <TextLine className={"txt-black txt-bold HomePage-txt-start p-0 br-btm HomePage-fs-18"} text={title}/>

                {children}

                {/* Footer Link */}
                <CardFooterLink text={footerLinkText} url={footerLinkUrl}/>
            </div>
        </div>
    )
}

export default CardLayout