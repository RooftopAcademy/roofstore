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
        const footerInfo = screen.getByText(/Mi cuenta/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/my-acount'", () => {
        const htmlValue = screen.getByText(/Mi cuenta/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/my-acount");
    })

    it("should render the component <FooterMenu/> with the text 'Historial'", async () => {
        const footerInfo = screen.getByText(/Historial/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/navigation'", () => {
        const htmlValue = screen.getByText(/Historial/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/navigation");
    })

    it("should render the component <FooterMenu/> with the text 'Favoritos'", async () => {
        const footerInfo = screen.getByText(/Favoritos/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/favourites'", () => {
        const htmlValue = screen.getByText(/Favoritos/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/favourites");
    })

    it("should render the component <FooterMenu/> with the text 'Categorias'", async () => {
        const footerInfo = screen.getByText(/Categorias/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/categories'", () => {
        const htmlValue = screen.getByText(/Categorias/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/categories");
    })

    it("should render the component <FooterMenu/> with the text 'Ayuda'", async () => {
        const footerInfo = screen.getByText(/Ayuda/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/help'", () => {
        const htmlValue = screen.getByText(/Ayuda/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/help");
    })
    it("should render the component <FooterMenu/> with the text 'Mis Compras'", async () => {
        const footerInfo = screen.getByText(/Mis Compras/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/shopping-history'", () => {
        const htmlValue = screen.getByText(/Mis Compras/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/shopping-history");
    })

    it("should render the component <FooterMenu/> with the text 'Ofertas'", async () => {
        const footerInfo = screen.getByText(/Ofertas/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/offers'", () => {
        const htmlValue = screen.getByText(/Ofertas/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/offers");
    })

    it("should render the component <FooterMenu/> with the text 'Tienda Oficiales'", async () => {
        const footerInfo = screen.getByText(/Tiendas Oficiales/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/officialStores", () => {
        const htmlValue = screen.getByText(/Tiendas Oficiales/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/officialStores");
    })

    it("should render the component <FooterMenu/> with the text 'Rooftore Puntos'", async () => {
        const footerInfo = screen.getByText(/Roofstore Puntos/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/market-points'", () => {
        const htmlValue = screen.getByText(/Roofstore Puntos/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/market-points");
    })

    it("should render the component <FooterMenu/> with the text 'Vender'", async () => {
        const footerInfo = screen.getByText(/Vender/i);
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterMenu/> with the link '/sell/chooseCategory'", () => {
        const htmlValue = screen.getByText(/Vender/i)
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/sell/chooseCategory");
    })

})