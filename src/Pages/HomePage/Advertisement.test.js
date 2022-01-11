import { render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Advertisement from './Advertisement'

describe('Advertisement component test', () => {

    it('should render the component <Advertisement /> with a link passed by prop on an object data', () => {

        const advertisement =  {
            'title': "PEQUEÑOS ELECTRO",
            'body1': "EQUIPÁ TU HOGAR",
            'body2': "EN 6X SIN INTERÉS",
            'image': "/images/cafetera.webp",
            'redirect': "/offers"
        }

        render(
            <BrowserRouter>
                <Advertisement item={advertisement} textLink="Ver más"/>
            </BrowserRouter>
        )
        
        const anchorElement = screen.getByRole('link')
        const redirect = anchorElement.attributes["href"].value
        expect(redirect).toBe('/offers')
    })
    
})
