import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PartnerCard from './PartnerCard';
import suscriptions from '../../../public/data/moviesAndSerieData.json'

const MockPartnerCard = () => {
  return(
    <BrowserRouter>
      <PartnerCard suscriptions={suscriptions} />
    </BrowserRouter>
  )
}

describe('PartnerCard', () => {

  beforeEach(async () => {
    render(<MockPartnerCard />)
  })

  it('should render suscriptions card', async () => {
    const divElement = await screen.findByText('HBO Max')
    expect(divElement).toBeInTheDocument()
  })
})