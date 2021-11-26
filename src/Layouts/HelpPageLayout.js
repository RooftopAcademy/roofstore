import Footer from "../Blocks/Footer"
import Navbar from "../Blocks/Navbar"
import TextLine from "../Components/TextLine"

function HelpPageLayout({children, title=""}) {

    return (
        <>
            <Navbar showSearch={false} showCart={false} />

            <div className="container bg-main p-0">
                {title &&
                <div className="row padding-none">
                    <div className="col padding-none">
                        <TextLine className={"txt-black txt-bold HomePage-txt-start br-btm HomePage-fs-18"} text={title} />
                    </div>
                </div>
                }
            

                {/* Searchbar */}

                {children}

                {/* Vote Component */}

            </div>

            <Footer showMenu={false}/>

        </>
    )
}

export default HelpPageLayout