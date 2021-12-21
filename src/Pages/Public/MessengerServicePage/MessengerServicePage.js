import { useState } from "react/cjs/react.development";
import TextLine from "../../../Components/TextLine";
import TextLink from "../../../Components/TextLink"
import Icon from "../../../Components/Icon"
import MessageReceived from "./MessageReceived"
import MessageSend from "./MessageSend";
import FormInput from "../../../Components/FormInput"


let title = "Mensajes"
let userName = "user012"

function MessengerServicePage() {
	const [buttonActive, setButtonActive]=useState(false)

	const [text, setText] = useState("")
	const [audio, setAudio] = useState('')

	let globalStream = null
	let mediaRecorder = null
	let recordChunk = []


	const config = {mimeType: 'audio/webm'}

	const handleChangeInput = e =>{
		setText (e.target.value)
		console.log (text)
	}


	const handleStart = () => {
		mediaRecorder = new MediaRecorder(globalStream, config)
		
		mediaRecorder.addEventListener('dataavailable', (e) => {
			if (e.data.size > 0) {
				recordChunk.push(e.data)
			}
		})

		mediaRecorder.addEventListener('stop', function () {
			console.log('stop audio')

			setAudio(URL.createObjectURL(new Blob(recordChunk)))
			recordChunk = []
			mediaRecorder = null
		})

		mediaRecorder.start();
	}

	const handlerEnd = () => {
		mediaRecorder.stop()
	}
	
	navigator.mediaDevices.getUserMedia({ audio: true, video: false })
		.then((stream) => {
			globalStream = stream
		})

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

			{audio? <audio id="player" controls src={audio} ></audio> : ''}
			
			
			<div className="row br-top bg-white shadow-sm rounded sticky-footer">
				<div className="col">
					<button className="bg-white ProductPage-border-none ProductPage-circle">
						<Icon icon="paper-clip"/>
					</button> 
				</div>
				<div className="col grow-1">
					<FormInput  type="text" className="input round p-form SearchHelp-placeholder-light-gray" holderText="Escribile al vendedor" onChange={handleChangeInput} value={text}></FormInput>
				</div>
				<div className={`col ${!text?  'd-none' : ''}`}>
					<button className="bg-light-grey ProductPage-border-none ProductPage-circle">
						<Icon icon="send"/>
					</button>
				</div>
				<div className={`col ${text? 'd-none'  : ''}`}>
					<button className="bg-light-grey ProductPage-border-none ProductPage-circle" 
						onMouseDown={handleStart} onMouseUp={handlerEnd}
					>
						<Icon icon="microphone"/>
					</button>
					{/* <input type="file" accept="audio/*" capture onChange={handleRecord} /> */}
				</div>
			</div>
		</div>
	);
}

export default MessengerServicePage;