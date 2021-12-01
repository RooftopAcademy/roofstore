import TextLine from "./TextLine";

function InfoVotation() {
	return (
		<div className="rounded container shadow-sm bg-white p-0">
			<TextLine
				text="¿Te fue útil la información?"
				className="MenuMobile-p-0-vertical m-bottom-0 Footer-txt-start title txt-black "
			/>
			<div className="row MenuMobile-p-0-vertical">
				<button className="rounded MenuMobile-btn border-none MenuMobile-m-base-right InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue">
					Si
				</button>
				<button className="rounded MenuMobile-btn border-none InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue">
					No
				</button>
			</div>
		</div>
	);
}

export default InfoVotation;
