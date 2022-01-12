import { render, screen, fireEvent } from '@testing-library/react';
import axiosMock from 'axios'
import { BrowserRouter } from 'react-router-dom';
import MarketPointPage from './MarketPointsPage';

const MockMarketPointsPage = () => {
  return(
    <BrowserRouter>
      <MarketPointPage />
    </BrowserRouter>
  )
}

const mockStoreResponse = {
  data: [
    {
        name: "tienda1",
        logo: "https://mla-s2-p.mlstatic.com/650590-MLA41109062101_032020-G.jpg",
        offer: "5"
    },
    {
        name: "Rapanui",
        logo: "https://mla-s2-p.mlstatic.com/765616-MLA40026415645_122019-G.jpg",
        offer: "15"
    },
    {
        name: "Volta",
        logo: "https://mla-s2-p.mlstatic.com/622540-MLA48343155800_112021-G.jpg",
        offer: "20"
    }
  ]
}
const mockLevelBenefitResponse = {
  data: [
    {
        logo: "tag",
        title: "Ofertas exclusivas",
        level: "3"
    },
    {
        logo: "truck",
        title: "15% OFF en envíos de productos desde $ 1.000",
        level: "3"
    }
  ]
}
const mockSuscriptionResponse = {
  data: [
    {
        partner: {
            id: 1,
            name: "HBO Max",
            logo: "/images/hbo-max.png",
            type: "Películas y series",
            offer: "10%",
            offer_day: "7"
        },
        movies: [
            {
                id: 11,
                title: "Raised by wolves",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 12,
                title: "The Flight Attendant",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 13,
                title: "Justice League",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 14,
                title: "GOT",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 15,
                title: "Friends",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 16,
                title: "Harry Potter",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 17,
                title: "Gossip Girl",
                image: "/images/raised-by-wolves.webp"
            },
            {
                id: 18,
                title: "The Big Bang Theory",
                image: "/images/raised-by-wolves.webp"
            }
        ]
    },
    {
        partner: {
            id: 2,
            name: "Paramount+",
            logo: "/images/hbo-max.png",
            type: "Películas y series",
            offer: "10%",
            offer_day: "7"
        },
        movies: [
            {
                id: 19,
                title: "The Handmaid's Tale",
                image: "/images/interrogation.webp"
            },
            {
                id: 20,
                title: "Your Honor",
                image: "/images/interrogation.webp"
            },
            {
                id: 21,
                title: "Kamp Koral",
                image: "/images/interrogation.webp"
            },
            {
                id: 22,
                title: "Yellowstone",
                image: "/images/interrogation.webp"
            },
            {
                id: 23,
                title: "Paw Patrol",
                image: "/images/interrogation.webp"
            },
            {
                id: 24,
                title: "Ordinary Love",
                image: "/images/interrogation.webp"
            },
            {
                id: 25,
                title: "The Astronauts",
                image: "/images/interrogation.webp"
            },
            {
                id: 26,
                title: "Interrogation",
                image: "/images/interrogation.webp"
            }
        ]
    }
  ]
}


describe('MarketPointsPage', () => {

  beforeEach( async () => {
    axiosMock.get.mockResolvedValueOnce(mockSuscriptionResponse)
    axiosMock.get.mockResolvedValueOnce(mockStoreResponse)
    axiosMock.get.mockResolvedValueOnce(mockLevelBenefitResponse)
    render(<MockMarketPointsPage/>)
  })

  it('should render suscriptions', async () => {
    const storesElement = await screen.findAllByTestId('local-store-test')
    expect(storesElement.length).toBe(3)
  })

  it('should render level benefit card', async () => {
    const levelBenefitElement = await screen.findAllByTestId('level-benefit-test')
    expect(levelBenefitElement.length).toBe(2)
  })
})