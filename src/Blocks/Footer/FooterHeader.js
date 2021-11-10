import { Link } from "react-router-dom"
// import Logo from "../../Components/Logo"
import TextLine from "../../Components/TextLine"

function FooterHeader() {
    return (
        <Link className={'link'} to={'/login'}>
            <div className='row bg-primary jc-start'>
                <div className='col'>
                    <div className='shadow-sm rounded p-0' style={{width:'50px'}}>
                        {/* <Logo/> */}
                        <img src="/logo512.png" alt="react-logo"/> 
                    </div>
                </div>
                <div className='col padding-none'>
                    <TextLine className={'txt-white'} text={'¡Comprá y vendé con la app!'}/>
                </div>
            </div>
        </Link>
    )
}

export default FooterHeader
