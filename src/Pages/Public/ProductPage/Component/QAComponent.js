import React from 'react'

function QAComponent({qa}) {
  const { question, answer, date } = qa

  return (
    <div className="row">
      <div className="col padding-none">
        <div className="row padding-none">
          <span>{question}</span>
        </div>
        {/* bloque de las respuesta  */}
        <div className="row padding-none">
          <div className="col">
            <div className="ProductPage-d-flex">
              <div className="ProductPage-question-answer-icon"></div>
              <span className="ProductPage-txt-light-grey">
                {answer}{" "}
                <span className="ProductPage-txt-light-grey ProductPage-text-sm">
                  {date}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QAComponent
