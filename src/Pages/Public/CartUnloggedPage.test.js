import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router";
import CartUnloggedPage from "./CartUnloggedPage"

describe("CartUnloggedPage", ()=> {
    let component;
    beforeEach(()=>{
        component = render(
            <MemoryRouter>
                <CartUnloggedPage/> 
        </MemoryRouter>
        )
    })


    it("should render a link button with the text `Soy nuevo`", ()=>{
        const soyNuevoBtn = component.getByText("Soy nuevo")

        expect(soyNuevoBtn).toBeInTheDocument()
    })


    it("should render a link button with the text `Ya tengo cuenta`", ()=>{
        const soyNuevoBtn = component.getByText("Ya tengo cuenta")

        expect(soyNuevoBtn).toBeInTheDocument()
    })
})