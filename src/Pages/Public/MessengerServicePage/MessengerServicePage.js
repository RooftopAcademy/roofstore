import { useLayoutEffect, useState, useEffect } from "react";
import TextLine from "../../../Components/TextLine";
import TextLink from "../../../Components/TextLink"
import Icon from "../../../Components/Icon"
import FormInput from "../../../Components/FormInput"
import messagesList from "./mesaggesList"
import Message from "./Message";
import useRecorder from '../../../hooks/useRecorder'

let title = "Mensajes"
let userName = "user012"

function MessengerServicePage() {

	let [audioURL, isRecording, startRecording, stopRecording] = useRecorder()

	const [messages, setMessages] = useState(messagesList)

	const [text, setText] = useState("")

	useLayoutEffect(() => {
		window.scroll(0,document.body.scrollHeight)
	},[document.body.scrollHeight, messages])

	const handleChangeInput = e => {
		setText (e.target.value)
	}

	useEffect(() => {
		if (audioURL && audioURL != '') {
			const newMessages = [...messages]
			newMessages[newMessages.length-1].messages.push({
				id: 4,
				iniciales: "",
				message: audioURL,
				audio: true,
				time : "10:00",
				send: true,
			})
			setMessages(newMessages)
		}
	},[audioURL])

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

			{messages.map((list) => {
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
					<button className={`bg-light-grey ProductPage-border-none ProductPage-circle ${isRecording ? 'bg-light-green' : ''} `}
						onMouseDown={startRecording} onMouseUp={stopRecording}
						onTouchStart={startRecording} onTouchEnd={stopRecording}
					>
						<Icon icon="microphone"/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default MessengerServicePage;