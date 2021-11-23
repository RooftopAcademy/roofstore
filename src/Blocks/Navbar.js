import Icon from "../Components/Icon";
import Logo from "../Components/Logo";
import Input from "../Components/TextInput"
function Navbar() {
  return (
      <div className="container bg-primary padding-none">
        <div className="row navbar-p-base">
            <div className="col padding-none navbar-width-logo">
                <Logo imgAlt="Logo" imgSrc="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.17.0/mercadolibre/logo__small@2x.png"/>
            </div>
          <div className="col navbar-search-bar padding-none m-left-0 m-right-0">
                <Input holderText="Estoy buscando..." className="input rounded shadow-sm navbar-p-input"/>
          </div>
          <div className="col padding-none">
            <input
              type="checkbox"
              name="burger-btn-check"
              id="burger-btn-check"
              hidden
            />
            <label for="burger-btn-check" className="burger-btn">
              <span className="burger-icon"></span>
            </label>
          </div>
          <div className="col txt-white navbar-p-base m-left-0">
          <Icon icon="cart"/>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
