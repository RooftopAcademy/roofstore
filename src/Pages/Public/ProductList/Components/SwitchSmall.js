import { useState } from "react"

export default function SwitchSmall({ text }) {
  const [ classes, setClasses] = useState("switch-bar-s-off")

  const handleClick = () => {
    (classes === "switch-bar-s-off")
      ? setClasses("switch-bar-s-on")
      : setClasses("switch-bar-s-off")
  }

  return (
    <>
      <p className="OffersPage-m-right">{ text }</p>
      <span className={classes} onClick={handleClick}></span>
    </>
  )
}