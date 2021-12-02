import WebsiteLayout from '../../Layouts/WebsiteLayout';
import CategoriesPageData from './CategoriesPageData';
import CategoriesPageItem from './CategoriesPageItem';

function CategoriesPage () {
  const data = CategoriesPageData
  const services = data.filter(category => category.section === 1)
  const categories = data.filter(category => category.section === 2)
  return (
    <WebsiteLayout>
      <div className="row bg-main">
        <div className="col w-100">
          <h3>Categorías</h3>
          <div className="row w-100">
            <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
              {services.map((service) => {
                return <CategoriesPageItem categoryData={service} key={service.id} />
              })}
            </div>
          </div>
          <div className="row w-100">
            <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
              {categories.map((category) => {
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