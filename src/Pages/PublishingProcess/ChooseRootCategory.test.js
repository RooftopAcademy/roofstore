import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ChooseRootCategory from './ChooseRootCategory'

const MockTodo = () => {
    return(
        <BrowserRouter>
            <ChooseRootCategory/>
        </BrowserRouter>
    )
}

describe('ChooseRootCategory', () => {
    it('should render a category item', async () => {
        render(<MockTodo/>)
        const textElement = screen.getByText(/Productos/i)
        expect(textElement).toBeInTheDocument()
    })

    it('should render four category item', async () => {
        render(<MockTodo/>)
        const divElements = screen.getAllByTestId("category-item")
        expect(divElements.length).toBe(4)
    })
})