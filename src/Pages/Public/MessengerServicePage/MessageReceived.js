import Icon from "../../../Components/Icon";
import TextLine from "../../../Components/TextLine";

function MessageReceived({iniciales, message, time, docs = false}) {
    return (
		<div className="container bg-white padding-none OffersPage-p-0-right">
			<div className="row bg-white jc-start">
				<div className="col grey-border ProductPage-bg-grey circle ProductPage-as-baseline">
                    <div className="ProductPage-circle-content txt-white">
                        {iniciales}
                    </div>
                </div>
				<div className="col padding-none">
					<div className="row grey-border ProductPage-bg-light-grey rounded m-left-5">
						<TextLine text={message} className={"Footer-txt-start"}/>
					</div>
					{docs  &&
						<div className=" row grey-border ProductPage-bg-light-grey rounded jc-start m-left-5">
							<span className="col">
								<button className="bg-white ProductPage-border-none ProductPage-circle">
									<Icon icon="file" className={"ProductPage-fs-36"}/>
								</button>
							</span>
						</div>
					} 
					<div className="row padding-none">
						<TextLine text={time} className={"ProductPage-txt-light-grey ProductPage-fs-14 Footer-txt-start m-left-5"}/> 
					</div>
				</div>
			</div>	
		</div>
    );
}

export default MessageReceived