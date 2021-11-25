/**
 * header: logo, search, icons
 * footer: links
 */
import Footer from "../Blocks/Footer"

import Navbar from "../Blocks/Navbar"

function WebsiteLayout({children}) {
    return (
        <>
            <div><Navbar/></div>
                {children}
            <Footer/>
        </>
    )
}

export default WebsiteLayout