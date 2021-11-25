import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import TextInput from "./TextInput"

const holderText = "Buscar productos, marcas y más…"
const className = "input"

describe("TextInput", () => {
  // Que el parametro "holderText" aparezca como valor del placeholder
  it('Debe renderizar el componente <TextInput /> con el texto "Soy el placeholder text" en el placeholder', async () => {
    render(<TextInput holderText={holderText} className={className} />)
    const textInputComponent = screen.getByPlaceholderText(
      "Buscar productos, marcas y más…"
    )
    expect(textInputComponent).toBeInTheDocument()
  })

  // Que el tipo de elemento sea text
  it("Debe renderizar el componente <TextInput /> como un input de type text", async () => {
    const component = render(
      <TextInput holderText={holderText} className={className} />
    )
    const input = component.container.querySelector("input")
    expect(input.type).toBe("text")
  })

  // Que utilice las mismas clases enviadas como className
  it('Debe renderizar el componente <TextInput /> con la class "input"', async () => {
    const component = render(
      <TextInput holderText={holderText} className={className} />
    )
    const input = component.container.querySelector("input")
    expect(input).toHaveClass("input")
  })
})
