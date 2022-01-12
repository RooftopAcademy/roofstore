import DistractionFreeLayout from '../../Layouts/DistractionFreeLayout'
import FormLogin from './LoginPage/FormLogin'
import TextLine from '../../Components/TextLine'
import TextLink from '../../Components/TextLink'

function LoginPage() {

    const title = '¡Hola! Ingresá tu teléfono, e‑mail o usuario'
    const reCaptcha = 'Protegido por reCAPTCHA-'
    const privacy = 'Privacidad'
    const conditions = 'Condiciones'
    const needHelp = 'Necesito ayuda para ingresar'

    return (
        <DistractionFreeLayout className="fd-col" isFooter={true}>
            <div className="row grow-1 d-flex ai-start">
                <div className="col">
                    <h1 className="title m-top-1 m-bottom-5">{title}</h1>
                    <FormLogin />
                </div>
            </div>
            <div className="row jc-center">
                <div className="col">
                    <TextLine className="txt-blue fz-sm txt-bold" text={needHelp} />
                    <div className="txt-center fz-xsm txt-grey-copyright p-0">{reCaptcha}<TextLink url={"/"} className="fz-xsm txt-blue">{privacy}</TextLink>-<TextLink url={"/"} className="fz-xsm txt-blue">{conditions}</TextLink></div>
                </div>
            </div>
        </DistractionFreeLayout>
    )
}

export default LoginPage