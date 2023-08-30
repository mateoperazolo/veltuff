import { Fragment } from "react";
import React from "react";
import './item.css';
import { Modal } from "../Modal";


function Item ({
  xref,
  itemNo_,
  code,
  description,
  colourCode,
  sizeCode
})  {

  const [isModalOpen, setIsModalOpen] = React.useState(false)  // contiene el estado del Modal

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const getSrcFromItemNo = (itemNo) => {
    const firstTwoLetters = itemNo.slice(0, 2);
    if (firstTwoLetters === "SH") {
      return "https://cdn-icons-png.flaticon.com/512/11102/11102131.png";
    } else if (firstTwoLetters === "CW") {
      return "https://cdn-icons-png.flaticon.com/512/8851/8851267.png";
    } else if (firstTwoLetters === "TR") {
      return "https://cdn-icons-png.flaticon.com/512/9373/9373390.png";
    } else if (firstTwoLetters === "SF") {
      return "https://cdn-icons-png.flaticon.com/512/8789/8789848.png";
    } else if (firstTwoLetters === "GL") {
      return "https://cdn-icons-png.flaticon.com/512/2939/2939034.png";
    } else if (firstTwoLetters === "TH") {
      return "https://cdn-icons-png.flaticon.com/512/3370/3370123.png";
    } else if (firstTwoLetters === "BW") {
      return "https://cdn-icons-png.flaticon.com/512/827/827527.png";
    } else if (firstTwoLetters === "FW") {
      return "https://cdn-icons-png.flaticon.com/512/6960/6960342.png";
    } else if (firstTwoLetters === "HV") {
      return "https://cdn-icons-png.flaticon.com/512/1485/1485669.png";
    } else if (firstTwoLetters === "BS") {
      return "https://cdn-icons-png.flaticon.com/512/8491/8491612.png";
    } else if (firstTwoLetters === "JK") {
      return "https://cdn-icons-png.flaticon.com/512/8516/8516094.png";
    } else if (firstTwoLetters === "EP") {
      return "https://cdn-icons-png.flaticon.com/512/8671/8671553.png";
    } else if (firstTwoLetters === "VP") {
      return "https://cdn-icons-png.flaticon.com/512/4108/4108106.png";
    } else if (firstTwoLetters === "HP") {
      return "https://cdn-icons-png.flaticon.com/512/2028/2028052.png";
    } else if (firstTwoLetters === "PP") {
      return "https://cdn-icons-png.flaticon.com/512/8671/8671581.png";
    } else {
      return "https://cdn-icons-png.flaticon.com/512/11445/11445159.png";
    }
  };

  const src = getSrcFromItemNo(itemNo_);

  return (
    <Fragment>
      <div
      className="contentItem"
      onClick={openModal}>
        <img className="imagenEj"
        src={src} />

        <div className="contentInfoItems">

          <h1 className="numberItem">{itemNo_}</h1>

          <h2>{description}</h2>

          <div className="contentVariantCZ">

            <div className="contentColorZide">
              <h2 className="color">{colourCode}</h2>
              <h2 className="zide">{sizeCode}</h2>
            </div>

            <h2>{code}</h2>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal
      closeModal={closeModal}
      xref={xref}
      itemNo_={itemNo_}
      description={description}
      colourCode={colourCode}
      sizeCode={sizeCode}
      code={code}
       />}
    </Fragment>
  )
}

export {Item}

