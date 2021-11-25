
function SubscriptionBenefitItem({item}) {
    return (
        <div className="row p-0 HomePage-jc-start">
            <div className="col padding-none HomePage-benefit-item-logo">
                <img className="HomePage-img" src={item.logo} alt={item.text}/>
            </div>
            <div className="col padding-none m-left-0 HomePage-fs-14">
                {item.text}
            </div>
        </div>
    )
}

export default SubscriptionBenefitItem