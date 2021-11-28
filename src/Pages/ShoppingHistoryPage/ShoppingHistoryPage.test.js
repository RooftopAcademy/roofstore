import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShoppingHistoryPage from './ShoppingHistoryPage'

describe('<ShoppingHistoryPage/>',()=>{
  let component
  beforeEach(()=>{
    component = render(
      <BrowserRouter>
        <ShoppingHistoryPage/>
      </BrowserRouter>
    )
  })

  test('Menu has a title',()=>{
    const title = screen.getByText('Mis Compras')
    expect(title).toBeDefined()
  })

  test('Has a navigation icon', ()=>{
    const nav = component.container.querySelector('a')
    const icon = component.container.querySelector('i')
    expect(nav).toContainElement(icon)
  })

  test('Has preview of previous purchases', ()=>{
    const card = component.container.querySelector('.shopping-history-item')
    expect(card).toBeDefined()
  })
})