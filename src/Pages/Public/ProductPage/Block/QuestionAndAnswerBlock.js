import AutoGrowTextAreaComponent from "../Component/AutoGrowTextAreaComponent"
import KeywordInformationButtonComponent from "../Component/KeywordInformationButtonComponent"
import QAComponent from "../Component/QAComponent"
import useFetch from "../../../../hooks/useFetch"
import { getKeyWordInformation, getQuestionsAnswers } from "../../../../requests/mocks"

function QuestionAndAnswerBlock() {

  const {data: mock_keywordInformation} = useFetch(getKeyWordInformation)
  const {data: mock_questionsAnswers} = useFetch(getQuestionsAnswers)

  const questionsAndAnswersText = 'Preguntas y respuestas'
  const whatWantToKnowText = '¿Qué querés saber?'
  const askToSellerText = 'Preguntale al vendedor'
  const askButtonText = 'Preguntar'
  const lastQuestionsText = 'Últimas realizadas'
  const seeAllQuestionsText = 'Ver todas las preguntas'

  return (
    <section className="shadow-sm">
      <div className="row">
        <div className="col ProductPage-w-100 padding-none">
          <h3 className="m-top-2 m-bottom-4">
            {questionsAndAnswersText}
          </h3>
          <p className="txt-bold OffersPage-m-bottom">{whatWantToKnowText}</p>
          <div className="ProductPage-flex-container">
            {mock_keywordInformation?.map((keyword) => (
              <KeywordInformationButtonComponent key={keyword}>
                {keyword}
              </KeywordInformationButtonComponent>
            ))}
          </div>

          <p className="txt-bold SearchHelp-m-3-top OffersPage-m-bottom">
            {askToSellerText}
          </p>
          <AutoGrowTextAreaComponent />
          <button className="rounded txt-white p-0 bg-blue ProductPage-w-100 input">
            {askButtonText}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="txt-bold">{lastQuestionsText}</p>
          {mock_questionsAnswers?.map((qa, index) => (
            <QAComponent qa={qa} key={index}/>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col ProductPage-w-100">
          <button className="rounded txt-blue bg-white p-0 input ProductPage-btn-left">
            {seeAllQuestionsText}
            <i className="fas fa-angle-right" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default QuestionAndAnswerBlock
