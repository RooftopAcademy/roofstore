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
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@3x.png?v=1",
            type: "Películas y series",
            offer: "10%",
            offer_day: "7"
        },
        movies: [
            {
                id: 11,
                title: "Raised by wolves",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/Raised-by-wolves@3x.jpg?v=1"
            },
            {
                id: 12,
                title: "The Flight Attendant",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/the-Flight-attendant@3x.jpg?v=1"
            },
            {
                id: 13,
                title: "Justice League",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/Justice-league@3x.jpg?v=1"
            },
            {
                id: 14,
                title: "GOT",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/GOT@3x.jpg?v=1"
            },
            {
                id: 15,
                title: "Friends",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/Friends@3x.jpg?v=1"
            },
            {
                id: 16,
                title: "Harry Potter",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/Harry-Potter@3x.jpg?v=1"
            },
            {
                id: 17,
                title: "Gossip Girl",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/Gossip-Girl@3x.jpg?v=1"
            },
            {
                id: 18,
                title: "The Big Bang Theory",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/carousel/o:f_webp/The-Big-bang-Theory@3x.jpg?v=1"
            }
        ]
    },
    {
        partner: {
            id: 2,
            name: "Paramount+",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@3x.png",
            type: "Películas y series",
            offer: "10%",
            offer_day: "7"
        },
        movies: [
            {
                id: 19,
                title: "The Handmaid's Tale",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/handmails-tale@3x.jpg"
            },
            {
                id: 20,
                title: "Your Honor",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/your-honor@3x.jpg"
            },
            {
                id: 21,
                title: "Kamp Koral",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/kamp-koral@3x.jpg"
            },
            {
                id: 22,
                title: "Yellowstone",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/yellowstone@3x.jpg"
            },
            {
                id: 23,
                title: "Paw Patrol",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/paw-patrol@3x.jpg"
            },
            {
                id: 24,
                title: "Ordinary Love",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/ordinary-love@3x.jpg"
            },
            {
                id: 25,
                title: "The Astronauts",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/the-astronauts@3x.jpg"
            },
            {
                id: 26,
                title: "Interrogation",
                image: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/carousel/o:f_webp/interrogation@3x.jpg"
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