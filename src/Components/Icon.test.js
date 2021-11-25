import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe("Icon", () => {
    it('should render icon element', async () => {
        render(
            <Icon icon="cart" />
        )
        const iconElement = screen.getByRole("figure")
        expect(iconElement).toBeInTheDocument()
    })

    it('should render icon search element', async () => {
        render(
            <Icon icon="search" />
        )
        const iconElement = screen.getByRole("figure")
        expect(iconElement).toHaveClass("fas fa-search")
    })

})