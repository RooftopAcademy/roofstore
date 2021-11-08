/**
 * header: logo, search, icons
 * footer: links
 */

function WebsiteLayout({children}) {
    return (
        <>
            <div>Header</div>
                {children}
            <div>Footer</div>
        </>
    )
}

export default WebsiteLayout