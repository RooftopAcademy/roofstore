import TextLink from "../../Components/TextLink"

function FooterLogin() {

    const loginText = 'Ingresá'
    const createAccount = 'Creá tu cuenta'
    return (
        <div className='row br-top'>
            <div className='col'>
                <TextLink url={'/login'} className={'txt-blue m-right-0'}>{loginText}</TextLink>
                <span className='br-right'/>
                <TextLink url={'/register'} className={'txt-blue m-left-0'}>{createAccount}</TextLink>
            </div>
        </div>
    )
}

export default FooterLogin
