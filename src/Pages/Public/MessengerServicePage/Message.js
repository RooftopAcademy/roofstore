import Icon from "../../../Components/Icon";
import TextLine from "../../../Components/TextLine";

function Message({item}) {
    let content

    if(item.send){
        content = (
            <div className="container padding-none OffersPage-p-0-left">
                <div className="row ProductPage-jc-right">
                    <div className="col padding-none">
                        <div className="row grey-border bg-light-blue rounded">
                            <TextLine text={item.message} className={"Footer-txt-start"}/>  
                        </div>
                        <div className="row ProductPage-jc-right padding-none">
                            <TextLine text={item.time} className={"ProductPage-txt-light-grey ProductPage-fs-14"}/>
                        </div>
                    </div>	
                </div>
            </div>
        )
    }else{
        content = (
            <div className="container padding-none OffersPage-p-0-right">
                    <div className="row jc-start">
                        <div className="col grey-border ProductPage-bg-grey circle ProductPage-as-baseline">
                            <div className="ProductPage-circle-content txt-white">
                                {item.iniciales}
                            </div>
                        </div>
                        <div className="col padding-none">
                            <div className="row grey-border ProductPage-bg-light-grey rounded m-left-5 fd-col">
                                <TextLine text={item.message} className={"Footer-txt-start"}/>
                                {item.docs  &&
                                    <div className="col w-100 padding-none m-top-0">
                                        <button className="bg-white ProductPage-border-none ProductPage-circle">
                                            <Icon icon="file" className={"ProductPage-fs-36"}/>
                                        </button>
                                    </div>
                                } 
                            </div>
                            <div className="row padding-none">
                                <TextLine text={item.time} className={"ProductPage-txt-light-grey ProductPage-fs-14 Footer-txt-start m-left-5"}/> 
                            </div>
                        </div>
                    </div>	
                </div>
            )
        }
	return content
}

export default Message