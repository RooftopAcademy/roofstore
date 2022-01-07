import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ConsumerDefenseItem from "./ConsumerDefenseItem"


describe("DefensaConsumidorPage" , () => {
  test("<ConsumerDefenseItem /> tenga la estructura DOM (incluye classnames) del snapshot", () => {
    const component = render(
      <BrowserRouter>
        <ConsumerDefenseItem title="Title" lastModifiedDate="01/01/2021">
          <p>
            A Paragraph or Many Paragraphs
          </p>
        </ConsumerDefenseItem>
      </BrowserRouter>
    )

    expect(component.container).toMatchSnapshot()
  })
})
