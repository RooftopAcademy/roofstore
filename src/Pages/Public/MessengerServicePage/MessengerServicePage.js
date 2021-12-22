import { useEffect, useState } from "react/cjs/react.development";
import TextLine from "../../../Components/TextLine";
import TextLink from "../../../Components/TextLink"
import Icon from "../../../Components/Icon"
import FormInput from "../../../Components/FormInput"
import messagesList from "./mesaggesList"
import Message from "./Message";

let title = "Mensajes"
let userName = "user012"

function MessengerServicePage() {

	const [text, setText] = useState("")
	const [audio, setAudio] = useState('')

	let globalStream = null
	let mediaRecorder = null
	let recordChunk = []

	useEffect(() => {
		window.scroll(0,document.body.scrollHeight)
	},[document.body.scrollHeight])

	const config = {mimeType: 'audio/webm'}

	const handleChangeInput = e => {
		setText (e.target.value)
	}

	const handleStart = () => {
		mediaRecorder = new MediaRecorder(globalStream, config)
		
		mediaRecorder.addEventListener('dataavailable', (e) => {
			if (e.data.size > 0) {
				recordChunk.push(e.data)
			}
		})

		mediaRecorder.addEventListener('stop', function () {
			setAudio(URL.createObjectURL(new Blob(recordChunk)))
			recordChunk = []
			mediaRecorder = null
		})

		mediaRecorder.start();
	}

	const handlerEnd = async () => {
		await mediaRecorder.stop()
		window.scroll(0,document.body.scrollHeight)
	}
	
	navigator.mediaDevices.getUserMedia({ audio: true, video: false })
		.then((stream) => {
			globalStream = stream
		})

	return (
		<div className="container padding-none bg-white">	
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
			
			{/*casilla de mensajes*/}

			{messagesList.map((list) => {
				return (
					<div key={list.id}>
						<div className="row jc-center">
							<div className="col">
							<TextLine text={list.date} className={"ProductPage-fs-12 ProductPage-txt-light-grey"}></TextLine>
							</div>
						</div>
					
						{list.messages.map((message) => {
							return (
								<Message  item={message} key={message.id}/>
							)}
						)}
					</div>
				)
      })}
			
			{audio? <audio id="player" controls src={audio} ></audio> : ''}
			
			<div className="row bg-white br-top shadow-sm rounded sticky-footer">
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
						onTouchStart={handleStart} onTouchCancel={handlerEnd}
					>
						<Icon icon="microphone"/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default MessengerServicePage;