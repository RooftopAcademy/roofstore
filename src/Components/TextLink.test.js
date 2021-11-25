import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TextLink from './TextLink';

describe('<TextLink url="/"/>', () => {
    let component
    beforeEach(() => {
        component = render (
            <BrowserRouter>
                <TextLink url="/">
                    Hola
                </TextLink>
            </BrowserRouter>
        )
    })
    // Check that url is the one insicated in the argument
    test("check that url is the one insicated in the argument", async () => {
        const attributeHrefValue = component.container.querySelector(['a']).attributes['href'].value;
        expect(attributeHrefValue).toBe('/');
    });

    // Check that the children is rendered as content between the tags
    
    test('Check that the children is rendered as content between the tags', async () => {
        const anchorElement = component.container.querySelector(['a'])
        expect(anchorElement).toHaveTextContent("Hola")
    });
})
