import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BannerImage from './BannerImage'

// Verificar que sea devuelto dentro de un link

// Verificar que la url de la imagen que devuelva sea la enviada por parametro

describe('<BannerImage src="img.jpg"/>', ()=>{
  let component
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <BannerImage src="img.jpg"/>
      </BrowserRouter>
    )
  })
  test('BannerImage is a link', ()=>{
    const banner = component.container.querySelector('a').attributes['href'].value;
        expect(banner).toBe('/')
  })

  test('BannerImage is iside a link', () => {
    const banner = component.container.querySelector('a')
    const img = component.container.querySelector('img')
    expect(banner).toContainElement(img)
  })

  test('BannerImage src is received by props', () => {
    const src = component.container.querySelector('img').attributes['src'].value
    expect(src).toBe('img.jpg')
  })
})