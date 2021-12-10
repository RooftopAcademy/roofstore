import TextLink from "../../Components/TextLink"

function FooterLogin() {
    return (
        <div className='row br-top'>
            <div className='col'>
                <TextLink url={'/login'} className={'txt-blue m-right-0'}>Ingresá</TextLink>
                <span className='br-right'/>
                <TextLink url={'/register'} className={'txt-blue m-left-0'}>Creá tu cuenta</TextLink>
            </div>
        </div>
    )
}

export default FooterLogin
