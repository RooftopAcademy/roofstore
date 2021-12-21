import TextLine from "../../../Components/TextLine";
import TextLink from "../../../Components/TextLink"
import Icon from "../../../Components/Icon"
import MessageReceived from "./MessageReceived"
import MessageSend from "./MessageSend";
import FormInput from "../../../Components/FormInput"

let title = "Mensajes"
let userName = "user012"

function MessengerServicePage() {
	return (
		<div className="container padding-none bg-light-grey">	
			<div className="sticky-header">
				{/*header*/}
				<div className="row h-header bg-primary txt-white">
					<div className="col d-flex w-100">
						<TextLink url="/" >
							<Icon icon="arrow-left" className="txt-white"/>
						</TextLink>
						<TextLine text={title} className={"txt-white ProductPage-fs-18 grow-1 m-right-1 txt-center"}></TextLine>	
					</div>
				</div>
				{/*usuario*/}
				<div className="row bg-white br-btm">
					<div className="col">
						<TextLine text={userName} className={"ProductPage-fs-16"}></TextLine>
					</div>
					<div className="col rounded grey-border bg-light-grey">
						<img src="/user-avatar.png" alt="Imagen perfil en blanco" className="OffersPage-pagination"/>
					</div>
				</div>
			</div>
			{/*fecha*/}
			<div className="row bg-white jc-center">
				<div className="col">
					<TextLine text={"14 de Noviembre"} className={"ProductPage-fs-12 ProductPage-txt-light-grey"}></TextLine>
				</div>
			</div>
			{/*casilla de mensajes*/}
			<MessageReceived
			iniciales = "NN"
			message = "Buenas tardes, gracias por la compra"
			time = "11:47"
			/>
			<MessageSend
				message = "Buenas tardes"
				time = "11:51"
			/>
			<MessageReceived
				iniciales = "NN"
				message = "El paquete será despachado mañana a primera hora"
				time = "11:53"
			/>
			<MessageReceived
				iniciales = "NN"
				message = "Cualquier duda que tengas podes escribirnos"
				time = "11:53"
			/>
			<MessageSend
				message = "Bueno, muchas gracias"
				time = "11:57"
			/>
			<MessageSend
				message = "Necesito una factura del producto"
				time = "11:58"
			/>
			<div className="row bg-white jc-center">
				<div className="col">
					<TextLine text={"15 de Noviembre"} className={"ProductPage-fs-12 ProductPage-txt-light-grey"}></TextLine>
				</div>
			</div>
			<MessageReceived
				iniciales = "NN"
				message = "Tu paquete ya fue entregado al correo"
				time = "09:49"
			/>
			<MessageReceived
				iniciales = "NN"
				message = "Te adjunto la factura que nos solicitaste"
				docs = {true}
				time = "09:50"
			/>
			<MessageSend
				message = "Gracias"
				time = "09:52"
			/>
			<div className="row br-top bg-white shadow-sm rounded sticky-footer">
				<div className="col"> 
					<Icon icon="paper-clip" className="txt-light-grey"/>
				</div>
				<div className="col grow-1">
					<FormInput  type="text" className="input round p-form SearchHelp-placeholder-light-gray" holderText="Escribile al vendedor"/>
				</div>
				<div className="col grey-border ProductPage-bg-grey ProductPage-circle">
					<span className="ProductPage-circle-content">
						<Icon icon="microphone" className="txt-light-grey"/>
					</span>
				</div>
			</div>
		</div>
	);
}

export default MessengerServicePage;
