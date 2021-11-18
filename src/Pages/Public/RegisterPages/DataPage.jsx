import DataForm from "./DataForm";
import DistractionFreeLayout from "../../../Layouts/DistractionFreeLayout";

function DataPage() {

    const title = '¿Cuál es tu nombre completo y DNI?'
    const explication = 'Completa estos datos tal cual figuran en tu documento de identidad.'

    return (
        <DistractionFreeLayout className="fd-col" isFooter={false}>
            <div className="row grow-1 d-flex ai-start">
                <div className="col">
                    <h1 className="title m-top-1 m-bottom-1">{title}</h1>
                    <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                    <DataForm />
                </div>
            </div>
        </DistractionFreeLayout>
    )
}
export default DataPage;