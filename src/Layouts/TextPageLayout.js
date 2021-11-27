import Footer from "../Blocks/Footer"
import Navbar from "../Blocks/Navbar"
import TextLine from "../Components/TextLine"
import SearchHelp from "../Components/SearchHelp"
import InfoVotation from "../Components/InfoVotation"

function TextPageLayout({children, title="", showInfoVotation=false}) {

    return (
        <>
            <Navbar showSearch={false} showCart={false} />

            <div className="container bg-main TextPageLayout-p-container">
                {title &&
                <div className="row padding-none m-bottom-0">
                    <div className="col padding-none">
                        <TextLine className={"txt-bold HomePage-txt-start br-btm HomePage-fs-18"} text={title} />
                    </div>
                </div>
                }
            
                <div className="row padding-none m-bottom-5">
                    <div className="col HomePage-col-12 padding-none">
                        <SearchHelp />
                    </div>
                </div>

                {children}

                {showInfoVotation &&
                <div className="row padding-none m-top-5 m-bottom-5" data-testid="info-votation-block">
                    <div className="col HomePage-col-12 padding-none">
                        <InfoVotation />
                    </div>
                </div>
                }

            </div>

            <Footer showMenu={false}/>

        </>
    )
}

export default TextPageLayout