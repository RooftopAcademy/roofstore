import AutoGrowTextAreaComponent from "../Component/AutoGrowTextAreaComponent"
import KeywordInformationButtonComponent from "../Component/KeywordInformationButtonComponent"
import QAComponent from "../Component/QAComponent"
import { mock_keywordInformation, mock_questionsAnswers } from '../mockData'

function QuestionAndAnswerBlock() {

  return (
    <section className="shadow-sm">
      <div className="row">
        <div className="col ProductPage-w-100 padding-none">
          <h3 className="m-top-2 m-bottom-4">
            Preguntas y respuestas
          </h3>
          <p className="txt-bold OffersPage-m-bottom">¿Qué querés saber?</p>
          <div className="ProductPage-flex-container">
            {mock_keywordInformation.map((keyword) => (
              <KeywordInformationButtonComponent key={keyword}>
                {keyword}
              </KeywordInformationButtonComponent>
            ))}
          </div>

          <p className="txt-bold SearchHelp-m-3-top OffersPage-m-bottom">
            Preguntale al vendedor
          </p>
          <AutoGrowTextAreaComponent />
          <button className="rounded txt-white p-0 bg-blue ProductPage-w-100 input">
            Preguntar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="txt-bold">Últimas realizadas</p>
          {mock_questionsAnswers.map((qa) => (
            <QAComponent qa={qa} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col ProductPage-w-100">
          <button className="rounded txt-blue bg-white p-0 input ProductPage-btn-left">
            Ver todas las preguntas <i className="fas fa-angle-right" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default QuestionAndAnswerBlock
