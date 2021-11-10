/**
 * header: logo, search, icons
 * footer: links
 */

import Navbar from "../Blocks/Navbar"

function WebsiteLayout({children}) {
    return (
        <>
            <div><Navbar/></div>
                {children}
            <div>Footer</div>
        </>
    )
}

export default WebsiteLayout