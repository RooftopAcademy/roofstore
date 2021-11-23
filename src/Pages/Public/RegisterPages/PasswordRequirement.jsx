function PasswordRequirement({ text }) {

    return (
        <div className="row d-flex padding-none jc-start">
            <div className={`checkItem m-right-0`}></div>
            <p className={`fz-sm txt-grey-copyright `}>{text}</p>
        </div>
    )
}

export default PasswordRequirement;