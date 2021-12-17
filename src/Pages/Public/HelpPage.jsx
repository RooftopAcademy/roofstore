import HelpBlock from './HelpPage/HelpBlock'
import SearchHelp from '../../Components/SearchHelp'
import categoryBlocksData from './HelpPage/categoryBlocksData'
import TextPageLayout from '../../Layouts/TextPageLayout'

function HelpPage() {

    const helpTitle = '¿Con qué podemos ayudarte?'

    return (
        <TextPageLayout>
            <div className="row bg-main" >
                <div className="col">
                    <p className="title m-bottom-1">{helpTitle}</p>
                    <SearchHelp />
                    {categoryBlocksData.map(category => {
                        return (
                            <div key={category.id}>
                                <br />
                                <p className="title txt-bold m-bottom-4 m-top-3">{category.title}</p>
                                <HelpBlock items={category.items} dataTestId={category.id} />
                            </div>
                        )
                    })}
                </div>
            </div >
        </TextPageLayout>
    )
}

export default HelpPage