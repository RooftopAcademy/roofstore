import TextLine from "./TextLine";

function InfoVotation() {

	const utilityQuestionText = '¿Te fue útil la información?'
	const yesText = 'Si'
	const noText = 'No'
	
	return (
		<div className="rounded container shadow-sm bg-white p-0">
			<TextLine
				text={utilityQuestionText}
				className="MenuMobile-p-0-vertical m-bottom-0 Footer-txt-start title txt-black "
			/>
			<div className="row MenuMobile-p-0-vertical">
				<button className="rounded MenuMobile-btn border-none MenuMobile-m-base-right InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue">
					{yesText}
				</button>
				<button className="rounded MenuMobile-btn border-none InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue">
					{noText}
				</button>
			</div>
		</div>
	);
}

export default InfoVotation;
