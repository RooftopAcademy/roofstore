import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import InteractionProductItem from "./InteractionProductItem"

describe("InteractionProductItem", () => {

    describe("Test render complete product information", () => {
        const product = {
            'id': 1,
            'image': "https://http2.mlstatic.com/D_Q_NP_2X_649806-MLA47931899819_102021-G.webp",
            'title': "Notebook Hp",
            'price': 99.999,
            'discount': "8% OFF",
            'installments': "9x $ 11.111 sin interés",
            'freeShipping': true,
            'fullShipping': true,
            'seller': "Hp Tienda Oficial"
        }

        beforeEach(() => {
            render(
                <BrowserRouter>
                    <InteractionProductItem item={product} />
                </BrowserRouter>
            )
        })

        it('should render a link with "/product/1" href', () => {
            const element = screen.getByRole("link")
            expect(element.getAttribute("href")).toBe("/product/1")
        })

        it('should render a image', () => {
            const element = screen.getByRole("img")
            expect(element).toBeInTheDocument()
        })

        it('image should have a src prop', () => {
            const element = screen.getByRole("img")
            expect(element.getAttribute("src")).toBe(product.image)
        })

        it(`should render a text line with the text "${product.title}"`, () => {
            const element = screen.getByText(product.title)
            expect(element).toBeInTheDocument()
        })

        it(`should render a text line with the text "$ ${product.price}"`, () => {
            const element = screen.getByText(`$ ${product.price}`)
            expect(element).toBeInTheDocument()
        })

        it(`should render a text line with the text "${product.discount}"`, () => {
            const element = screen.getByText(product.discount)
            expect(element).toBeInTheDocument()
        })

        it(`should render a text line with the text "${product.installments}"`, () => {
            const element = screen.getByText(product.installments)
            expect(element).toBeInTheDocument()
        })

        it('should render a text line with the text "Envío gratis"', () => {
            const element = screen.getByText("Envío gratis")
            expect(element).toBeInTheDocument()
        })

        it('should render a text line with the text "FULL"', () => {
            const element = screen.getByText(/FULL/i)
            expect(element).toBeInTheDocument()
        })

        it(`should render a text line with the text "por ${product.seller}"`, () => {
            const element = screen.getByText(`por ${product.seller}`)
            expect(element).toBeInTheDocument()
        })
    })

    describe("Test render conditional product information", () => {
        const product = {
            'id': 1,
            'image': "https://http2.mlstatic.com/D_Q_NP_2X_649806-MLA47931899819_102021-G.webp",
            'title': "Notebook Hp",
            'price': 99.999,
            'discount': "",
            'installments': "",
            'freeShipping': false,
            'fullShipping': false,
            'seller': ""
        }

        beforeEach(() => {
            render(
                <BrowserRouter>
                    <InteractionProductItem item={product} />
                </BrowserRouter>
            )
        })

        it('should not render a discount text line if "discount" is void', () => {
            const element = screen.getByTestId("interaction-product-item-price")
            expect(element.childElementCount).toBe(1)
        })

        it('should not render a installments text line if "installments" is void', () => {
            const element = screen.queryByTestId("interaction-product-item-installments")
            expect(element).toBe(null)
        })

        it('should not render shipping text if "freeShipping" and "fullShipping" are false', () => {
            const element = screen.queryByTestId("interaction-product-item-shipping")
            expect(element).toBe(null)
        })

        it('should not render a seller text line if "seller" is void', () => {
            const element = screen.queryByTestId("interaction-product-item-seller")
            expect(element).toBe(null)
        })
    })

    describe("Test render interaction elements", () => {
        const product = {
            'id': 1,
            'image': "https://http2.mlstatic.com/D_Q_NP_2X_649806-MLA47931899819_102021-G.webp",
            'title': "Notebook Hp",
            'price': 99.999,
            'discount': "8% OFF",
            'installments': "9x $ 11.111 sin interés",
            'freeShipping': true,
            'fullShipping': true,
            'seller': "Hp Tienda Oficial"
        }

        it('should render a button with the text "Eliminar"', () => {
            render(
                <BrowserRouter>
                    <InteractionProductItem item={product} />
                </BrowserRouter>
            )

            const element = screen.getByRole("button")
            expect(element).toBeInTheDocument()
            expect(element.textContent).toBe("Eliminar")
        })

        it('should not render a fav button if "favButton" prop is false or ommited', () => {
            render(
                <BrowserRouter>
                    <InteractionProductItem item={product} favButton={false}/>
                </BrowserRouter>
            )

            const element = screen.getAllByRole("button")
            expect(element.length).toBe(1)
        })

        it('should render a fav button if "favButton" prop is true', () => {
            render(
                <BrowserRouter>
                    <InteractionProductItem item={product} favButton={true}/>
                </BrowserRouter>
            )
            const element = screen.getAllByRole("button")
            expect(element[0]).toBeInTheDocument()
            expect(element[0].children[0]).toHaveClass("fa-heart")
        })
    })
})
