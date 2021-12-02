import { useState } from "react";
import Icon from "../Components/Icon";
import Logo from "../Components/Logo";
import MenuMobile from "./MenuMobile/MenuMobile";
import TextLink from "../Components/TextLink";
import SearchHelp from "../Components/SearchHelp"

function Navbar({showSearch=true, showCart=true}) {
    const [activeMenu, setActiveMenu] = useState(false)
    const [isSearchMode, setIsSearchMode] = useState(false)

    const toggleMenu = () => {
      setActiveMenu(!activeMenu)
    }

    return (
        <div className="container padding-none">
        <div className={`row bg-primary ${isSearchMode ? "padding-none" : "navbar-p-base"}`}>
            { !isSearchMode && <div className="col padding-none navbar-width-logo">
              <TextLink dataTestId="LogoNavbar" url={'/'}>
                <Logo imgAlt="Logo" imgSrc="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.17.0/mercadolibre/logo__small@2x.png"/>
              </TextLink>
            </div>}

            {showSearch &&
              <div className={`
              col navbar-search-bar padding-none ${!isSearchMode && `m-left-0 m-right-0`}
              `}>
                  <SearchHelp isHelpMode={false} setNavBarAsSearchMode={setIsSearchMode} />
              </div>
            }

            { !isSearchMode && (<div className="col padding-none">
              <input onClick={toggleMenu}
                  type="checkbox"
                  name="burger-btn-check"
                  id="burger-btn-check"
                  hidden
              />
              <label htmlFor="burger-btn-check" className="burger-btn">
                  <span className="burger-icon"></span>
              </label>
            </div>) 
            }

            {!isSearchMode && showCart &&
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
