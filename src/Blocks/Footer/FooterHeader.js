import { Link } from "react-router-dom"
import TextLine from "../../Components/TextLine"

function FooterHeader() {
    return (
        <div className='row bg-primary'>
            <div className='col'>
                <Link className={'link'} to={'/'}>
                    <div className='row padding-none'>
                        <div className='col shadow-sm rounded Footer-w-50px'>
                            <img className="Footer-img" src="/images/rooftop-favicon.png" alt="Logo" />
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
