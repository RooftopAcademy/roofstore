import { Link } from "react-router-dom";
import TextLine from "../../Components/TextLine";
import TextLink from "../../Components/TextLink";
import DistractionFreeLayout from "../../Layouts/DistractionFreeLayout";

function CartUnloggedPage() {
	return (
		<DistractionFreeLayout isFooter="false">
			<div className="col fd-col grow-1 jc-center OffersPage-ai-center">
				<div className="p-0 row fd-col">
					<TextLine text="¡Hola! Para agregar al carrito, ingresá a tu cuenta" className="txt-center title p-0"></TextLine>
					<Link to="/register" className="row MenuMobile-p-1-vertical jc-center link"><button className="txt-center MenuMobile-p-1-vertical SearchHelp-width-100 rounded border-none bg-blue txt-white ">Soy nuevo</button></Link>
					<TextLink url="/login" className="txt-blue txt-center fz-sm">Ya tengo cuenta</TextLink>
				</div>
			</div>
		</DistractionFreeLayout>
	);
}

export default CartUnloggedPage;
