import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterMenu from './FooterMenu';

const MockFooterMenu = ( ) =>{
    return (
        <BrowserRouter>
            <FooterMenu />
        </BrowserRouter>
    )
}

describe( "Menu", () => {

    beforeEach(() => {
        render(<MockFooterMenu />);
    })

    it("should render the component <FooterMenu/> with the text 'Mi cuenta'", async () => {
        const footerInfo = screen.getByText("Mi cuenta");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/my-acount'", () => {
        const htmlValue = screen.getByText("Mi cuenta")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/my-acount");
    })

    it("should render the component <FooterMenu/> with the text 'Historial'", async () => {
        const footerInfo = screen.getByText("Historial");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/navigation'", () => {
        const htmlValue = screen.getByText("Historial")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/navigation");
    })

    it("should render the component <FooterMenu/> with the text 'Favoritos'", async () => {
        const footerInfo = screen.getByText("Favoritos");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/favourite'", () => {
        const htmlValue = screen.getByText("Favoritos")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/favourite");
    })

    it("should render the component <FooterMenu/> with the text 'Categorias'", async () => {
        const footerInfo = screen.getByText("Categorias");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/categories'", () => {
        const htmlValue = screen.getByText("Categorias")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/categories");
    })

    it("should render the component <FooterMenu/> with the text 'Ayuda'", async () => {
        const footerInfo = screen.getByText("Ayuda");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/help'", () => {
        const htmlValue = screen.getByText("Ayuda")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/help");
    })
    it("should render the component <FooterMenu/> with the text 'Mis Compras'", async () => {
        const footerInfo = screen.getByText("Mis Compras");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '//shopping-history'", () => {
        const htmlValue = screen.getByText("Mis Compras")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/shopping-history");
    })

    it("should render the component <FooterMenu/> with the text 'Ofertas'", async () => {
        const footerInfo = screen.getByText("Ofertas");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/off'", () => {
        const htmlValue = screen.getByText("Ofertas")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/offers");
    })

    it("should render the component <FooterMenu/> with the text 'Tienda Oficiales'", async () => {
        const footerInfo = screen.getByText("Tiendas Oficiales");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/tiendas-oficiales'", () => {
        const htmlValue = screen.getByText("Tiendas Oficiales")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/officialStores");
    })

    it("should render the component <FooterMenu/> with the text 'Mercado Puntos'", async () => {
        const footerInfo = screen.getByText("Mercado Puntos");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/mercado-puntos'", () => {
        const htmlValue = screen.getByText("Mercado Puntos")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/mercado-puntos");
    })

    it("should render the component <FooterMenu/> with the text 'Vender'", async () => {
        const footerInfo = screen.getByText("Vender");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/sell'", () => {
        const htmlValue = screen.getByText("Vender")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/sell/chooseCategory");
    })

})