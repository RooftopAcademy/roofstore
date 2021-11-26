import { Fragment } from 'react'

const ToogleButtons = ({ labels, active, setActive }) => {
  return (
    <section className="ProductPage-toogle-buttons m-bottom-1">
      {Object.keys(labels).map((label) => (
        <Fragment key={label}>
          <input
            className="ProductPage-toogle-radio-input"
            type="radio"
            value={label}
            name="options"
            checked={active === labels[label]}
            readOnly
          />
          <label
            className={`ProductPage-toogle-radio-label p-0 ${
              active === labels[label] && "active"
            }`}
            onClick={() => setActive(labels[label])}
          >
            {labels[label]}
          </label>
        </Fragment>
      ))}
    </section>
  )
}

export default ToogleButtons
