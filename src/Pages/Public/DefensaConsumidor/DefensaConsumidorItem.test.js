import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DefensaConsumidorItem from "./DefensaConsumidorItem"


describe("DefensaConsumidorPage" , () => {
  test("<DefensaConsumidorItem /> tenga la estructura DOM (incluye classnames) del snapshot", () => {
    const component = render(
      <BrowserRouter>
        <DefensaConsumidorItem title="Title" lastModifiedDate="01/01/2021">
          <p>
            A Paragraph or Many Paragraphs
          </p>
        </DefensaConsumidorItem>
      </BrowserRouter>
    )

    expect(component.container).toMatchSnapshot()
  })
})
