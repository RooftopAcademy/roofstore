import { Link } from "react-router-dom"
// import Logo from "../../Components/Logo"
import TextLine from "../../Components/TextLine"

function FooterHeader() {
    return (
        <div className='row bg-primary'>
            <div className='col'>
                <Link className={'link'} to={'/login'}>
                    <div className='row padding-none'>
                        <div className='col p-0 shadow-sm rounded' style={{width:'50px'}}>
                            {/* <Logo/> */}
                            <img src="/logo512.png" alt="react-logo"/> 
                        </div>
                        <div className='col'>
                            <TextLine className={'txt-white'} text={'¡Comprá y vendé con la app!'}/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FooterHeader
