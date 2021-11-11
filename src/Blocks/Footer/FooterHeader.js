import { Link } from "react-router-dom"
import Logo from "../../Components/Logo"
import TextLine from "../../Components/TextLine"

function FooterHeader() {
    return (
        <div className='row bg-primary'>
            <div className='col'>
                <Link className={'link'} to={'/login'}>
                    <div className='row padding-none'>
                        <div className='col shadow-sm rounded w-50px'>
                            <Logo/>
                        </div>
                        <div className='col padding-none m-left-2'>
                            <TextLine className={'txt-white'} text={'¡Comprá y vendé con la app!'}/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FooterHeader
