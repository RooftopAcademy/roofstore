import Icon from "../../Components/Icon";
import TextLink from "../../Components/TextLink";

function MenuListItem({ className, textLinkClass, url, icon, text }) {
	return (
		<div className={`row ${className}`}>
			<div className="col MenuMobile-p-1-horizontal">
				<TextLink className={textLinkClass} url={url}>
					<Icon icon={icon} className="m-right-0" />
					{text}
				</TextLink>
			</div>
		</div>
	);
}

export default MenuListItem;
