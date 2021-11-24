import TextLink from "../../Components/TextLink"

export function CreateAccountCard() {

    const titleText = '¡Creá una cuenta y mejorá tu experiencia!'
    const buttonText = 'Crear cuenta'
    const linkText = 'Ingresar'
    const footerText = '¿Ya tienes cuenta? '

    return (
        <div className="row">
            <div className="col HomePage-col-12 bg-white shadow-sm rounded p-0 HomePage-d-flex fd-col">
                <p className="txt-bold m-bottom-0 HomePage-fs-18">{titleText}</p>
                <button type="button" className="rounded bg-blue HomePage-border-none txt-white p-0 m-bottom-0 HomePage-fs-16" >{buttonText}</button>
                <p className="txt-grey txt-center HomePage-fs-16">
                    {footerText}
                    <TextLink url={'/login'} className={'txt-blue'}>{linkText}</TextLink>
                </p>
            </div>
        </div>
    )
}

export default CreateAccountCard