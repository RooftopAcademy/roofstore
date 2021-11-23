import Icon from '../../../Components/Icon'

export default function ValidateOption({ info, active, optionActive, setOptionActive }) {
    const buttonText = 'Validar'
    return (
        <div className={`row d-flex  jc-space-around round bg-white ai-center padding-card m-bottom-2 ${true === active ? 'grey-border shadow-m' : ''}`}>
            <div className="col d-flex circle fz-l jc-center">
                <Icon icon={info.icon} />
            </div>

            <div className="col padding-none">
                <p>{info.text}</p>
                <p className="txt-grey-copyright fz-sm">{info.subText}</p>
            </div>
            <div className="col padding-none">
                <button onClick={() => setOptionActive(optionActive++)} className={`${active ? 'bg-blue' : ''}  txt-white p-button-validate round txt-bold border-none fz-m`} disabled={!active} >{buttonText}</button>
            </div>
        </div >
    )
}