import TextLine from "../../../Components/TextLine";

function MessageSend({message, time}) {
    return (
        <div className="row bg-white ProductPage-jc-right">
			<div className="col padding-none">
				<div className="row grey-border bg-light-blue rounded">
					<TextLine text={message} className={"Footer-txt-start"}/>  
				</div>
				<div className="row ProductPage-jc-right padding-none">
					<TextLine text={time} className={"ProductPage-txt-light-grey ProductPage-fs-14"}/>
				</div>
			</div>	
		</div>
    );
}

export default MessageSend