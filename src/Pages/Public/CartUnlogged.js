import TextLine from "../../Components/TextLine";
import DistractionFreeLayout from "../../Layouts/DistractionFreeLayout";

function CartUnlogged() {
	return (
		<DistractionFreeLayout isFooter="false">
			<div className="row">
				<TextLine text="¡Hola! Para agregar al carrito, ingresá a tu cuenta"></TextLine>
				
			</div>
		</DistractionFreeLayout>
	);
}

export default CartUnlogged;
