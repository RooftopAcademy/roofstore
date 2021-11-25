import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TextTag from './TextTag';

describe('<TextTag text="foo" url="/offers" />', () => {
  let component
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <TextTag text="foo" url="/offers" />
      </BrowserRouter>
    );
  })

  test('not render an paragraph tag', async () => {
    const paragraphElement = component.container.querySelector(['p'])
    expect(paragraphElement).toBeNull()
  });

  test('render an anchor passing it an url in his props', async () => {
    const anchorElement = component.container.querySelector(['a'])
    expect(anchorElement).toBeInTheDocument()
  });

  test('render an anchor with "href" attribute passing it an url in his props', async () => {
    const anchorElement = component.container.querySelector(['a'])
    expect(anchorElement).toHaveAttribute("href")
  });

  test('render an anchor with "href" attribute and value "/offers" using TexTag', async () => {
    const attributeHrefValue = component.container.querySelector(['a']).attributes['href'].value
    expect(attributeHrefValue).toBe("/offers")
  });
  
  test('render a text ("foo") inside component TextTag', async () => {
    const textInScreen = screen.getByText("foo")
    expect(textInScreen).toBeInTheDocument()
  });

  test('render a text ("foo") between anchor tags', async () => {
    const anchorElement = component.container.querySelector(['a'])
    expect(anchorElement).toHaveTextContent("foo")
  });
})


describe('<TextTag text="bar" url="" />', () => {
  let component
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <TextTag text="bar" url="" />
      </BrowserRouter>
    );
  })

  test('not render an anchor tag', async () => {
    const anchorElement = component.container.querySelector(['a'])
    expect(anchorElement).toBeNull()
  });

  test('render a paragraph tag', async () => {
    const paragraphElement = component.container.querySelector(['p'])
    expect(paragraphElement).toBeInTheDocument()
  });

  test('render a text ("bar") inside component TextTag', async () => {
    const textInScreen = screen.getByText("bar")
    expect(textInScreen).toBeInTheDocument()
  });

  test('render a text ("bar") between paragraph tags', async () => {
    const paragraphElement = component.container.querySelector(['p'])
    expect(paragraphElement).toHaveTextContent("bar")
  });
})
