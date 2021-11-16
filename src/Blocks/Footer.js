import FooterHeader from "./Footer/FooterHeader"
import FooterMenu from "./Footer/FooterMenu"
import FooterLogin from "./Footer/FooterLogin"
import FooterInfo from "./Footer/FooterInfo"

function Footer() {
    return (
        <div>
            <FooterHeader/>

            <FooterMenu/>

            <FooterLogin/>

            <FooterInfo/>
        </div>
    )
}

export default Footer