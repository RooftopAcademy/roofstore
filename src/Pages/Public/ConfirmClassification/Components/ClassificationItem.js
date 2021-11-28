import { folderIcon } from "../svgIcon";

export default function ClassificationItem({ data: { name }, num }) {
  const isSubClassif = num ? 'ConfirmClassification-m-3-left' : '';
  const isSubSubClassif = num > 1 ? 'ConfirmClassification-m-6-left' : '';

  return (
    <div className={`col d-flex padding-none OffersPage-m-bottom ${isSubClassif} ${isSubSubClassif} js-classification`}>
      { folderIcon() }
      <p className="OffersPage-p-0-left ConfirmClassification-txt-mb txt-grey">{ name }</p>
    </div>
  )
}