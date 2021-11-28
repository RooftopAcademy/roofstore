import { useState } from "react";
import Icon from "../Components/Icon";
import Logo from "../Components/Logo";
import Input from "../Components/TextInput"
import MenuMobile from "./MenuMobile/MenuMobile";
import TextLink from "../Components/TextLink";

function Navbar({showSearch=true, showCart=true}) {

    const [activeMenu, setActiveMenu] = useState(false)

    const toggleMenu = () => {
    setActiveMenu(!activeMenu)
    }

    return (
        <div className="container padding-none">
        <div className="row bg-primary navbar-p-base">
            <div className="col padding-none navbar-width-logo">
              <TextLink dataTestId="LogoNavbar" url={'/'}>
                <Logo imgAlt="Logo" imgSrc="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.17.0/mercadolibre/logo__small@2x.png"/>
              </TextLink>
            </div>

            {showSearch &&
            <div className="col navbar-search-bar padding-none m-left-0 m-right-0">
                <Input holderText="Estoy buscando..." className="input rounded shadow-sm navbar-p-input"/>
            </div>
            }

            <div className="col padding-none">
            <input onClick={toggleMenu}
                role="checkbox"
                name="burger-btn-check"
                id="burger-btn-check"
                hidden
            />
            <label htmlFor="burger-btn-check" className="burger-btn">
                <span className="burger-icon"></span>
            </label>
            </div>
            
            {showCart &&
            <div className="col txt-white navbar-p-base m-left-0">
                <Icon icon="cart"/>
            </div>
            }
        </div>

        { activeMenu? <MenuMobile/> : ''}
        
      </div>
  );
}

export default Navbar;
