import WebsiteLayout from '../../Layouts/WebsiteLayout';
import CategoriesPageItem from './CategoriesPageItem';
import useFetch from '../../hooks/useFetch';
import { getCategories } from '../../requests/categories';

function CategoriesPage () {
  const {data: categoriesData} = useFetch(getCategories)
  const services = categoriesData?.filter(category => category.section === 1)
  const categories = categoriesData?.filter(category => category.section === 2)
  const categorieText = 'Categorías'

  return (
    <WebsiteLayout>
      <div className="row bg-main">
        <div className="col w-100">
          <h3 className='m-left-4'>{categorieText}</h3>
          <div className="row w-100">
            <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
              {services?.map((service) => {
                return <CategoriesPageItem categoryData={service} key={service.id} />
              })}
            </div>
          </div>
          <div className="row w-100">
            <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
              {categories?.map((category) => {
                return <CategoriesPageItem categoryData={category} key={category.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}

export default CategoriesPage