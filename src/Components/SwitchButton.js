
function SwitchButton({isChecked = false, onCheck}) {
    return (
        <label className="switch-button-container">
            <input type="checkbox" checked={isChecked} onChange={onCheck} />
            <span className="switch-button-slider" />
        </label>
    )
}

export default SwitchButton
