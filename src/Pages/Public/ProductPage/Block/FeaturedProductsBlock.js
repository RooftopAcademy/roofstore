import {useEffect, useState} from 'react'
import axios from 'axios'
import FeaturedProductsItems from "../Component/FeaturedProductsItems"

function FeaturedProductsBlock({ title, src = '' }) {
  const [featuredItems, setFeaturedItems] = useState([])

  const fetchFeaturedItems = () => axios.get(src).then((response) => {
    setFeaturedItems(response.data)
  })

  useEffect(() => {
    fetchFeaturedItems()
  }, [])

  return (
    <section>
      <div className="row padding-none">
        <div className="col ProductPage-w-100">
          <h3>{title}</h3>
          <div className="row padding-none ProductPage-slider">
            <FeaturedProductsItems products={featuredItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsBlock
