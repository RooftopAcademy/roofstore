
import DistractionFreeLayout from '../../Layouts/DistractionFreeLayout'
import FormLogin from './LoginPage/FormLogin'
import TextLine from '../../Components/TextLine'
import { Link } from 'react-router-dom'
function LoginPage() {
    return (
        <DistractionFreeLayout>
            <div className="container">
                <div className="row jc-center">
                    <div className="col padding-none fd-col login-flex">
                        <div className="row padding-none grow-1">
                            <div className="col padding-none">
                                <h1 className="title">¡Hola! Ingresá tu teléfono, e‑mail o usuario</h1>
                                <FormLogin />
                                {/* <TextLink className="fz-sm txt-center" url="/register" >Necesito ayuda para ingresar</TextLink> */}
                            </div>
                        </div>
                        <div className="row padding-none">
                            <div className="col padding-none">
                                <TextLine className="txt-blue fz-sm txt-bold" text="Necesito ayuda para ingresar" />
                                <div className="txt-center fz-xsm txt-grey-copyright p-0">Protegido por reCAPTCHA-<span className="fz-xsm txt-blue">Privacidad</span>-<span className="fz-xsm txt-blue">Condiciones</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DistractionFreeLayout >
    )
}

export default LoginPage