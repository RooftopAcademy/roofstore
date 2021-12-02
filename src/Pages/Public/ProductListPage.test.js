import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import App from '../../App'
import RoundedProductItem from './ProductList/Components/RoundedProductItem'
import ProductList from './ProductListPage'
import Paginator from './ProductList/Components/Paginator'

describe('Test the route: /product-list; ProductListPage', () => {
  beforeEach(() => {
    window.history.pushState({}, 'ProductListPage', '/product-list')
    render(<App />)
  })

  test('redirect to "/product" when click product item', () => {
    const productItemLink = screen.getAllByTestId('product-item')[0].childNodes[0]
    userEvent.click(productItemLink)
    expect(window.location.pathname).toBe('/product')
  })
})

describe('<ProductList />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    )
  })

  test('render navigation bar, the search input with a placeholder "Estoy buscando..."', () => {
    const searcherElement = screen.getByPlaceholderText('Estoy buscando...')
    expect(searcherElement).toBeInTheDocument()
  })

  test('render footer, the text "¡Comprá y vendé con la app!"', () => {
    const searcherElement = screen.getByText('¡Comprá y vendé con la app!')
    expect(searcherElement).toBeInTheDocument()
  })

  test('render a text "Filter"', () => {
    const filterText = screen.getByText('Filtrar')
    expect(filterText).toBeInTheDocument()
  })

  test('render two product lists.', () => {
    const productListLeft = screen.getByTestId('product-list-left')
    const productListRight = screen.getByTestId('product-list-right')

    expect(productListLeft).toBeInTheDocument()
    expect(productListRight).toBeInTheDocument()
  })

  test('render max. 10 product item per columns and min. 1 product item on the left column', () => {
    const productItemsCountLeft = screen.getByTestId('product-list-left').childElementCount
    const productItemsCountRight = screen.getByTestId('product-list-right').childElementCount
    expect(productItemsCountLeft).toBeLessThan(11)
    expect(productItemsCountRight).toBeLessThan(11)
    expect(productItemsCountLeft).toBeGreaterThan(1)
  })
})

describe('<RoundedProductItem />', () => {
  const data = {
    id: 0,
    image: 'https://http2.mlstatic.com/D_NQ_NP_611690-MLA41179103513_032020-O.webp',
    offerType: 'OFERTA DEL DÍA',
    title: 'Motosierra a nafta Philco 52cc MJPMO217 2.4hp',
    price: 9499,
    cup: false,
    discount: 40,
    interestFreeFees: '0',
    ship: {
      type: 'Llega gratis mañana',
      full: false,
    },
    brand: 'generic',
    rated: {
      starAverage: '4.5',
      amount: '680',
    },
    redirect: '/product',
  }

  beforeEach(() => {
    render(
      <BrowserRouter>
        <RoundedProductItem
          data={data}
        />
      </BrowserRouter>
    )
  })
  
  test('render image, title, price, ship cost, review', () => {
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveAttribute('src', data.image)

    const title = screen.getByText(data.title)
    expect(title).toBeDefined()

    const price = screen.getByText(/9.499/i)
    expect(price).toBeInTheDocument()

    const shipCost = screen.getByText(data.ship.type)
    expect(shipCost).toBeInTheDocument()

    const review = screen.getByText(data.rated.amount)
    expect(review).toBeInTheDocument()
  })
})

describe('<Paginator />', () => {
  const currentPage = 1
  const nextUrl = "/"
  const prevUrl = "/"
  const lastPage = 100

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Paginator
          currentPage={currentPage}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
          lastPage={lastPage}
          classNameText={"txt-blue"}
          classNameNumber={"ProductPage-bg-grey ProductList-txt-light-grey"}
        />
      </BrowserRouter>
    )
  })

  test('render current page and last page number', () => {
    const numCurrentPage = screen.getByText(currentPage)
    expect(numCurrentPage).toBeInTheDocument()

    const numLastPage = screen.getByText(/100/i)
    expect(numLastPage).toBeInTheDocument()
  })
})