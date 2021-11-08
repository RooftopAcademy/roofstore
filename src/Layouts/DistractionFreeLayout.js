/**
 * header: logo
 * footer: copyright
 */

function DistractionFreeLayout({children}) {
    return (
        <>
            <div>Header</div>
                {children}
            <div>Footer</div>
        </>
    )
}

export default DistractionFreeLayout