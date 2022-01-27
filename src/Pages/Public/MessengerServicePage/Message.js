import Icon from "../../../Components/Icon";
import TextLine from "../../../Components/TextLine";

function Message({item}) {
    let content

    content = (
        <div className={`container padding-none ${item.send ? 'OffersPage-p-0-left' : 'OffersPage-p-0-right'}`}>
            <div className={`row ${item.send? 'ProductPage-jc-right' : 'jc-start'}`}>
                {!item.send ? 
                    (<div className="col grey-border ProductPage-bg-grey circle ProductPage-as-baseline">
                        <div className="ProductPage-circle-content txt-white">
                            {item.iniciales}
                        </div>
                    </div>) : ''
                }
                <div className="col padding-none">
                    <div className={`row grey-border rounded ${item.send ? 'bg-light-blue' : 'ProductPage-bg-light-grey m-left-5 fd-col'}`}>
                        {!item.audio ? (
                            <>
                                <TextLine text={item.message} className={"Footer-txt-start"}/>
                                {item.docs  &&
                                    <div className="col w-100 padding-none m-top-0">
                                        <button className="bg-white ProductPage-border-none ProductPage-circle">
                                            <Icon icon="file" className={"ProductPage-fs-36"}/>
                                        </button>
                                    </div>
                                }
                            </>) : <audio id="player" className="m-left-5" controls src={item.message}></audio>
                        }
                    </div>
                    <div className={`row padding-none ${item.send ? 'ProductPage-jc-right' : ''}`}>
                        <TextLine text={item.time} className={`ProductPage-txt-light-grey ProductPage-fs-14 ${!item.send ? 'Footer-txt-start m-left-5' : ''}`}/> 
                    </div>
                </div>
            </div>
        </div>
    )

	return content
}

export default Message
