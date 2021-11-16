/**
 * header: logo, search, icons
 * footer: links
 */
import Footer from "../Blocks/Footer"

function WebsiteLayout({children}) {
    return (
        <>
            <div>Header</div>
                {children}
            <Footer/>
        </>
    )
}

export default WebsiteLayout