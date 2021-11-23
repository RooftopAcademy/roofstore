import DataForm from "./DataForm";

function DataPage({ optionActive, setOptionActive, className }) {

    const title = '¿Cuál es tu nombre completo y DNI?'
    const explication = 'Completa estos datos tal cual figuran en tu documento de identidad.'

    return (
        <div className={`row grow-1 d-flex ai-start ${className}`}>
            <div className="col">
                <h1 className="title m-top-1 m-bottom-1">{title}</h1>
                <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                <DataForm setOptionActive={setOptionActive} optionActive={optionActive} />
            </div>
        </div>
    )
}
export default DataPage;