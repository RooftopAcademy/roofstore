import { Link, useLocation } from "react-router-dom";
import TextLine from "../../Components/TextLine";
import MenuList from "./MenuList";
import MenuListItem from "./MenuListItem";

function MenuMobile() {
	const { pathname: location } = useLocation();

	const menuLists = {
		menuList1: [],
		menuList2: [],
		menuList3: [],
		menuList4: [],
	};

	const menuItems = [
		{ url: "/", icon: "home", text: "Inicio" },
		{ url: "/offers", icon: "tag", text: "Ofertas" },
		{ url: "/shopping-history", icon: "clock", text: "Historial" },
		{ url: "/sales", icon: "tag", text: "Ventas" },
		{ url: "/supermarket", icon: "bag", text: "Supermercado" },
		{ url: "/fashion", icon: "tshirt", text: "Moda" },
		{ url: "/stores", icon: "store", text: "Tiendas Oficiales" },
		{ url: "/categories", icon: "list", text: "Categorías" },
		{ url: "/help", icon: "headset", text: "Ayuda" },
		{
			url: "/download",
			icon: "download",
			text: "¡Comprá y vendé con la app!",
		},
	];

	menuItems.forEach((item, index) => {
		let list;

		if (index >= 0 && index < 4) list = "menuList1";
		else if (index >= 4 && index < 8) list = "menuList2";
		else if (index === 8) list = "menuList3";
		else list = "menuList4";

		menuLists[list].push(
			<MenuListItem
				className={location === item.url ? "bg-light-grey" : null}
				textLinkClass={location === item.url ? "txt-blue" : "txt-grey"}
				url={item.url}
				icon={item.icon}
				text={item.text}
				key={index}
			/>
		);
	});

	return (
		<>
			<div>
				<div className="grey-border">
					<div className="row">
						<div className="col">
							<img src="" alt="Imagen perfil en blanco" />
						</div>
						<div className="col">
							<TextLine
								text="Bienvenido/a"
								className="txt-bold MenuMobile-txt-start"
							/>
							<TextLine
								text="Ingresá a tu cuenta para ver tus compras,
								favoritos, etc."
								className="txt-grey MenuMobile-txt-start"
							/>
						</div>
					</div>
					<div className="row MenuMobile-gap-small">
						<Link to="/login" className="SearchHelp-width-100">
							<button className="rounded MenuMobile-btn MenuMobile-m-base-right bg-primary txt-bold txt-white">
								Ingresá
							</button>
						</Link>
						<Link to="/register" className="SearchHelp-width-100">
							<button className="rounded MenuMobile-btn txt-bold txt-blue">
								Creá tu cuenta
							</button>
						</Link>
					</div>
				</div>
				<MenuList>{menuLists.menuList1}</MenuList>
				<MenuList>{menuLists.menuList2}</MenuList>
				<MenuList>{menuLists.menuList3}</MenuList>
				<MenuList>{menuLists.menuList4}</MenuList>
			</div>
		</>
	);
}

export default MenuMobile;
