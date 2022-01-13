import {useEffect, useState} from 'react'
import axios from 'axios'
import FeaturedProductsItems from "../Component/FeaturedProductsItems"
import useFetch from '../../../../hooks/useFetch'

function FeaturedProductsBlock({ title, src = '' }) {

  const {data: featuredItems} = useFetch(src)

  return (
    <section>
      <div className="row padding-none">
        <div className="col ProductPage-w-100">
          <h3>{title}</h3>
          <div className="row padding-none ProductPage-slider">
            {featuredItems? <FeaturedProductsItems products={featuredItems} /> : ''}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsBlock
