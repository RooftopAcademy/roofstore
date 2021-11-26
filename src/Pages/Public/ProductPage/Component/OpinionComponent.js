import React from "react"

function OpinionComponent({ opinion }) {
  const { title, review, likes, dislikes } = opinion

  return (
    <div className="row">
      <div className="col padding-none">
        <div className="row link-color ProductPage-row-left padding-none">
          <span>
            <i className="fas fa-star link-color" />
          </span>
          <span>
            <i className="fas fa-star link-color" />
          </span>
          <span>
            <i className="fas fa-star link-color" />
          </span>
          <span>
            <i className="fas fa-star-half-alt link-color" />
          </span>
          <span>
            <i className="far fa-star link-color" />
          </span>
        </div>
        <p className="txt-bold m-bottom-3">{title}</p>
        <p>{review}</p>
        <div className="row padding-none m-top-1">
          <div className="col padding-none">
            <span>
              <i className="far fa-thumbs-up" /> {likes}
            </span>
            <span className="m-left-4">
              <i className="far fa-thumbs-down" /> {dislikes}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpinionComponent
