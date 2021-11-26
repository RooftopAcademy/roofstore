import TextLine from "./TextLine";

function InfoVotation() {
	return (
		<div className="rounded container shadow-m">
			<TextLine
				text="¿Te fue útil la información?"
				className="m-top-5 MenuMobile-m-base-left Footer-txt-start title txt-black "
			/>
			<div className="row ">
				<button className="rounded navbar-img-log border-none MenuMobile-m-base-right InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue bg-light-blue">
					Si
				</button>
				<button className="rounded navbar-img-log border-none InfoVotation-bg-light-blue txt-bold InfoVotation-txt-blue bg-light-blue">
					No
				</button>
			</div>
		</div>
	);
}

export default InfoVotation;
