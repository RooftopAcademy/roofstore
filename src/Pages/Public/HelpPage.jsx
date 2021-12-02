import HelpBlock from './HelpPage/HelpBlock'
import SearchHelp from '../../Components/SearchHelp'
import categoryBlocksData from './HelpPage/categoryBlocksData'

function HelpPage() {

    const helpTitle = '¿Con qué podemos ayudarte?'

    return (
        <div className="row bg-main" >
            <div className="col">
                <p className="title m-bottom-1">{helpTitle}</p>
                <SearchHelp />
                {categoryBlocksData.map(category => {
                    return (
                        <div>
                            <br />
                            <p className="title txt-bold m-bottom-4 m-top-3">{category.title}</p>
                            <HelpBlock items={category.items} dataTestId={category.id} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default HelpPage