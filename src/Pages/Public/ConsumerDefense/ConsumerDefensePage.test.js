import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ConsumerDefensePage from "./ConsumerDefensePage"

describe("ConsumerDefensePage", () => {

  let component

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <ConsumerDefensePage />
      </BrowserRouter>
    )
  })

  test("<ConsumerDefensePage /> debe tener el titulo 'Defensa del Consumidor'", () => {
    const title = component.container.querySelector("h2")
    expect(title).toHaveTextContent('Defensa del Consumidor')
  })

  test("<ConsumerDefensePage /> tenga una sección de Índice'", () => {
    expect(screen.getByText("Índice")).toBeInTheDocument()
    // screen.debug(screen.getByText("Índice"))
  })

  const linksList = ['Denuncias en Defensa del Consumidor', 'Avisos Legales']

  test(`<ConsumerDefensePage /> tenga en el Indice los siguientes enlaces con el texto:
   ${linksList.join(', ')}`, () => {
    const links = component.container.querySelectorAll("ul li a")
    links.forEach((link, i) => expect(link).toHaveTextContent(linksList[i]))
  })

  test(`<ConsumerDefensePage /> tenga las siguientes secciones:
   ${linksList.join(", ")}`, () => {
    const subtitles = component.container.querySelectorAll("h4")
    subtitles.forEach((subtitle, i) =>
      expect(subtitle).toHaveTextContent(linksList[i])
    )
  })
})
