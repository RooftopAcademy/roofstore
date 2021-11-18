import TextLine from "../../Components/TextLine";
import MenuList from "./MenuList";
import MenuListItem from "./MenuListItem";

function MenuMobile() {
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
						<button className="rounded MenuMobile-btn MenuMobile-m-base-left bg-primary txt-bold txt-white">
							Ingresá
						</button>

						<button className="rounded MenuMobile-btn MenuMobile-m-base-right txt-bold txt-blue">
							Creá tu cuenta
						</button>
					</div>
				</div>
				<MenuList>
					<MenuListItem
						className="bg-light-grey"
						textLinkClass="txt-blue"
						url="/"
						icon="home"
						text="Inicio"
					></MenuListItem>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="tag"
						text="Ofertas"
					/>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="clock"
						text="Historial"
					/>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="tag"
						text="Ventas"
					/>
				</MenuList>
				<MenuList>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="bag"
						text="Supermercado"
					/>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="tshirt"
						text="Moda"
					/>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="store"
						text="Tiendas Oficiales"
					/>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="list"
						text="Categorías"
					/>
				</MenuList>
				<MenuList>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="headset"
						text="Ayuda"
					/>
				</MenuList>
				<MenuList>
					<MenuListItem
						textLinkClass="txt-grey"
						url="/"
						icon="download"
						text="¡Comprá y vendé con la app!"
					/>
				</MenuList>
			</div>
		</>
	);
}

export default MenuMobile;