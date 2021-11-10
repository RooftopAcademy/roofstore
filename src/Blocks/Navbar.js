import Icon from "../Components/Icon";
import Logo from "../Components/Logo";
import Input from "../Components/TextInput"
function Navbar() {
  return (
      <div className="container bg-primary padding-none">
        <div className="row p-base">
            <div className="col p-base width-logo">
                <Logo imgAlt="Logo" imgSrc="/logo192.png"/>
            </div>
          <div className="col p-base search-bar">
                <Input holderText="Estoy Buscando..." className="input rounded shadow-sm"/>
          </div>
          <div className="col p-base">
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
          <div className="col txt-white p-base">
          <Icon icon="cart"/>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
